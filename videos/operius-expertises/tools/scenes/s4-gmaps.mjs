// SCÈNE 4 — Expertise n°3 : fiche Google Business Profile (20.8 → 28.5 s)
export default (h) => {
  const r = h.rng(41);
  const fills = ['#eaf0ff', '#e0e8ff', '#f3f6ff', '#d8f0f8', '#e3dcff', '#edf2ff'];
  let blocks = '';
  for (let cx = 0; cx < 14; cx++) {
    for (let cy = 0; cy < 10; cy++) {
      const f = fills[Math.floor(r() * fills.length)];
      const w = 150 + Math.round(r() * 30), hh = 120 + Math.round(r() * 30);
      blocks += `<i class="blk" data-d="${(r() * 1.1).toFixed(2)}" style="left:${cx * 200 + 17}px;top:${cy * 170 + 17}px;width:${w}px;height:${hh}px;background:${f}"></i>`;
    }
  }
  const pin = (id, x, y, cls, s) =>
    `<div class="abs pin" id="gmaps-${id}" style="left:${x}px;top:${y}px;width:${s}px;height:${s * 1.3}px"><i class="pb ${cls}" style="width:${s}px;height:${s}px"><u style="width:${s * 0.38}px;height:${s * 0.38}px"></u></i></div>`;
  const star = (c) => `<svg width="30" height="30" viewBox="0 0 24 24" fill="${c}"><path d="M12 2l3 6.6 7.200.8-5.400 4.800 1.600 7.100L12 17.800 5.600 21.300l1.600-7.100L1.800 9.400 9 8.600z"/></svg>`;
  const stars = [0, 1, 2, 3, 4].map((i) => `<span class="st" id="gmaps-st${i}">${star('#ffb62e')}</span>`).join('');
  return {
    id: 'gmaps',
    start: 20.8,
    dur: 7.7,
    css: `
.sc .bg2 { position: absolute; inset: 0; background: linear-gradient(135deg, #dfe9ff, #cfe0ff); }
.sc .mapfold { position: absolute; inset: 0; perspective: 1500px; transform-origin: 50% 100%; }
.sc .plane { position: absolute; left: -440px; top: -520px; width: 2800px; height: 1700px; background: #fff; transform: rotateX(50deg); transform-origin: 50% 62%; box-shadow: 0 0 0 40px #dfe9ff; }
.sc .blk { position: absolute; border-radius: 22px; }
.sc .pin .pb { position: absolute; left: 0; top: 0; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); background: linear-gradient(135deg, #12d6ff, #2f6bff); box-shadow: 0 16px 28px rgba(47,80,230,.35); display: flex; align-items: center; justify-content: center; }
.sc .pin .pb.v { background: linear-gradient(135deg, #7b3ff2, #2f6bff); }
.sc .pin .pb.o { background: linear-gradient(135deg, #ffc654, #ff8a35); }
.sc .pin .pb u { display: block; border-radius: 50%; background: #fff; }
.sc .gcard { left: 1180px; top: 90px; width: 640px; height: 640px; border-radius: 30px; background: #fff; box-shadow: 0 50px 120px rgba(47,80,230,.32), 0 8px 24px rgba(47,80,230,.14); transform-origin: 0% 55%; overflow: hidden; }
.sc .ban { position: absolute; left: 20px; top: 20px; width: 600px; height: 190px; border-radius: 22px; background: linear-gradient(135deg, #7b3ff2, #2f6bff 55%, #12d6ff); overflow: hidden; }
.sc .ban::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 54px; background: repeating-linear-gradient(90deg, #fff 0 46px, rgba(255,255,255,.35) 46px 92px); }
.sc .ban::after { content: ''; position: absolute; left: 60px; bottom: 0; width: 120px; height: 100px; border-radius: 18px 18px 0 0; background: rgba(255,255,255,.85); }
.sc .gname { position: absolute; left: 24px; top: 232px; font-weight: 800; font-size: 36px; letter-spacing: -.02em; }
.sc .gsub { position: absolute; left: 24px; top: 322px; font-weight: 600; font-size: 22px; color: #3b4a8c; white-space: nowrap; }
.sc .gsub b { color: #0a9d6b; font-weight: 800; }
.sc .stars { position: absolute; left: 24px; top: 280px; display: flex; gap: 4px; }
.sc .gch { position: absolute; top: 372px; height: 40px; line-height: 40px; padding: 0 18px; border-radius: 20px; background: #eef2ff; color: #1b2559; font-weight: 700; font-size: 18px; }
.sc .gbtn { position: absolute; top: 440px; height: 56px; line-height: 56px; border-radius: 28px; font-weight: 800; font-size: 20px; text-align: center; }
.sc .gbtn.p { color: #fff; }
.sc .gbtn.o { border: 3px solid #cfd9ff; color: #2f4bd6; line-height: 50px; }
.sc .gph { position: absolute; top: 520px; width: 186px; height: 94px; border-radius: 16px; }
.sc .rev { left: 640px; top: 40px; width: 470px; height: 92px; border-radius: 26px; background: #fff; box-shadow: 0 26px 70px rgba(47,80,230,.34); display: flex; align-items: center; gap: 18px; padding: 0 24px; font-weight: 800; font-size: 22px; }
.sc .rev small { display: block; margin-top: 4px; }
.sc .spk { position: absolute; width: 26px; height: 26px; background: #ffb62e; clip-path: polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%); }
.sc svg.route { position: absolute; inset: 0; width: 100%; height: 100%; }
.sc .rt { fill: none; stroke: url(#gmaps-rg); stroke-width: 10; stroke-linecap: round; stroke-dasharray: 2 22; }
.sc .rtg { fill: none; stroke: rgba(47,107,255,.25); stroke-width: 22; stroke-linecap: round; }
.sc .tl { position: absolute; height: 22px; border-radius: 11px; left: 640px; }
.sc .white { position: absolute; inset: -5%; background: #fff; opacity: 0; }
.sc .plat4 { left: 640px; top: 690px; width: 470px; height: 80px; }
.sc .plat4 .s { position: absolute; left: 0; right: 0; top: 14px; height: 62px; border-radius: 50%; background: linear-gradient(#b9c6ff, #8e9fff); box-shadow: 0 24px 50px rgba(60,70,220,.28); }
.sc .plat4 .t { position: absolute; left: 0; right: 0; top: 0; height: 62px; border-radius: 50%; background: radial-gradient(ellipse at 50% 40%, #fff, #e3e9ff); box-shadow: inset 0 0 0 4px rgba(255,255,255,.9); }
`,
    html: `
<div class="bg2"></div>
<div class="mapfold" id="gmaps-fold"><div class="plane" id="gmaps-plane">${blocks}</div></div>
<svg class="route"><defs><linearGradient id="gmaps-rg" x1="0" x2="1"><stop offset="0" stop-color="#7b3ff2"/><stop offset="1" stop-color="#12d6ff"/></linearGradient></defs>
<path class="rtg" id="gmaps-rtg" d="M1010,572 C860,600 760,470 640,420 S380,330 150,190"/><path class="rt" id="gmaps-rt" d="M1010,572 C860,600 760,470 640,420 S380,330 150,190"/></svg>
<div class="layer">${h.decor([
  { k: 'warm', x: 1100, y: 800, s: 60, a: 12, d: 3.4 },
  { k: 'cy', x: 60, y: 700, s: 80, a: 14, d: 4.0, o: 0.9 },
  { k: 'ring', x: 520, y: 90, s: 96, a: 10, d: 4.6 },
])}${h.particles(43, 18)}</div>
${pin('pa', 820, 300, '', 52)}${pin('pc', 540, 420, 'o', 48)}${pin('pd', 1060, 250, '', 44)}${pin('pb', 984, 456, 'v', 78)}
<div class="abs plat4" id="gmaps-plat"><div class="s"></div><div class="t"></div></div>
<div class="abs gcard" id="gmaps-card">
  <div class="ban" id="gmaps-ban"></div>
  <div class="gname" id="gmaps-name">Votre entreprise</div>
  <div class="stars" id="gmaps-stars">${stars}</div>
  <div class="gsub" id="gmaps-sub"><b>Ouvert</b> · Ferme à 18 h</div>
  <span class="gch" id="gmaps-c1" style="left:24px">Conseil</span><span class="gch" id="gmaps-c2" style="left:136px">Devis</span><span class="gch" id="gmaps-c3" style="left:226px">Intervention</span>
  <div class="gbtn p grad" id="gmaps-b1" style="left:24px;width:210px">Itinéraire</div>
  <div class="gbtn o" id="gmaps-b2" style="left:248px;width:150px">Appeler</div>
  <div class="gbtn o" id="gmaps-b3" style="left:412px;width:150px">Site web</div>
  <div class="gph" id="gmaps-p1" style="left:24px;background:linear-gradient(135deg,#7b3ff2,#2f6bff)"></div>
  <div class="gph" id="gmaps-p2" style="left:224px;background:linear-gradient(135deg,#12d6ff,#7b3ff2)"></div>
  <div class="gph" id="gmaps-p3" style="left:424px;background:linear-gradient(135deg,#ffc654,#ff6b9a)"></div>
</div>
<div class="abs rev" id="gmaps-rev"><div class="stars" style="position:static">${[0, 1, 2, 3, 4].map(() => `<span class="st">${star('#ffb62e')}</span>`).join('')}</div><div>Nouvel avis client</div></div>
${[0, 1, 2, 3, 4, 5].map((i) => `<i class="spk" id="gmaps-sp${i}" style="left:${660 + i * 76}px;top:${i % 2 ? 30 : 120}px"></i>`).join('')}
${[0, 1, 2, 3, 4, 5].map((i) => `<i class="tl grad" id="gmaps-tl${i}" style="top:${250 + i * 70}px;width:${220 + (i % 3) * 120}px"></i>`).join('')}
<div class="white" id="gmaps-white"></div>
${h.mascot('gmaps-m', ['hello', 'wave', 'glasses', 'wink', 'cheer'], { k: 1.25, x: 300, y: 268 })}
`,
    top: h.title(3, 'FICHE GOOGLE', 'Sur Google Maps, c’est vous qu’on choisit'),
    js: `
const m = q('#gmaps-m');
const rig = q('.rig');
FLOATS();
PORTAL_IN(0.9);
tl.set(qa('.blk'), { scale: 0, transformOrigin: '50% 50%' }, 0);
qa('.blk').forEach((b) => tl.to(b, { scale: 1, duration: 0.5, ease: 'back.out(1.5)' }, 0.3 + parseFloat(b.dataset.d)));
tl.fromTo(q('#gmaps-plane'), { y: 0 }, { y: -60, duration: 5.5, ease: 'sine.inOut' }, 0);
tl.set(qa('.pin'), { y: -320, opacity: 0 }, 0);
['#gmaps-pa', '#gmaps-pc', '#gmaps-pd', '#gmaps-pb'].forEach((p, i) => {
  tl.to(q(p), { y: 0, opacity: 1, duration: 0.55, ease: 'bounce.out' }, 1.0 + i * 0.22);
});
tl.set(q('#gmaps-card'), { scale: 0, opacity: 0 }, 0);
tl.set(qa('#gmaps-card > *'), { opacity: 0, y: 24 }, 0);
tl.set(qa('#gmaps-stars .st'), { scale: 0 }, 0);
tl.set(q('#gmaps-rev'), { opacity: 0, y: -30 }, 0);
tl.set(qa('.spk'), { scale: 0, opacity: 0 }, 0);
tl.set(qa('.tl'), { x: 0, opacity: 0 }, 0);
const rt = q('#gmaps-rt'), rtg = q('#gmaps-rtg');
const RL = rt.getTotalLength();
tl.set(rt, { strokeDasharray: '2 22', opacity: 0 }, 0);
tl.set(rtg, { strokeDasharray: RL, strokeDashoffset: RL }, 0);
// she hops across the map towards the highlighted marker
POSE('gmaps-m', 'hello', 0);
tl.set(m, { x: -420 }, 0);
tl.fromTo(q('#gmaps-plat'), { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
const t1 = HOP('gmaps-m', 1.2, 230, 0, 70, 0.4);
POSE('gmaps-m', 'wave', 1.5);
const t2 = HOP('gmaps-m', 2.15, 200, 0, 70, 0.4);
POSE('gmaps-m', 'wink', 2.75);
IDLE('gmaps-m', 3.0, 5.2, 5);
tl.to(q('#gmaps-pb'), { scale: 1.25, transformOrigin: '50% 100%', duration: 0.3, ease: 'power2.out', yoyo: true, repeat: 1 }, 2.85);
// the business sheet opens from the marker
tl.set(q('#gmaps-card'), { opacity: 1 }, 3.0);
tl.fromTo(q('#gmaps-card'), { scale: 0, x: -200, y: 120 }, { scale: 1, x: 0, y: 0, duration: 0.7, ease: 'back.out(1.3)' }, 3.0);
const seq = ['#gmaps-ban', '#gmaps-name', '#gmaps-stars', '#gmaps-sub', '#gmaps-c1', '#gmaps-c2', '#gmaps-c3', '#gmaps-b1', '#gmaps-b2', '#gmaps-b3', '#gmaps-p1', '#gmaps-p2', '#gmaps-p3'];
seq.forEach((s, i) => tl.to(q(s), { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 3.3 + i * 0.1));
qa('#gmaps-stars .st').forEach((s, i) => tl.to(s, { scale: 1, duration: 0.4, ease: 'back.out(3)' }, 3.7 + i * 0.08));
POSE('gmaps-m', 'glasses', 4.35);
// she presses "Itinéraire": the route lights up on the map
POSE('gmaps-m', 'wink', 5.0);
tl.to(q('#gmaps-b1'), { scale: 1.08, duration: 0.14, yoyo: true, repeat: 1, transformOrigin: '50% 50%' }, 5.0);
tl.to(q('#gmaps-b1'), { boxShadow: '0 0 50px 10px rgba(80,140,255,.7)', duration: 0.3 }, 5.0);
tl.set(rt, { opacity: 1 }, 5.15);
tl.to(rtg, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 5.15);
tl.fromTo(rt, { strokeDashoffset: 0 }, { strokeDashoffset: -240, duration: 2.4, ease: 'none', immediateRender: false }, 5.15);
// a customer review lands
tl.to(q('#gmaps-rev'), { opacity: 1, y: 0, duration: 0.55, ease: 'back.out(1.7)' }, 5.45);
qa('.spk').forEach((s, i) => {
  tl.fromTo(s, { scale: 0, opacity: 1, rotation: 0 }, { scale: 1, rotation: 90, duration: 0.4, ease: 'back.out(2)' }, 5.7 + i * 0.07);
  tl.to(s, { scale: 0, opacity: 0, duration: 0.35, ease: 'power2.in' }, 6.1 + i * 0.05);
});
POSE('gmaps-m', 'cheer', 5.6);
// the map folds, its lines become lines of text that fly off
tl.to(q('#gmaps-fold'), { scaleY: 0.02, opacity: 0, duration: 0.7, ease: 'power3.in' }, 6.15);
tl.to(q('svg.route'), { opacity: 0, duration: 0.4, ease: 'power1.in' }, 6.1);
tl.to(qa('#gmaps-card, #gmaps-rev, #gmaps-m, #gmaps-plat, .pin'), { opacity: 0, duration: 0.45, ease: 'power2.in' }, 6.15);
qa('.tl').forEach((l, i) => {
  tl.fromTo(l, { opacity: 1, x: 0 }, { x: 1700, duration: 0.8, ease: 'power3.in', immediateRender: false }, 6.25 + i * 0.07);
});
tl.to(q('#gmaps-white'), { opacity: 1, duration: 0.7, ease: 'power2.in' }, 6.5);
TITLE(0.9, 4.4);
ZOOM_OUT(1500, 400, 1.0);
`,
  };
};
