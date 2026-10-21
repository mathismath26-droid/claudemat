// SCÈNE 6/6 — Expertise n°6 : gestion des réseaux sociaux (41.8 → 49.5 s)
export default (h) => {
  const cells = [[0, 1], [0, 3], [1, 0], [1, 2], [1, 4], [2, 1], [2, 3], [2, 5], [3, 2], [3, 4]];
  const cellXY = ([r, c]) => [1180 + 20 + c * 88 + 40, 90 + 118 + r * 108 + 50]; // centre of a calendar cell
  const grad = ['linear-gradient(135deg,#7b3ff2,#2f6bff)', 'linear-gradient(135deg,#12d6ff,#7b3ff2)', 'linear-gradient(135deg,#ffc654,#ff6b9a)'];
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => `<b class="wd" style="left:${20 + i * 88}px;width:80px">${d}</b>`).join('');
  let cellsHtml = '';
  for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) cellsHtml += `<i class="cell" style="left:${20 + c * 88}px;top:${118 + r * 108}px"><u>${r * 7 + c + 1}</u></i>`;
  const thumbs = cells
    .map((cl, i) => {
      const [x, y] = cellXY(cl);
      return `<div class="abs thumb" id="reseaux-t${i}" style="left:${x - 30}px;top:${y - 36}px;background:${grad[i % 3]}"><i></i></div>`;
    })
    .join('');
  const dots = Array.from({ length: 26 }, (_, i) => `<i class="pt wd2" id="reseaux-d${i}" style="left:0;top:0;width:${14 + (i % 3) * 5}px;height:${14 + (i % 3) * 5}px"></i>`).join('');
  const dotStarts = Array.from({ length: 26 }, (_, i) => {
    if (i < cells.length) return cellXY(cells[i]);
    const r = h.rng(700 + i);
    return [1200 + Math.round(r() * 600), 230 + Math.round(r() * 440)];
  });
  return {
    id: 'reseaux',
    start: 41.8,
    dur: 7.7,
    css: `
.sc .tpl { position: absolute; width: 180px; height: 225px; border-radius: 20px; background: rgba(255,255,255,.75); box-shadow: 0 24px 60px rgba(47,80,230,.2); }
.sc .tpl::before { content: ''; position: absolute; left: 14px; right: 14px; top: 14px; height: 110px; border-radius: 12px; background: #e3e9ff; }
.sc .tpl::after { content: ''; position: absolute; left: 14px; top: 140px; width: 110px; height: 12px; border-radius: 6px; background: #d3dcff; box-shadow: 0 24px 0 -0px #e3e9ff; }
.sc .post { position: absolute; border-radius: 26px; overflow: hidden; box-shadow: 0 40px 100px rgba(47,80,230,.32), 0 6px 18px rgba(47,80,230,.12); color: #fff; }
.sc .post .sun { position: absolute; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff7d8, #ffc654); }
.sc .post .hd { position: absolute; left: 24px; font-weight: 800; letter-spacing: -.02em; line-height: 1.05; white-space: nowrap; }
.sc .post .lg { position: absolute; left: 24px; top: 24px; width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,.92); }
.sc .post .lg::after { content: ''; position: absolute; left: 10px; top: 12px; width: 20px; height: 18px; background: #2f6bff; clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.sc .post .bar { position: absolute; left: 24px; height: 11px; border-radius: 6px; background: rgba(255,255,255,.55); }
.sc .cal { left: 1180px; top: 90px; width: 640px; height: 620px; border-radius: 30px; background: #fff; box-shadow: 0 50px 120px rgba(47,80,230,.30), 0 8px 24px rgba(47,80,230,.12); }
.sc .cal .ct { position: absolute; left: 28px; top: 24px; font-weight: 800; font-size: 28px; letter-spacing: -.01em; }
.sc .cal .ok { position: absolute; right: 24px; top: 22px; height: 40px; line-height: 40px; padding: 0 20px; border-radius: 20px; color: #fff; font-weight: 800; font-size: 18px; }
.sc .wd { position: absolute; top: 84px; text-align: center; font-weight: 800; font-size: 16px; color: #8b95c9; }
.sc .cell { position: absolute; width: 80px; height: 100px; border-radius: 14px; background: #f1f4ff; }
.sc .cell u { position: absolute; left: 9px; top: 6px; font-size: 13px; font-weight: 700; color: #9aa4d6; text-decoration: none; }
.sc .thumb { width: 60px; height: 72px; border-radius: 12px; box-shadow: 0 10px 24px rgba(47,80,230,.35); opacity: 0; }
.sc .thumb i { position: absolute; left: 8px; right: 8px; bottom: 10px; height: 8px; border-radius: 4px; background: rgba(255,255,255,.7); }
.sc .wd2 { opacity: 0; background: linear-gradient(135deg,#fff,#9fe9ff); box-shadow: 0 0 22px 8px rgba(110,140,255,.85); }
.sc .vortex { position: absolute; left: 760px; top: 340px; width: 400px; height: 400px; border-radius: 50%; border: 10px solid transparent; background: linear-gradient(#fff,#fff) padding-box, conic-gradient(#7b3ff2, #2f6bff, #12d6ff, #7b3ff2) border-box; opacity: 0; box-shadow: 0 0 60px rgba(80,120,255,.6); }
.sc .plat7 { left: 60px; top: 690px; width: 440px; height: 80px; }
.sc .plat7 .s { position: absolute; left: 0; right: 0; top: 14px; height: 62px; border-radius: 50%; background: linear-gradient(#b9c6ff, #8e9fff); box-shadow: 0 24px 50px rgba(60,70,220,.28); }
.sc .plat7 .t { position: absolute; left: 0; right: 0; top: 0; height: 62px; border-radius: 50%; background: radial-gradient(ellipse at 50% 40%, #fff, #e3e9ff); box-shadow: inset 0 0 0 4px rgba(255,255,255,.9); }
`,
    html: `
${h.bg(false, [
  { c: 'v', x: 1350, y: -200, s: 640, o: 0.38 },
  { c: 'c', x: -240, y: 460, s: 600, o: 0.42 },
  { c: 'b', x: 700, y: 740, s: 440, o: 0.2 },
])}
<div class="layer">${h.decor([
  { k: 'vio', x: 1300, y: 830, s: 56, a: 12, d: 3.8 },
  { k: 'warm', x: 1090, y: 60, s: 64, a: 12, d: 3.4 },
  { k: 'cy', x: 70, y: 100, s: 76, a: 14, d: 4.2 },
  { k: 'ring', x: 1100, y: 780, s: 84, a: 10, d: 4.8 },
])}${h.particles(73, 18)}</div>
<div class="abs plat7" id="reseaux-plat"><div class="s"></div><div class="t"></div></div>
<div class="tpl" id="reseaux-tp1" style="left:560px;top:130px"></div>
<div class="tpl" id="reseaux-tp2" style="left:800px;top:230px"></div>
<div class="tpl" id="reseaux-tp3" style="left:600px;top:420px"></div>
<div class="tpl" id="reseaux-tp4" style="left:850px;top:480px"></div>
<div class="post" id="reseaux-p1" style="left:580px;top:100px;width:340px;height:425px;background:linear-gradient(150deg,#7b3ff2,#2f6bff 60%,#12d6ff)"><i class="lg"></i><i class="sun" style="right:36px;top:36px;width:80px;height:80px"></i><div class="hd" style="top:268px;font-size:44px">Notre<br>savoir-faire</div><i class="bar" style="top:372px;width:200px"></i><i class="bar" style="top:392px;width:140px"></i></div>
<div class="post" id="reseaux-p2" style="left:940px;top:130px;width:220px;height:390px;background:linear-gradient(160deg,#12d6ff,#7b3ff2)"><i class="lg" style="left:20px"></i><i class="sun" style="right:22px;top:100px;width:58px;height:58px"></i><div class="hd" style="top:250px;left:20px;font-size:34px">À la une</div><i class="bar" style="top:322px;left:20px;width:140px"></i></div>
<div class="post" id="reseaux-p3" style="left:700px;top:552px;width:340px;height:190px;background:linear-gradient(135deg,#ffc654,#ff6b9a 70%,#7b3ff2)"><i class="lg" style="top:20px;width:34px;height:34px"></i><div class="hd" style="top:116px;font-size:32px">Notre équipe</div><i class="sun" style="right:30px;top:28px;width:54px;height:54px"></i></div>
<div class="abs cal" id="reseaux-cal"><div class="ct">Calendrier éditorial</div><span class="ok grad" id="reseaux-ok">Validé</span>${days}${cellsHtml}</div>
${thumbs}
${dots}
<div class="vortex" id="reseaux-vx"></div>
${h.mascot('reseaux-m', ['hello', 'wink', 'megaphone', 'cheer', 'music'], { k: 1.25, x: 40, y: 268 })}
`,
    top: h.title(6, 'RÉSEAUX SOCIAUX', 'Une présence régulière, sans y passer vos soirées'),
    js: `
const m = q('#reseaux-m');
const rig = q('.rig');
FLOATS();
PORTAL_IN(0.9);
tl.set(qa('.tpl, .post'), { opacity: 0 }, 0);
tl.set(q('#reseaux-cal'), { opacity: 0 }, 0);
tl.set(q('#reseaux-ok'), { opacity: 0, scale: 0.5 }, 0);
// she slides in, looks over the post templates
POSE('reseaux-m', 'hello', 0);
tl.set(m, { x: -400 }, 0);
tl.fromTo(q('#reseaux-plat'), { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.5);
HOP('reseaux-m', 0.55, 400, 0, 70, 0.5);
POSE('reseaux-m', 'megaphone', 1.55);
IDLE('reseaux-m', 1.6, 6.0, 5);
const tp = ['#reseaux-tp1', '#reseaux-tp2', '#reseaux-tp3', '#reseaux-tp4'];
const rot = [-7, 5, 6, -5];
tp.forEach((t, i) => {
  tl.set(q(t), { rotation: rot[i] }, 0);
  tl.fromTo(q(t), { opacity: 0, y: 80, scale: 0.7 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.6)' }, 1.0 + i * 0.12);
});
// she picks one: it grows into the finished post
POSE('reseaux-m', 'wink', 2.0);
tl.to(q('#reseaux-tp2'), { x: -130, y: -20, scale: 1.9, rotation: 0, duration: 0.6, ease: 'power3.inOut' }, 2.1);
tl.to([q('#reseaux-tp1'), q('#reseaux-tp3'), q('#reseaux-tp4')], { opacity: 0, scale: 0.6, duration: 0.4, ease: 'power2.in' }, 2.1);
tl.fromTo(q('#reseaux-p1'), { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }, 2.55);
tl.to(q('#reseaux-tp2'), { opacity: 0, duration: 0.3 }, 2.6);
// the same visual adapts to other formats
tl.fromTo(q('#reseaux-p2'), { opacity: 0, x: -140, scale: 0.6 }, { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }, 3.0);
tl.fromTo(q('#reseaux-p3'), { opacity: 0, y: -120, scale: 0.6 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }, 3.25);
POSE('reseaux-m', 'music', 3.2);
// the editorial calendar slides in
tl.fromTo(q('#reseaux-cal'), { opacity: 0, x: 200, rotationY: -30, transformPerspective: 1500 }, { opacity: 1, x: 0, rotationY: 0, duration: 0.8, ease: 'power3.out' }, 3.5);
// posts take their dates, one after another
const from = [['#reseaux-p1', 750, 312], ['#reseaux-p2', 1050, 325], ['#reseaux-p3', 870, 647]];
const cellsXY = ${JSON.stringify(cells.map(cellXY))};
cellsXY.forEach((c, i) => {
  const t = 4.3 + i * 0.16;
  const f = from[i % 3];
  tl.set(q('#reseaux-t' + i), { opacity: 1, x: f[1] - c[0], y: f[2] - c[1], scale: 3.2 }, t);
  tl.to(q('#reseaux-t' + i), { x: 0, y: 0, scale: 1, duration: 0.5, ease: 'power3.inOut' }, t);
});
tl.to(q('#reseaux-p1'), { scale: 1.04, duration: 0.2, yoyo: true, repeat: 1 }, 4.3);
// she validates the calendar
POSE('reseaux-m', 'cheer', 5.9);
tl.to(q('#reseaux-ok'), { opacity: 1, scale: 1, duration: 0.5, ease: 'elastic.out(1,0.5)' }, 6.0);
// everything folds into luminous dots that spiral away
const starts = ${JSON.stringify(dotStarts)};
starts.forEach((s, i) => {
  const d = q('#reseaux-d' + i);
  const a0 = Math.atan2(s[1] - 540, s[0] - 960), r0 = Math.hypot(s[0] - 960, s[1] - 540);
  const kf = [[0.7, 1.0], [0.42, 2.3], [0.14, 3.7], [0, 5.0]].map((k) => ({ x: 960 + Math.cos(a0 + k[1]) * r0 * k[0] - s[0], y: 540 + Math.sin(a0 + k[1]) * r0 * k[0] - s[1], duration: 0.32, ease: 'none' }));
  tl.set(d, { left: s[0], top: s[1], opacity: 1, x: 0, y: 0 }, 6.35 + (i % 6) * 0.03);
  tl.to(d, { keyframes: kf }, 6.4 + (i % 6) * 0.03);
});
tl.to(qa('#reseaux-cal, #reseaux-p1, #reseaux-p2, #reseaux-p3, .thumb, #reseaux-plat'), { opacity: 0, scale: 0.7, duration: 0.45, ease: 'power2.in' }, 6.3);
tl.to(m, { opacity: 0, duration: 0.4, ease: 'power1.in' }, 6.3);
tl.fromTo(q('#reseaux-vx'), { opacity: 0.9, scale: 0.2, rotation: 0 }, { opacity: 0, scale: 1.6, rotation: 360, duration: 1.1, ease: 'power2.out', immediateRender: false }, 6.5);
TITLE(0.9, 4.7);
ZOOM_OUT(960, 540, 0.9);
`,
  };
};
