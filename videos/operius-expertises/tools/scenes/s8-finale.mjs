// SCÈNE 8 — Conclusion : six expertises, une seule marque (48.8 → 58 s)
export default (h) => {
  const CX = 800, CY = 440, RX = 640, RY = 290;
  const items = [
    ['Site internet', '<rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="#fff" stroke-width="2"/><path d="M3 9h18" stroke="#fff" stroke-width="2"/>'],
    ['Référencement', '<circle cx="10" cy="10" r="6" fill="none" stroke="#fff" stroke-width="2.4"/><path d="M15 15l6 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>'],
    ['Fiche Google', '<path d="M12 21s-7-6.500-7-11.500a7 7 0 0 1 14 0C19 14.500 12 21 12 21z" fill="none" stroke="#fff" stroke-width="2.2"/><circle cx="12" cy="9.500" r="2.500" fill="#fff"/>'],
    ['Contenus', '<path d="M6 3h9l4 4v14H6z" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><path d="M9 11h7M9 15h7" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>'],
    ['Identité visuelle', '<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="2.2"/><circle cx="8.500" cy="10" r="1.700" fill="#fff"/><circle cx="13" cy="7.500" r="1.700" fill="#fff"/><circle cx="16" cy="12" r="1.700" fill="#fff"/>'],
    ['Réseaux sociaux', '<path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/>'],
  ];
  const grads = ['#7b3ff2,#2f6bff', '#2f6bff,#12d6ff', '#12d6ff,#7b3ff2', '#7b3ff2,#12d6ff', '#2f6bff,#7b3ff2', '#12d6ff,#2f6bff'];
  const portals = items
    .map(([label, glyph], i) => {
      const a = (-90 + i * 60) * (Math.PI / 180);
      const x = Math.round(CX + Math.cos(a) * RX), y = Math.round(CY + Math.sin(a) * RY);
      return `<div class="abs pt6" id="finale-p${i}" data-x="${x}" data-y="${y}" style="left:${x - 80}px;top:${y - 80}px"><div class="pr" style="background:conic-gradient(from 0deg,${grads[i].split(',')[0]},${grads[i].split(',')[1]},${grads[i].split(',')[0]})"><div class="pi" style="background:linear-gradient(135deg,${grads[i]})"><svg width="56" height="56" viewBox="0 0 24 24">${glyph}</svg></div></div><div class="pl">${label}</div></div>`;
    })
    .join('');
  return {
    id: 'finale',
    start: 48.8,
    dur: 9.2,
    css: `
.sc .pt6 { width: 160px; height: 160px; }
.sc .pt6 .pr { position: absolute; inset: 0; border-radius: 50%; padding: 10px; box-shadow: 0 0 60px rgba(80,110,255,.55); }
.sc .pt6 .pi { width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 0 30px rgba(255,255,255,.35); }
.sc .pt6 .pl { position: absolute; left: -45px; right: -45px; top: 174px; text-align: center; font-weight: 800; font-size: 24px; color: #121a46; white-space: nowrap; }
.sc .halo2 { position: absolute; left: ${CX - 520}px; top: ${CY - 300}px; width: 1040px; height: 600px; border-radius: 50%; background: radial-gradient(ellipse, rgba(123,63,242,.55) 0%, rgba(47,107,255,.38) 40%, rgba(18,214,255,.25) 62%, rgba(18,214,255,0) 76%); filter: blur(30px); opacity: 0; }
.sc .logo { position: absolute; left: ${CX - 360}px; top: ${CY - 108}px; width: 720px; height: 217px; opacity: 0; }
.sc .logo img { width: 720px; height: 217px; display: block; }
.sc .l1, .sc .l2, .sc .l3 { position: absolute; left: ${CX - 600}px; width: 1200px; text-align: center; opacity: 0; }
.sc .l1 { top: 612px; font-weight: 700; font-size: 34px; letter-spacing: .01em; color: #3b4a8c; }
.sc .l2 { top: 668px; font-weight: 800; font-size: 40px; letter-spacing: -.02em; color: #121a46; white-space: nowrap; }
.sc .l3 { top: 760px; font-weight: 800; font-size: 40px; letter-spacing: .02em; }
.sc .flash2 { position: absolute; left: ${CX - 500}px; top: ${CY - 300}px; width: 1000px; height: 600px; border-radius: 50%; background: radial-gradient(ellipse, rgba(255,255,255,1), rgba(255,255,255,0) 70%); opacity: 0; }
.sc .ray { position: absolute; left: ${CX}px; top: ${CY}px; width: 3px; height: 0; background: linear-gradient(rgba(120,150,255,0), rgba(120,170,255,.7)); transform-origin: 0 0; opacity: 0; }
`,
    html: `
${h.bg(false, [
  { c: 'v', x: 1250, y: -220, s: 700, o: 0.4 },
  { c: 'c', x: -260, y: 520, s: 640, o: 0.42 },
  { c: 'b', x: 600, y: 700, s: 520, o: 0.22 },
])}
<div class="layer">${h.decor([
  { k: 'vio', x: 120, y: 140, s: 90, a: 14, d: 4.4 },
  { k: 'cy', x: 1720, y: 120, s: 80, a: 14, d: 3.8 },
  { k: 'warm', x: 1770, y: 790, s: 66, a: 12, d: 3.4 },
  { k: 'sph', x: 90, y: 820, s: 60, a: 12, d: 4.0, o: 0.9 },
  { k: 'ring', x: 1420, y: 860, s: 96, a: 10, d: 4.8 },
])}${h.particles(83, 28)}</div>
<div class="halo2" id="finale-halo"></div>
${portals}
<div class="flash2" id="finale-flash"></div>
<div class="logo" id="finale-logo"><img src="assets/brand/operius-logo.png" alt="OPERIUS" width="720" height="217" /></div>
<div class="l1" id="finale-l1">Site internet · Référencement · Image de marque</div>
<div class="l2" id="finale-l2">Votre présence digitale, pensée pour vous faire avancer.</div>
<div class="l3 gtxt" id="finale-l3">operiusstudio.com</div>
${h.mascot('finale-m', ['dash', 'hello', 'wave', 'wink'], { k: 1.6, x: 1260, y: 290 })}
`,
    js: `
const m = q('#finale-m');
FLOATS();
PORTAL_IN(0.9);
const P = qa('.pt6');
tl.set(P, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 0);
tl.set([q('#finale-logo'), q('#finale-halo'), q('#finale-flash'), q('#finale-l1'), q('#finale-l2'), q('#finale-l3'), m], { opacity: 0 }, 0);
// the six portals open one after another around the centre
P.forEach((p, i) => {
  tl.to(p, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, 0.5 + i * 0.16);
  tl.to(p, { y: -8, duration: 1.3, ease: 'sine.inOut', yoyo: true, repeat: 3 }, 1.2 + i * 0.1);
});
// she crosses the middle; each portal pulses as she passes
POSE('finale-m', 'dash', 0);
tl.set(m, { opacity: 1, x: -1500, y: 120 }, 1.9);
tl.to(m, { x: 0, y: 0, duration: 1.0, ease: 'power2.out' }, 1.9);
tl.to(m, { x: 800, y: -60, duration: 0.7, ease: 'power2.in' }, 2.9);
tl.to(m, { opacity: 0, duration: 0.2 }, 3.5);
P.forEach((p, i) => tl.to(p, { scale: 1.18, duration: 0.2, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 2.2 + i * 0.15));
// the six converge into a clean space
P.forEach((p, i) => {
  const x = +p.dataset.x, y = +p.dataset.y;
  tl.to(p, { x: ${CX} - x, y: ${CY} - y, scale: 0.15, duration: 0.8, ease: 'power3.in' }, 3.1 + i * 0.03);
  tl.to(p, { opacity: 0, duration: 0.25, ease: 'power1.in' }, 3.7 + i * 0.03);
});
tl.fromTo(q('#finale-flash'), { opacity: 0, scale: 0.4 }, { opacity: 0.95, scale: 1, duration: 0.5, ease: 'power2.out' }, 3.7);
tl.to(q('#finale-flash'), { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 4.25);
// the official logo appears, sharp, with a soft blue-violet-cyan halo
tl.fromTo(q('#finale-logo'), { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' }, 4.0);
tl.fromTo(q('#finale-halo'), { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, 4.1);
tl.to(q('#finale-halo'), { scale: 1.06, duration: 2.0, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 5.4);
// the mascot joins the logo, welcoming, looking at the viewer
POSE('finale-m', 'hello', 5.0);
tl.set(m, { opacity: 1, x: 700, y: 0, scale: 1 }, 5.0);
tl.fromTo(m, { x: 700, y: -420 }, { x: 0, y: 0, duration: 0.6, ease: 'power2.in' }, 5.0);
tl.to(q('#finale-m .mb'), { scaleY: 0.84, scaleX: 1.12, duration: 0.1, ease: 'power2.out' }, 5.6);
tl.to(q('#finale-m .mb'), { scaleY: 1, scaleX: 1, duration: 0.6, ease: 'elastic.out(1,0.45)' }, 5.7);
POSE('finale-m', 'wave', 6.4);
POSE('finale-m', 'hello', 7.1);
IDLE('finale-m', 6.4, 8.3, 4);
// final lines
tl.fromTo(q('#finale-l1'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 5.5);
tl.fromTo(q('#finale-l2'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 6.1);
tl.fromTo(q('#finale-l3'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 6.8);
`,
  };
};
