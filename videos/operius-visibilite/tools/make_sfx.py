"""Synthesize every sound effect for the Operius film (license-free, generated from scratch).

Run: python3 -I tools/make_sfx.py  (from the project root)
Writes 48 kHz stereo WAVs into assets/sfx/ and the keystroke times into assets/sfx/keys.json
so the final-shot hand animation lands on the same frames as the clicks.
"""
import json
import os
import wave

import numpy as np

SR = 48000
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets", "sfx")
os.makedirs(OUT, exist_ok=True)
rng = np.random.default_rng(7)  # seeded: identical files on every run


def t_axis(dur):
    return np.arange(int(dur * SR)) / SR


def env(n, attack, release, total):
    t = np.arange(n) / SR
    a = np.clip(t / max(attack, 1e-4), 0, 1)
    r = np.clip((total - t) / max(release, 1e-4), 0, 1)
    return a * r


def lowpass(x, cutoff):
    # one-pole low-pass, run twice for a gentle 12 dB/oct slope
    k = np.exp(-2 * np.pi * cutoff / SR)
    for _ in range(2):
        y = np.empty_like(x)
        acc = 0.0
        for i, v in enumerate(x):
            acc = (1 - k) * v + k * acc
            y[i] = acc
        x = y
    return x


def highpass(x, cutoff):
    return x - lowpass(x.copy(), cutoff)


def write(name, mono, pan=0.0, peak_db=-6.0):
    mono = mono / (np.max(np.abs(mono)) + 1e-9) * (10 ** (peak_db / 20))
    l = mono * np.sqrt(0.5 * (1 - pan))
    r = mono * np.sqrt(0.5 * (1 + pan))
    st = np.stack([l, r], axis=1) * np.sqrt(2)
    st = np.clip(st, -1, 1)
    with wave.open(os.path.join(OUT, name), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((st * 32767).astype("<i2").tobytes())


def soft_tone():
    """First line: a soft, precise felt-mallet tone."""
    d = 1.4
    t = t_axis(d)
    f = 523.25
    x = (np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t) * np.exp(-t * 9)
         + 0.12 * np.sin(2 * np.pi * 3.01 * f * t) * np.exp(-t * 14))
    x *= env(len(t), 0.006, 0.4, d) * np.exp(-t * 3.2)
    return x


def tick(f):
    """Phrase-to-phrase transition: very short, quiet glassy tick."""
    d = 0.5
    t = t_axis(d)
    x = np.sin(2 * np.pi * f * t) * np.exp(-t * 16) + 0.25 * np.sin(2 * np.pi * f * 2.76 * t) * np.exp(-t * 30)
    return x * env(len(t), 0.003, 0.1, d)


def swell():
    """Laptop arrival: low airy swell, no whoosh."""
    d = 1.6
    t = t_axis(d)
    n = lowpass(rng.standard_normal(len(t)), 500)
    tone = 0.6 * np.sin(2 * np.pi * 82.4 * t) + 0.3 * np.sin(2 * np.pi * 123.5 * t)
    e = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2
    return (n * 2.0 + tone) * e


def screen_on():
    """Screen activation: short electric hum that settles."""
    d = 0.7
    t = t_axis(d)
    x = np.sin(2 * np.pi * 220 * t + 0.6 * np.sin(2 * np.pi * 60 * t)) * 0.5
    x += 0.3 * np.sin(2 * np.pi * 880 * t) * np.exp(-t * 20)
    return x * env(len(t), 0.01, 0.35, d) * np.exp(-t * 3)


def blip(f):
    """Platform appearance: clean digital blip with a tiny upward glide."""
    d = 0.32
    t = t_axis(d)
    ph = 2 * np.pi * np.cumsum(f * (1 + 0.06 * np.clip(t / 0.04, 0, 1))) / SR
    x = np.sin(ph) + 0.18 * np.sign(np.sin(ph)) * np.exp(-t * 60)
    return x * env(len(t), 0.002, 0.12, d) * np.exp(-t * 14)


def chime():
    """Checkmark: light positive two-note confirmation (major third up)."""
    d = 1.3
    t = t_axis(d)
    x = np.zeros_like(t)
    for start, f in ((0.0, 783.99), (0.11, 987.77)):
        tt = np.clip(t - start, 0, None)
        on = (t >= start).astype(float)
        x += on * (np.sin(2 * np.pi * f * tt) + 0.3 * np.sin(2 * np.pi * 2 * f * tt) * np.exp(-tt * 10)) * np.exp(-tt * 4.5)
    return x * env(len(t), 0.003, 0.3, d)


def buzzer():
    """Red cross: brief, punchy, slightly low error buzzer. Not comic, not an alarm."""
    d = 0.46
    t = t_axis(d)
    x = np.zeros_like(t)
    for f in (98.0, 103.8, 146.8):
        ph = (f * t) % 1.0
        x += (2 * ph - 1) * (0.55 if f < 140 else 0.3)  # saw stack, detuned
    x = lowpass(x, 1400)
    thump = np.sin(2 * np.pi * 55 * t) * np.exp(-t * 18) * 1.2
    e = env(len(t), 0.004, 0.09, d) * (0.75 + 0.25 * np.exp(-t * 6))
    return (x + thump) * e


def key_click(strength):
    d = 0.09
    t = t_axis(d)
    n = rng.standard_normal(len(t))
    n = highpass(n, 1800)
    body = np.sin(2 * np.pi * (rng.uniform(1700, 2600)) * t) * np.exp(-t * 160) * 0.5
    x = (n * np.exp(-t * 110) + body) * strength
    # key bottoming-out second transient
    off = int(rng.uniform(0.012, 0.022) * SR)
    x[off:] += highpass(rng.standard_normal(len(t) - off), 2500) * np.exp(-t[: len(t) - off] * 200) * 0.45 * strength
    return x


def typing_bed(duration):
    """Keyboard for the final 5 s shot, with natural bursts and pauses. Returns audio + key times."""
    times = []
    t = 0.25
    while t < duration - 0.3:
        burst = int(rng.integers(5, 12))
        for _ in range(burst):
            times.append(round(t, 3))
            t += float(rng.uniform(0.075, 0.16))
        t += float(rng.uniform(0.22, 0.45))  # thinking pause
    times = [x for x in times if x < duration - 0.25]
    out = np.zeros(int(duration * SR))
    for i, kt in enumerate(times):
        c = key_click(float(rng.uniform(0.55, 1.0)) * (1.25 if i % 9 == 8 else 1.0))
        s = int(kt * SR)
        out[s : s + len(c)] += c[: len(out) - s]
    return out, times


def room_tone(duration):
    """Subtle computer ambience: soft fan noise + a faint 50 Hz-ish hum."""
    t = t_axis(duration)
    n = lowpass(rng.standard_normal(len(t)), 700) * 1.6
    hum = 0.08 * np.sin(2 * np.pi * 100 * t)
    fade = np.clip(t / 0.5, 0, 1)
    return (n + hum) * fade


if __name__ == "__main__":
    write("soft-tone.wav", soft_tone(), peak_db=-9)
    write("tick-a.wav", tick(1318.5), peak_db=-17)
    write("tick-b.wav", tick(1174.7), peak_db=-17)
    write("swell.wav", swell(), peak_db=-16)
    write("screen-on.wav", screen_on(), peak_db=-17)
    for i, (f, pan) in enumerate(((880, -0.35), (987.8, 0.35), (1046.5, -0.35), (1174.7, 0.35))):
        write(f"blip-{i + 1}.wav", blip(f), pan=pan, peak_db=-14)
    write("chime.wav", chime(), peak_db=-10)
    write("buzzer.wav", buzzer(), peak_db=-6)
    bed, keys = typing_bed(5.4)
    write("typing.wav", bed, peak_db=-12)
    write("room-tone.wav", room_tone(5.4), peak_db=-30)
    with open(os.path.join(OUT, "keys.json"), "w") as fh:
        json.dump(keys, fh)
    print("wrote", sorted(os.listdir(OUT)), "keys:", len(keys))
