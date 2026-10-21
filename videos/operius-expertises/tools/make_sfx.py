"""Synthesize every sound for the OPERIUS expertises film (no third-party samples, no licences).

Run from the project root:  python3 -I tools/make_sfx.py      (needs numpy + scipy; ffmpeg for the pad)
Writes 48 kHz stereo WAVs to assets/sfx/, the ambient pad to assets/sfx/pad.mp3, and the placement
list to assets/sfx/cues.json, which tools/make-index.mjs turns into <audio> elements. Seeded:
identical files on every run. Cue times are GLOBAL film seconds (scene start + local time).
"""
import json
import os
import subprocess
import wave

import numpy as np
from scipy import signal

SR = 48000
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
OUT = os.path.join(ROOT, "assets", "sfx")
os.makedirs(OUT, exist_ok=True)
rng = np.random.default_rng(11)
lengths = {}


def t_axis(d):
    return np.arange(int(d * SR)) / SR


def noise(d):
    return rng.standard_normal(int(d * SR))


def ad(n, attack, decay_tau):
    t = np.arange(n) / SR
    return np.clip(t / max(attack, 1e-4), 0, 1) * np.exp(-t / decay_tau)


def hann_env(n, a=0.15, r=0.35):
    e = np.ones(n)
    na, nr = int(n * a), int(n * r)
    e[:na] = np.sin(np.linspace(0, np.pi / 2, na)) ** 2
    e[n - nr:] = np.cos(np.linspace(0, np.pi / 2, nr)) ** 2
    return e


def svf_bp(x, fc, q):
    f = 2 * np.sin(np.pi * np.minimum(fc, SR / 6.5) / SR)
    damp = 1.0 / q
    low = band = 0.0
    y = np.empty_like(x)
    for i in range(len(x)):
        low += f[i] * band
        high = x[i] - low - damp * band
        band += f[i] * high
        y[i] = band
    return y


def lp(x, fc, order=2):
    b, a = signal.butter(order, fc / (SR / 2), "low")
    return signal.lfilter(b, a, x)


def hp(x, fc, order=2):
    b, a = signal.butter(order, fc / (SR / 2), "high")
    return signal.lfilter(b, a, x)


def glide(f0, f1, d, curve=1.0):
    t = t_axis(d)
    f = f0 * (f1 / f0) ** ((t / d) ** curve)
    return np.sin(2 * np.pi * np.cumsum(f) / SR)


def add(y, x, i):
    m = min(len(x), len(y) - i)
    if m > 0:
        y[i:i + m] += x[:m]


def write(name, mono, pan=0.0, peak_db=-6.0, stereo=None):
    if stereo is None:
        mono = mono / (np.max(np.abs(mono)) + 1e-9) * (10 ** (peak_db / 20))
        l = mono * np.sqrt(0.5 * (1 - pan))
        r = mono * np.sqrt(0.5 * (1 + pan))
        st = np.stack([l, r], axis=1) * np.sqrt(2)
    else:
        st = stereo
    st = np.clip(st, -1, 1)
    with wave.open(os.path.join(OUT, name), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((st * 32767).astype("<i2").tobytes())
    lengths[name] = round(len(st) / SR, 3)


# ---------------------------------------------------------------- one-shots
def whoosh(name, d, f0, f1, peak=-8.0, pan_sweep=0.0, q=1.6):
    n = int(d * SR)
    t = np.arange(n) / n
    # centre frequency sweeps up to f1 at the midpoint, then back down
    fc = np.where(t < 0.5, f0 * (f1 / f0) ** (t * 2), f1 * (f0 / f1) ** ((t - 0.5) * 2))
    y = svf_bp(noise(d), fc, q)
    y *= hann_env(n, 0.35, 0.45)
    y = y / (np.max(np.abs(y)) + 1e-9) * (10 ** (peak / 20))
    if pan_sweep:
        pan = np.linspace(-pan_sweep, pan_sweep, n)
        st = np.stack([y * np.sqrt(0.5 * (1 - pan)), y * np.sqrt(0.5 * (1 + pan))], axis=1) * np.sqrt(2)
        write(name, None, stereo=st)
    else:
        write(name, y, 0.0, peak)


def pop(name, f0, d=0.16, peak=-8.0, pan=0.0):
    t = t_axis(d)
    y = glide(f0 * 1.9, f0 * 0.8, d, 0.6) * ad(len(t), 0.002, 0.045)
    y += 0.25 * hp(noise(d), 2500) * ad(len(t), 0.001, 0.008)
    write(name, y, pan, peak)


def tick(name, f=1800, d=0.07, peak=-14.0):
    t = t_axis(d)
    y = np.sin(2 * np.pi * f * t) * ad(len(t), 0.001, 0.014) + 0.3 * hp(noise(d), 4000) * ad(len(t), 0.0005, 0.004)
    write(name, y, 0.0, peak)


def click(name):
    d = 0.09
    t = t_axis(d)
    y = hp(noise(d), 3000) * ad(len(t), 0.0004, 0.006) + 0.6 * np.sin(2 * np.pi * 2300 * t) * ad(len(t), 0.0008, 0.012)
    write(name, y, 0.0, -9.0)


def ticks_seq(name, times, freqs, d_total, peak=-14.0, f_jit=0.0):
    y = np.zeros(int(d_total * SR))
    for k, tm in enumerate(times):
        f = freqs[k % len(freqs)] * (1 + f_jit * (rng.random() - 0.5))
        n = int(0.07 * SR)
        tt = np.arange(n) / SR
        s = np.sin(2 * np.pi * f * tt) * ad(n, 0.001, 0.016) + 0.25 * hp(noise(0.07), 4000) * ad(n, 0.0005, 0.005)
        add(y, s, int(tm * SR))
    write(name, y, 0.0, peak)


def hop(name):
    d = 0.24
    t = t_axis(d)
    y = glide(240, 560, d, 0.7) * ad(len(t), 0.004, 0.09) + 0.3 * glide(480, 1120, d, 0.7) * ad(len(t), 0.004, 0.06)
    write(name, y, 0.0, -10.0)


def land(name):
    d = 0.16
    t = t_axis(d)
    y = glide(170, 65, d, 0.5) * ad(len(t), 0.002, 0.05) + 0.2 * lp(noise(d), 900) * ad(len(t), 0.001, 0.02)
    write(name, y, 0.0, -9.0)


def impact(name):
    d = 0.9
    t = t_axis(d)
    y = glide(120, 38, d, 0.35) * ad(len(t), 0.003, 0.22) + 0.35 * lp(noise(d), 600) * ad(len(t), 0.001, 0.08)
    write(name, y, 0.0, -6.0)


def bell(f, d, tau=0.5, partials=(1, 2.76, 5.4), amps=(1, 0.35, 0.12)):
    t = t_axis(d)
    y = np.zeros_like(t)
    for p, a in zip(partials, amps):
        y += a * np.sin(2 * np.pi * f * p * t) * np.exp(-t / (tau / (1 + 0.6 * (p - 1))))
    return y * np.clip(t / 0.003, 0, 1)


def chime(name, base=880, d=1.5):
    y = bell(base, d, 0.6)
    add(y, 0.7 * bell(base * 1.5, d - 0.11, 0.6), int(0.11 * SR))
    add(y, 0.5 * bell(base * 2, d - 0.22, 0.6), int(0.22 * SR))
    write(name, y, 0.0, -10.0)


def ping(name, f=1568, d=0.7):
    write(name, bell(f, d, 0.35), 0.0, -14.0)


def sparkle(name, d=0.9):
    y = np.zeros(int(d * SR))
    for _ in range(10):
        f = rng.uniform(2200, 6200)
        tm = rng.uniform(0, d * 0.55)
        n = int(0.28 * SR)
        tt = np.arange(n) / SR
        s = np.sin(2 * np.pi * f * tt) * np.exp(-tt / 0.07) * rng.uniform(0.4, 1.0)
        add(y, s, int(tm * SR))
    write(name, y, 0.0, -13.0)


def ui_on(name, d=0.55):
    t = t_axis(d)
    y = glide(300, 900, d, 0.8) * hann_env(len(t), 0.2, 0.5) * 0.7 + 0.4 * glide(600, 1800, d, 0.8) * hann_env(len(t), 0.3, 0.5)
    write(name, y, 0.0, -12.0)


def ripple(name, d=1.6):
    t = t_axis(d)
    y = 0.6 * glide(380, 1500, d, 1.5) * (1 + 0.3 * np.sin(2 * np.pi * 7 * t))
    y += 0.5 * svf_bp(noise(d), 800 + 2600 * (t / d) ** 2, 4)
    y *= hann_env(len(t), 0.1, 0.7)
    write(name, y, 0.0, -11.0)


def riser(name, d=0.9, peak=-9.0):
    n = int(d * SR)
    t = np.arange(n) / n
    y = svf_bp(noise(d), 250 * (5200 / 250) ** t, 2.2) * t ** 1.4
    y += 0.5 * glide(200, 1800, d, 1.6) * t ** 1.6
    write(name, y, 0.0, peak)


def whirl(name, d=1.3):
    n = int(d * SR)
    t = np.arange(n) / SR
    k = np.arange(n) / n
    y = svf_bp(noise(d), 500 + 2800 * k ** 1.2, 3) * (0.3 + k)
    y += 0.4 * glide(300, 1900, d, 1.4) * k
    y *= hann_env(n, 0.15, 0.35)
    pan = np.sin(2 * np.pi * (3 + 6 * k) * t) * 0.8
    y = y / (np.max(np.abs(y)) + 1e-9) * 10 ** (-9 / 20)
    st = np.stack([y * np.sqrt(0.5 * (1 - pan)), y * np.sqrt(0.5 * (1 + pan))], axis=1) * np.sqrt(2)
    write(name, None, stereo=st)


def logo_sting(name, d=3.2):
    n = int(d * SR)
    y = np.zeros(n)
    rs = int(1.15 * SR)
    r = svf_bp(noise(1.15), 300 * (6000 / 300) ** (np.arange(rs) / rs), 2.0) * (np.arange(rs) / rs) ** 1.5
    add(y, 0.9 * r / (np.max(np.abs(r)) + 1e-9), 0)
    add(y, 0.35 * glide(220, 1760, 1.15, 1.7) * (np.arange(rs) / rs) ** 1.7, 0)
    start = int(1.15 * SR)
    for f, a in [(523.25, 1.0), (659.25, 0.8), (783.99, 0.8), (1174.7, 0.5)]:
        add(y, a * bell(f, d - 1.15, 1.2, partials=(1, 2.0, 3.0), amps=(1, 0.25, 0.1)), start)
    add(y, 0.8 * glide(130, 52, d - 1.15, 0.35) * np.exp(-t_axis(d - 1.15) / 0.5), start)
    write(name, y, 0.0, -7.0)


def pad(name, total=58.0):
    n = int(total * SR)
    t = np.arange(n) / SR
    chords = [
        [130.81, 196.0, 246.94, 329.63],  # Cmaj7
        [110.0, 164.81, 196.0, 261.63],   # Am7
        [87.31, 130.81, 164.81, 220.0],   # Fmaj7
        [98.0, 146.83, 196.0, 246.94],    # G
    ]
    seg = total / 8
    y = np.zeros(n)
    for s in range(8):
        ch = chords[s % 4]
        t0, t1 = s * seg - 1.5, (s + 1) * seg + 1.5
        e = np.clip(np.minimum((t - t0) / 1.5, (t1 - t) / 1.5), 0, 1) ** 1.5
        for f in ch:
            for det in (-0.004, 0.0, 0.004):
                ph = rng.uniform(0, 2 * np.pi)
                y += e * np.sin(2 * np.pi * f * (1 + det) * t + ph) * 0.22
            y += e * np.sin(2 * np.pi * f * 2 * t) * 0.05
    y = lp(y, 1400, 2)
    y *= 0.8 + 0.2 * np.sin(2 * np.pi * 0.11 * t)
    y *= np.clip(t / 2.0, 0, 1) * np.clip((total - t) / 3.0, 0, 1)
    y = y / np.max(np.abs(y)) * 10 ** (-17 / 20)
    wp = os.path.join(OUT, "_pad.wav")
    st = np.stack([y, np.roll(y, int(0.012 * SR))], axis=1)
    with wave.open(wp, "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((np.clip(st, -1, 1) * 32767).astype("<i2").tobytes())
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wp, "-codec:a", "libmp3lame", "-b:a", "128k", os.path.join(OUT, name)], check=True)
    os.remove(wp)
    lengths[name] = total


# ---------------------------------------------------------------- build the sound set
whoosh("whoosh-soft.wav", 0.9, 400, 2600, -9.0, 0.5)
whoosh("whoosh-big.wav", 1.2, 250, 3800, -6.0, 0.6, 1.3)
for i in range(6):
    pop(f"pop-{i}.wav", 520 * 2 ** (i / 6), 0.17, -9.0, (i - 2.5) * 0.12)
pop("pop-low.wav", 420, 0.2, -8.0)
tick("tick.wav")
click("click.wav")
hop("hop.wav")
land("land.wav")
impact("impact.wav")
chime("chime.wav", 880)
chime("chime-soft.wav", 1174.7, 1.2)
ping("ping.wav")
sparkle("sparkle.wav")
ui_on("ui-on.wav")
ripple("ripple.wav")
riser("riser.wav", 0.9)
whirl("whirl.wav")
logo_sting("logo-sting.wav")
# sequences aligned with the staggered animations
ticks_seq("typing.wav", [i * (1.0 / 28) for i in range(28)], [1500, 1750, 1300, 1900, 1600], 1.1, -16.0, 0.2)
ticks_seq("assemble-site.wav", [0, 0.05, 0.12, 0.2, 0.28, 0.4, 0.47, 0.6, 0.9, 1.02, 1.14, 1.4, 1.48, 1.56, 1.64], [1100, 1500, 1300, 1700, 1250], 1.9, -15.0, 0.1)
ticks_seq("assemble-frag.wav", [i * 0.05 for i in range(22)], [1400, 1800, 1600, 2000, 1500], 1.3, -16.0, 0.3)
ticks_seq("assemble-card.wav", [i * 0.1 for i in range(13)], [1300, 1700, 1500, 1900], 1.5, -15.0, 0.1)
ticks_seq("assemble-brand.wav", [i * 0.17 for i in range(15)], [1000, 1400, 1200, 1600, 1100], 2.7, -15.0, 0.2)
ticks_seq("assemble-map.wav", [i * 0.09 for i in range(16)], [900, 1200, 1050, 1400], 1.6, -17.0, 0.4)
ticks_seq("drops.wav", [i * 0.16 for i in range(10)], [1300, 1700, 1500, 2000, 1600], 1.8, -14.0, 0.1)
pad("pad.mp3", 58.0)

# ---------------------------------------------------------------- placement (global seconds)
cues = []


def C(name, t, vol=0.8, file=None):
    f = file or (name if "." in name else name + ".wav")
    cues.append({"name": name, "file": f, "t": round(t, 3), "dur": lengths[f], "vol": vol})


C("pad", 0.0, 0.5, "pad.mp3")
# scene 1 — intro (0)
C("whoosh-soft", 0.45, 0.45)
C("land", 1.3, 0.7)
C("tick", 1.55, 0.5); C("tick", 1.9, 0.5); C("tick", 2.1, 0.5)
C("ui-on", 2.4, 0.6)
C("hop", 2.99, 0.7); C("land", 3.39, 0.6)
C("ripple", 3.35, 0.7); C("click", 3.4, 0.7)
C("whoosh-soft", 3.5, 0.5)
for i in range(6):
    C("pop-" + str(i), 4.0 + i * 0.15, 0.7, f"pop-{i}.wav")
C("whoosh-soft", 4.55, 0.7)
C("riser", 5.1, 0.7)
C("impact", 5.35, 0.8)
C("whoosh-big", 5.65, 0.8)
# scene 2 — site (6.0)
C("hop", 6.49, 0.7); C("land", 6.99, 0.6)
C("whoosh-soft", 7.0, 0.55)
C("assemble-site", 8.0, 0.8)
C("pop-low", 9.8, 0.7)
C("whoosh-soft", 10.15, 0.5)
C("hop", 11.09, 0.7); C("land", 11.44, 0.6)
C("click", 11.5, 0.8)
C("chime-soft", 11.75, 0.6)
C("whoosh-big", 12.05, 0.8)
C("sparkle", 12.6, 0.55)
# scene 3 — SEO (13.8)
C("whoosh-soft", 14.25, 0.5); C("land", 14.85, 0.7)
C("whoosh-soft", 14.8, 0.5)
C("typing", 16.1, 0.8)
C("assemble-card", 17.15, 0.5)
for i in range(3):
    C("pop-" + str(i + 2), 17.7 + i * 0.3, 0.6, f"pop-{i + 2}.wav")
C("whoosh-soft", 18.7, 0.6)
C("chime", 19.7, 0.6)
C("whoosh-big", 19.9, 0.7)
# scene 4 — Google (20.8)
C("assemble-map", 21.1, 0.7)
for i in range(4):
    C("pop-" + str(i), 21.8 + i * 0.22, 0.6, f"pop-{i}.wav")
C("hop", 22.14, 0.7); C("land", 22.54, 0.6)
C("hop", 23.09, 0.7); C("land", 23.49, 0.6)
C("whoosh-soft", 23.8, 0.5)
C("assemble-card", 24.1, 0.6)
for i in range(5):
    C("ping", 24.5 + i * 0.08, 0.35)
C("click", 25.8, 0.8)
C("ripple", 25.95, 0.5)
C("chime", 26.25, 0.6)
C("sparkle", 26.5, 0.6)
C("whoosh-big", 26.9, 0.7)
C("whoosh-soft", 27.05, 0.5)
# scene 5 — contenus (27.8)
C("pop-low", 28.3, 0.7); C("whoosh-soft", 28.3, 0.4)
C("pop-3", 29.5, 0.7)
C("whoosh-soft", 30.15, 0.55)
C("pop-4", 30.4, 0.7)
C("assemble-frag", 30.5, 0.8)
C("whoosh-soft", 31.3, 0.5); C("whoosh-soft", 31.6, 0.5)
C("ripple", 32.1, 0.5)
for i in range(6):
    C("ping", 32.25 + i * 0.12, 0.3)
C("pop-1", 32.8, 0.6); C("pop-2", 33.0, 0.6)
C("riser", 33.55, 0.6)
C("whoosh-big", 33.75, 0.8)
# scene 6 — identité (34.8)
C("hop", 35.49, 0.7); C("land", 35.99, 0.6)
C("whoosh-soft", 36.1, 0.5)
C("assemble-brand", 36.3, 0.8)
C("whoosh-soft", 39.7, 0.5)
for i in range(5):
    C("pop-" + str(i), 40.8 + i * 0.1, 0.55, f"pop-{i}.wav")
C("sparkle", 40.9, 0.6)
C("whoosh-big", 41.3, 0.8)
# scene 7 — réseaux (41.8)
C("hop", 42.49, 0.7); C("land", 42.99, 0.6)
for i in range(4):
    C("pop-" + str(i), 42.8 + i * 0.12, 0.5, f"pop-{i}.wav")
C("whoosh-soft", 43.9, 0.5)
C("pop-4", 44.35, 0.7); C("pop-2", 44.8, 0.6); C("pop-3", 45.05, 0.6)
C("whoosh-soft", 45.3, 0.5)
C("drops", 46.1, 0.8)
C("chime", 47.8, 0.7)
C("whirl", 48.15, 0.7)
C("whoosh-big", 48.45, 0.7)
# scene 8 — conclusion (48.8)
for i in range(6):
    C("pop-" + str(i), 49.3 + i * 0.16, 0.6, f"pop-{i}.wav")
C("whoosh-soft", 50.7, 0.6)
for i in range(6):
    C("ping", 51.0 + i * 0.15, 0.3)
C("riser", 51.9, 0.7)
C("impact", 52.5, 0.8)
C("sparkle", 52.55, 0.5)
C("logo-sting", 52.7, 0.9)
C("whoosh-soft", 53.85, 0.45); C("land", 54.4, 0.6)
C("tick", 54.3, 0.4); C("tick", 54.9, 0.4); C("tick", 55.6, 0.4)

with open(os.path.join(OUT, "cues.json"), "w") as fh:
    json.dump(cues, fh, indent=1)
print("wrote", len(lengths), "files,", len(cues), "cues to", OUT)
