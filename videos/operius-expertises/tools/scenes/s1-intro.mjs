// SCÈNE 1 — Introduction : l'univers OPERIUS (0 → 6.7 s)
export default (h) => {
  // six orbs on an arc above the luminous path (near -> far): [cx, cy, r]
  const O = [[1060, 540, 80], [1215, 430, 68], [1360, 360, 58], [1490, 330, 50], [1610, 340, 44], [1722, 384, 40]];
  const kinds = ['vio', 'sph', 'cy', 'vio', 'sph', 'cy'];
  const PY = (x) => 850 - ((x - 990) / 730) * 330; // path centreline
  const halos = O.map(([cx, cy, r], i) => `<div class="abs halo" id="intro-h${i + 1}" style="left:${cx - r * 1.7}px;top:${cy - r * 1.7}px;width:${r * 3.4}px;height:${r * 3.4}px"></div>`).join('');
  const orbs = O.map(([cx, cy, r], i) => {
    const bl = Math.round(PY(cx) - cy - r);
    return (
      `<div class="abs beam" id="intro-b${i + 1}" style="left:${cx - 1}px;top:${cy + r}px;width:2px;height:${bl}px"></div>` +
      `<div class="abs orb" id="intro-o${i + 1}" style="left:${cx - r}px;top:${cy - r}px;width:${r * 2}px;height:${r * 2}px">` +
      `<div class="sph ${kinds[i] === 'sph' ? '' : kinds[i]} body"><span style="font-size:${Math.round(r * 0.78)}px">${i + 1}</span></div></div>`
    );
  }).join('');
  const lines = [
    [905, 790, 1130, 700], [905, 790, 1010, 560], [905, 790, 1300, 840],
    [905, 790, 700, 560], [905, 790, 1250, 640],
  ]
    .map((l, i) => `<path class="gl" id="intro-gl${i}" d="M${l[0]},${l[1]} L${l[2]},${l[3]}" />`)
    .join('');
  const orb1 = [O[0][0], O[0][1]];
  return {
    id: 'intro',
    start: 0,
    dur: 6.7,
    css: `
.sc .plat { left: 230px; top: 735px; width: 780px; height: 190px; }
.sc .plat .glow { position: absolute; left: 6%; right: 6%; top: 40%; height: 70%; border-radius: 50%; background: rgba(90,110,255,.45); filter: blur(34px); }
.sc .plat .side { position: absolute; left: 0; right: 0; top: 26px; height: 150px; border-radius: 50%; background: linear-gradient(#b9c6ff, #8e9fff); box-shadow: 0 30px 60px rgba(60,70,220,.30); }
.sc .plat .top { position: absolute; left: 0; right: 0; top: 0; height: 150px; border-radius: 50%; background: radial-gradient(ellipse at 50% 40%, #ffffff 0%, #f1f4ff 60%, #dfe6ff 100%); box-shadow: inset 0 0 0 5px rgba(255,255,255,.9), inset 0 -10px 30px rgba(120,140,255,.28); }
.sc .plat .top::after { content: ''; position: absolute; left: 12%; right: 12%; top: 14%; bottom: 14%; border-radius: 50%; border: 2px solid rgba(70,120,255,.35); }
.sc .btn { left: 840px; top: 760px; width: 130px; height: 70px; }
.sc .btn .base { position: absolute; inset: 0; border-radius: 50%; background: linear-gradient(#cfd9ff, #9db0ff); }
.sc .btn .disc { position: absolute; left: 10px; right: 10px; top: -10px; height: 56px; border-radius: 50%; background: radial-gradient(ellipse at 50% 35%, #8fe9ff, #2f6bff 70%); box-shadow: 0 0 30px 6px rgba(60,170,255,.65); }
.sc .btn .flash { position: absolute; left: -40px; right: -40px; top: -50px; height: 150px; border-radius: 50%; background: radial-gradient(ellipse, rgba(255,255,255,.95), rgba(120,200,255,0) 70%); opacity: 0; }
.sc .rp { position: absolute; left: 835px; top: 785px; width: 140px; height: 140px; margin: -70px 0 0 70px; border-radius: 50%; border: 5px solid rgba(60,110,255,.85); opacity: 0; box-shadow: 0 0 40px rgba(110,70,255,.5); }
.sc .rp.v { border-color: rgba(140,80,255,.85); }
.sc .halo { border-radius: 50%; background: radial-gradient(circle, rgba(130,150,255,.55), rgba(130,150,255,0) 68%); }
.sc .orb .body { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #121a46; font-weight: 800; }
.sc .beam { background: linear-gradient(rgba(120,150,255,.0), rgba(120,170,255,.8)); transform-origin: 50% 0; }
.sc svg.fx { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.sc .gl { fill: none; stroke: rgba(70,120,255,.75); stroke-width: 3; stroke-linecap: round; }
.sc .pathwrap { position: absolute; inset: 0; clip-path: circle(0px at 990px 860px); }
.sc .flood { position: absolute; inset: -10%; background: radial-gradient(circle at ${orb1[0]}px ${orb1[1]}px, #fff 0%, #dfe9ff 30%, #9db4ff 70%); opacity: 0; }
`,
    html: `
${h.bg(false, [
  { c: 'v', x: 1250, y: -140, s: 640, o: 0.42 },
  { c: 'c', x: -160, y: 560, s: 560, o: 0.4 },
  { c: 'b', x: 700, y: 80, s: 520, o: 0.28 },
])}
<div class="layer">${h.decor([
  { k: 'vio', x: 1480, y: 120, s: 150, a: 18, d: 4.4 },
  { k: 'cy', x: 190, y: 190, s: 92, a: 14, d: 3.6 },
  { k: 'warm', x: 1680, y: 700, s: 66, a: 12, d: 3.2 },
  { k: 'sph', x: 70, y: 640, s: 58, a: 14, d: 4.0, o: 0.9 },
  { k: 'ring', x: 430, y: 110, s: 120, a: 12, d: 5 },
  { k: 'ring', x: 1250, y: 880, s: 80, a: 10, d: 4.2 },
])}${h.particles(11, 26)}</div>
<div class="abs plat" id="intro-plat"><div class="glow"></div><div class="side"></div><div class="top"></div></div>
<svg class="fx"><defs><linearGradient id="intro-pg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity=".95"/><stop offset="1" stop-color="#6fdcff" stop-opacity=".9"/></linearGradient>
<linearGradient id="intro-pe" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#7b3ff2"/><stop offset="1" stop-color="#12d6ff"/></linearGradient></defs>
${lines}</svg>
<div class="pathwrap" id="intro-pathwrap"><svg class="fx"><polygon points="900,880 1130,845 1735,515 1715,523" fill="url(#intro-pg)"/><polyline points="1015,862 1725,519" fill="none" stroke="url(#intro-pe)" stroke-width="3" stroke-dasharray="14 18" id="intro-dash" opacity=".9"/><polyline points="1130,845 1735,515" fill="none" stroke="url(#intro-pe)" stroke-width="3"/><polyline points="900,880 1715,523" fill="none" stroke="url(#intro-pe)" stroke-width="3"/></svg></div>
<div class="abs btn" id="intro-btn"><div class="base"></div><div class="disc"></div><div class="flash"></div></div>
<i class="rp" id="intro-rp1"></i><i class="rp v" id="intro-rp2"></i><i class="rp" id="intro-rp3"></i>
${halos}
${orbs}
${h.mascot('intro-m', ['hello', 'wave', 'question', 'wink', 'dash'], { k: 1.25, x: 390, y: 398 })}
<div class="flood" id="intro-flood"></div>
`,
    js: `
const m = q('#intro-m');
const rig = q('.rig');
rig.style.transformOrigin = '1250px 560px';
FLOATS();
// establishing: mist clears, platform rises, slow push-in
tl.fromTo(q('#intro-plat'), { y: 130, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, 0.15);
tl.fromTo(q('#intro-btn'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.7);
tl.fromTo(rig, { scale: 1 }, { scale: 1.05, duration: 3.6, ease: 'sine.inOut' }, 0);
// orbs / lines hidden at start
tl.set(qa('.orb, .halo'), { scale: 0, opacity: 0 }, 0);
tl.set(qa('.beam'), { scaleY: 0 }, 0);
qa('.gl').forEach((p) => { const L = p.getTotalLength(); tl.set(p, { strokeDasharray: L, strokeDashoffset: L }, 0); });
// mascot enters, looks around
tl.set(m, { opacity: 0 }, 0);
POSE('intro-m', 'hello', 0);
tl.set(m, { opacity: 1 }, 0.75);
tl.fromTo(m, { y: -560 }, { y: 0, duration: 0.55, ease: 'power2.in' }, 0.75);
tl.to(q('#intro-m .mb'), { scaleY: 0.82, scaleX: 1.12, duration: 0.1, ease: 'power2.out' }, 1.3);
tl.to(q('#intro-m .mb'), { scaleY: 1, scaleX: 1, duration: 0.5, ease: 'elastic.out(1,0.45)' }, 1.4);
POSE('intro-m', 'wave', 1.55);
POSE('intro-m', 'hello', 1.9);
POSE('intro-m', 'wave', 2.1);
POSE('intro-m', 'question', 2.45);
// the small interface wakes up when she looks at it
tl.to(q('#intro-btn .disc'), { scale: 1.12, duration: 0.3, yoyo: true, repeat: 3, ease: 'sine.inOut', transformOrigin: '50% 50%' }, 2.4);
// hop to the interface, touch it
const tEnd = HOP('intro-m', 2.85, 135, 8, 70, 0.4);
POSE('intro-m', 'wink', 3.3);
// light wave through the environment
tl.fromTo(q('#intro-btn .flash'), { opacity: 0 }, { opacity: 1, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.out' }, 3.35);
['#intro-rp1', '#intro-rp2', '#intro-rp3'].forEach((s, i) => {
  tl.fromTo(q(s), { scale: 0.2, opacity: 0.95 }, { scale: 15, opacity: 0, duration: 1.5, ease: 'power2.out', immediateRender: false }, 3.35 + i * 0.22);
});
qa('.gl').forEach((p, i) => tl.to(p, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.out' }, 3.4 + i * 0.07));
tl.to(q('#intro-pathwrap'), { clipPath: 'circle(1000px at 990px 860px)', duration: 0.9, ease: 'power2.out' }, 3.5);
tl.fromTo(q('#intro-dash'), { strokeDashoffset: 0 }, { strokeDashoffset: -160, duration: 3, ease: 'none' }, 3.5);
// six lit orbs materialise in the distance
for (let i = 1; i <= 6; i++) {
  const t = 4.0 + (i - 1) * 0.15;
  tl.to(q('#intro-o' + i), { scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(1.8)' }, t);
  tl.to(q('#intro-h' + i), { scale: 1, opacity: 1, duration: 0.7, ease: 'power2.out' }, t);
  tl.to(q('#intro-b' + i), { scaleY: 1, duration: 0.5, ease: 'power2.out' }, t + 0.05);
  tl.to(q('#intro-o' + i), { y: -10, duration: 1.2, ease: 'sine.inOut', yoyo: true, repeat: 3 }, t + 0.6);
}
// she dashes along the path while the camera travels forward
POSE('intro-m', 'dash', 4.55);
tl.to(q('#intro-m .msh'), { opacity: 0, duration: 0.2 }, 4.55);
tl.to(m, { x: '+=268', y: '-=40', duration: 0.95, ease: 'power2.inOut' }, 4.55);
tl.to(m, { scale: 0.82, transformOrigin: '50% 100%', duration: 0.95, ease: 'power2.inOut' }, 4.55);
tl.to(rig, { scale: 1.45, duration: 1.5, ease: 'power2.inOut' }, 4.3);
// the first element opens and pulls her in
tl.to(q('#intro-o1'), { scale: 1.4, duration: 0.5, ease: 'power3.out' }, 5.35);
tl.to(q('#intro-h1'), { scale: 2.6, opacity: 0, duration: 0.7, ease: 'power2.out' }, 5.35);
tl.to(m, { scale: 0.2, x: '+=60', y: '-=70', opacity: 0, duration: 0.45, ease: 'power3.in' }, 5.65);
tl.to(q('#intro-flood'), { opacity: 1, duration: 0.7, ease: 'power2.in' }, 5.95);
ZOOM_OUT(975, 531, 1.0);
`,
  };
};
