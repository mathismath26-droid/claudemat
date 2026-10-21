// SCÈNE 3 — Expertise n°2 : référencement naturel SEO (13.8 → 21.5 s)
export default (h) => {
  const chips = [
    ['artisan près de moi', 90, 96], ['restaurant ouvert', 360, 52], ['coach sportif', 440, 176],
    ['avocat conseil', 1650, 96], ['esthéticienne', 1720, 190], ['plombier urgence', 130, 250],
  ]
    .map(([t, x, y], i) => `<div class="dc chip" data-a="${10 + (i % 3) * 5}" data-d="${3.2 + (i % 3) * 0.6}" style="left:${x}px;top:${y}px">${t}</div>`)
    .join('');
  const rowY = [214, 326, 438, 550];
  const row = (id, y, you) =>
    `<div class="abs row${you ? ' you' : ''}" id="seo-${id}" style="left:740px;top:${y}px;width:780px;height:100px">` +
    `<i class="fav ${you ? 'grad' : ''}"></i><i class="skl t" style="${you ? 'background:#1b2559' : ''}"></i><i class="skl u"></i><i class="skl s"></i>` +
    (you ? `<span class="tag grad">Votre site</span>` : '') +
    `</div>`;
  return {
    id: 'seo',
    start: 13.8,
    dur: 7.7,
    night: true,
    css: `
.sc .tt-name, .sc .tt-tag { color: #fff; }
.sc .grid { position: absolute; left: -10%; right: -10%; bottom: -8%; height: 46%; background-image: linear-gradient(rgba(90,200,255,.35) 2px, transparent 2px), linear-gradient(90deg, rgba(90,200,255,.35) 2px, transparent 2px); background-size: 90px 90px; transform: perspective(700px) rotateX(64deg); transform-origin: 50% 100%; -webkit-mask-image: linear-gradient(transparent, #000 60%); mask-image: linear-gradient(transparent, #000 60%); opacity: .55; }
.sc .chip { padding: 12px 24px; border-radius: 30px; background: rgba(255,255,255,.1); border: 1.5px solid rgba(160,200,255,.45); color: #dfe8ff; font-weight: 600; font-size: 24px; backdrop-filter: blur(2px); white-space: nowrap; }
.sc .serp { left: 700px; top: 80px; width: 860px; height: 640px; border-radius: 30px; background: #fff; box-shadow: 0 50px 130px rgba(0,0,0,.55), 0 0 0 2px rgba(160,200,255,.35), 0 0 90px rgba(60,120,255,.35); }
.sc .sbar { left: 740px; top: 122px; width: 780px; height: 64px; border-radius: 32px; background: #f1f4ff; box-shadow: inset 0 0 0 2px #dbe3ff; }
.sc .sbar .q { position: absolute; left: 76px; top: 0; height: 64px; line-height: 64px; font-size: 27px; font-weight: 600; color: #121a46; white-space: nowrap; overflow: hidden; width: 0; }
.sc .sbar .mg { position: absolute; left: 22px; top: 16px; }
.sc .row { border-radius: 20px; background: #fff; box-shadow: 0 0 0 2px #eef1ff; }
.sc .row .fav { position: absolute; left: 20px; top: 28px; width: 44px; height: 44px; border-radius: 50%; background: #d6defa; }
.sc .row .skl.t { left: 84px; top: 20px; width: 340px; height: 20px; background: #3b4ce6; opacity: .85; }
.sc .row .skl.u { left: 84px; top: 50px; width: 170px; height: 10px; background: #bcc7f5; }
.sc .row .skl.s { left: 84px; top: 70px; width: 560px; height: 10px; }
.sc .row .tag { position: absolute; right: 22px; top: 30px; height: 38px; line-height: 38px; padding: 0 18px; border-radius: 19px; color: #fff; font-weight: 800; font-size: 17px; }
.sc .row.you { box-shadow: 0 0 0 3px #2f6bff, 0 18px 50px rgba(47,107,255,.35); }
.sc .ok { padding: 10px 20px 10px 14px; border-radius: 26px; background: #fff; color: #121a46; font-weight: 800; font-size: 20px; box-shadow: 0 16px 40px rgba(0,0,0,.35); display: flex; align-items: center; gap: 10px; white-space: nowrap; }
.sc .ok i { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #12d6ff, #2f6bff); display: block; position: relative; }
.sc .ok i::after { content: ''; position: absolute; left: 8px; top: 5px; width: 6px; height: 11px; border: solid #fff; border-width: 0 3px 3px 0; transform: rotate(45deg); }
.sc .chart { left: 1590px; top: 300px; width: 290px; height: 250px; border-radius: 26px; background: #fff; box-shadow: 0 30px 80px rgba(0,0,0,.5), 0 0 60px rgba(60,120,255,.35); }
.sc .chart svg { position: absolute; left: 20px; top: 56px; width: 250px; height: 170px; overflow: visible; }
.sc .plat3 { left: 120px; top: 700px; width: 440px; height: 86px; }
.sc .plat3 .s { position: absolute; left: 0; right: 0; top: 14px; height: 66px; border-radius: 50%; background: linear-gradient(#3b4ce6, #2330a8); box-shadow: 0 0 60px rgba(60,120,255,.7); }
.sc .plat3 .t { position: absolute; left: 0; right: 0; top: 0; height: 66px; border-radius: 50%; background: radial-gradient(ellipse at 50% 40%, #dfe8ff, #7f93ff); box-shadow: inset 0 0 0 3px rgba(255,255,255,.7); }
.sc .expand { left: 740px; top: 326px; width: 780px; height: 100px; border-radius: 20px; background: linear-gradient(135deg, #dfe9ff, #cfe0ff); opacity: 0; overflow: hidden; }
.sc .expand svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.sc .expand path { fill: none; stroke: #fff; stroke-width: 28; stroke-linecap: round; }
`,
    html: `
${h.bg(true, [
  { c: 'v', x: 1200, y: -200, s: 700, o: 0.35 },
  { c: 'b', x: -200, y: 500, s: 640, o: 0.3 },
])}
<div class="grid"></div>
<div class="layer">
  ${chips}
  ${h.decor([
    { k: 'cy', x: 1780, y: 760, s: 76, a: 14, d: 3.6 },
    { k: 'vio', x: 640, y: 780, s: 58, a: 12, d: 4.2 },
    { k: 'ring', x: 1480, y: 880, s: 90, a: 10, d: 4.8 },
  ])}${h.particles(37, 30)}
</div>
<div class="abs plat3" id="seo-plat"><div class="s"></div><div class="t"></div></div>
<div class="abs serp" id="seo-serp"></div>
<div class="abs sbar" id="seo-sbar"><svg class="mg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="3" stroke-linecap="round"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l6 6"/></svg><div class="q" id="seo-q">meilleur artisan près de moi</div></div>
${row('r1', rowY[0], false)}${row('r2', rowY[1], false)}${row('r3', rowY[2], false)}${row('r4', rowY[3], true)}
<div class="abs ok" id="seo-k1" style="left:1060px;top:520px"><i></i>Titres et descriptions</div>
<div class="abs ok" id="seo-k2" style="left:1150px;top:640px"><i></i>Structure du site</div>
<div class="abs ok" id="seo-k3" style="left:760px;top:652px"><i></i>Vitesse et mobile</div>
<div class="abs chart" id="seo-chart">
  <i class="skl" style="left:22px;top:22px;width:130px;height:14px"></i>
  <svg viewBox="0 0 250 170"><defs><linearGradient id="seo-lg" x1="0" x2="1"><stop offset="0" stop-color="#7b3ff2"/><stop offset="1" stop-color="#12d6ff"/></linearGradient></defs>
    <path d="M0 160H250M0 110H250M0 60H250" stroke="#e8edff" stroke-width="2"/>
    <rect x="12" y="120" width="26" height="40" rx="6" fill="#e3e9ff"/><rect x="58" y="104" width="26" height="56" rx="6" fill="#e3e9ff"/><rect x="104" y="86" width="26" height="74" rx="6" fill="#e3e9ff"/><rect x="150" y="64" width="26" height="96" rx="6" fill="#e3e9ff"/><rect x="196" y="36" width="26" height="124" rx="6" fill="#d6e2ff"/>
    <path id="seo-line" d="M8 140 C50 132 70 118 100 100 S160 60 238 14" fill="none" stroke="url(#seo-lg)" stroke-width="7" stroke-linecap="round"/>
    <circle id="seo-dot" cx="238" cy="14" r="10" fill="#fff" stroke="#2f6bff" stroke-width="5"/></svg>
</div>
<div class="abs expand" id="seo-expand"><svg viewBox="0 0 1920 1080" preserveAspectRatio="none"><path d="M-100 300 L2100 560 M400 -100 L900 1200 M1500 -100 L1100 1200 M-100 820 L2100 700" /></svg></div>
${h.mascot('seo-m', ['hello', 'search', 'glasses', 'cheer', 'wink'], { k: 1.25, x: 120, y: 268 })}
`,
    top: h.title(2, 'RÉFÉRENCEMENT', 'Soyez trouvé par ceux qui vous cherchent'),
    js: `
const m = q('#seo-m');
const rig = q('.rig');
FLOATS();
PORTAL_IN(0.9);
const rows = ['#seo-r1', '#seo-r2', '#seo-r3', '#seo-r4'];
tl.set(qa('.row, #seo-sbar, #seo-chart, .ok'), { opacity: 0 }, 0);
tl.set(q('#seo-serp'), { opacity: 0 }, 0);
tl.set(q('#seo-expand'), { opacity: 0 }, 0);
// she lands on the platform, magnifier in hand
POSE('seo-m', 'hello', 0);
tl.set(m, { y: -560 }, 0);
tl.to(m, { y: 0, duration: 0.55, ease: 'power2.in' }, 0.5);
tl.to(q('#seo-m .mb'), { scaleY: 0.82, scaleX: 1.12, duration: 0.1, ease: 'power2.out' }, 1.05);
tl.to(q('#seo-m .mb'), { scaleY: 1, scaleX: 1, duration: 0.5, ease: 'elastic.out(1,0.45)' }, 1.15);
POSE('seo-m', 'search', 1.5);
IDLE('seo-m', 1.6, 6.0, 5);
tl.fromTo(q('#seo-plat'), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.3);
// the results page stands up and the query is typed
tl.fromTo(q('#seo-serp'), { rotationX: 74, y: 160, opacity: 0, transformPerspective: 1700, transformOrigin: '50% 100%' }, { rotationX: 0, y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, 1.0);
tl.fromTo(q('#seo-sbar'), { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 1.9);
tl.to(q('#seo-q'), { width: 560, duration: 1.0, ease: 'steps(28)' }, 2.3);
rows.forEach((r, i) => tl.fromTo(q(r), { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }, 3.35 + i * 0.12));
POSE('seo-m', 'glasses', 3.4);
// optimisation badges around her page
['#seo-k1', '#seo-k2', '#seo-k3'].forEach((k, i) => {
  tl.fromTo(q(k), { opacity: 0, scale: 0.4, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)' }, 3.9 + i * 0.3);
  tl.to(q(k), { opacity: 0, y: -24, duration: 0.35, ease: 'power1.in' }, 5.1 + i * 0.1);
});
tl.to(q('#seo-r4'), { boxShadow: '0 0 0 3px #2f6bff, 0 0 60px 12px rgba(60,200,255,.8)', duration: 0.5, ease: 'power2.out' }, 4.1);
// her page climbs the results (without a guarantee of first place: it settles second)
tl.to(q('#seo-r4'), { y: -224, duration: 0.9, ease: 'power3.inOut' }, 4.9);
tl.to(q('#seo-r2'), { y: 112, duration: 0.9, ease: 'power3.inOut' }, 4.9);
tl.to(q('#seo-r3'), { y: 112, duration: 0.9, ease: 'power3.inOut' }, 4.9);
POSE('seo-m', 'cheer', 5.0);
// the tracking chart rises
tl.fromTo(q('#seo-chart'), { opacity: 0, x: 80, rotationY: -30, transformPerspective: 1200 }, { opacity: 1, x: 0, rotationY: 0, duration: 0.7, ease: 'power3.out' }, 4.6);
const L = q('#seo-line').getTotalLength();
tl.set(q('#seo-line'), { strokeDasharray: L, strokeDashoffset: L }, 0);
tl.set(q('#seo-dot'), { scale: 0, transformOrigin: '238px 14px' }, 0);
tl.to(q('#seo-line'), { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 4.9);
tl.to(q('#seo-dot'), { scale: 1, duration: 0.4, ease: 'back.out(2.5)' }, 5.9);
// she opens her result: it grows into a map, and the camera goes through
POSE('seo-m', 'wink', 6.05);
tl.set(q('#seo-expand'), { opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' }, 6.1);
tl.to(q('#seo-expand'), { x: -170, y: 164, scaleX: 2.75, scaleY: 12.5, duration: 0.9, ease: 'power3.inOut' }, 6.1);
tl.to(q('#seo-m'), { opacity: 0, duration: 0.3 }, 6.3);
TITLE(0.9, 4.6);
ZOOM_OUT(1130, 376, 1.0);
`,
  };
};
