// SCÈNE 4/6 — Expertise n°4 : contenus et rédaction SEO (27.8 → 35.5 s)
export default (h) => {
  const bars = (n, x, y, w, gap, extra) =>
    Array.from({ length: n }, (_, i) => `<i class="skl fxl" style="left:${x}px;top:${y + i * gap}px;width:${i === n - 1 ? Math.round(w * 0.62) : w}px;height:12px;${extra || ''}"></i>`).join('');
  return {
    id: 'contenus',
    start: 27.8,
    dur: 7.7,
    css: `
.sc .pg { position: absolute; background: #fff; border-radius: 26px; box-shadow: 0 40px 100px rgba(47,80,230,.22), 0 6px 18px rgba(47,80,230,.10); overflow: hidden; }
.sc .pgm { left: 810px; top: 100px; width: 420px; height: 560px; }
.sc .pgb { left: 480px; top: 200px; width: 340px; height: 440px; }
.sc .pgf { left: 1300px; top: 170px; width: 350px; height: 470px; }
.sc .pgx { left: 1680px; top: 260px; width: 260px; height: 360px; opacity: .7; filter: blur(2px); }
.sc .h1 { position: absolute; left: 30px; top: 34px; font-weight: 800; font-size: 40px; letter-spacing: -.02em; white-space: nowrap; }
.sc .h1 span { display: inline-block; margin-right: 10px; }
.sc .hd { position: absolute; font-weight: 800; font-size: 22px; color: #121a46; white-space: nowrap; }
.sc .ico { position: absolute; width: 38px; height: 38px; border-radius: 12px; }
.sc .hl { background: linear-gradient(90deg, rgba(18,214,255,.45), rgba(123,63,242,.35)) no-repeat; background-size: 0% 36%; background-position: 0 100%; padding: 0 2px; }
.sc .pgb .im { position: absolute; left: 0; top: 0; width: 340px; height: 130px; background: linear-gradient(135deg, #12d6ff, #2f6bff 60%, #7b3ff2); }
.sc .pgb .im::after { content: ''; position: absolute; right: 36px; top: 24px; width: 64px; height: 64px; border-radius: 50%; background: rgba(255,255,255,.85); }
.sc .tt2 { position: absolute; left: 24px; top: 152px; width: 292px; font-weight: 800; font-size: 25px; line-height: 1.15; letter-spacing: -.01em; }
.sc .lnk { position: absolute; left: 24px; top: 390px; font-weight: 800; font-size: 18px; color: #2f4bd6; }
.sc .qrow { position: absolute; left: 24px; width: 302px; height: 54px; border-radius: 16px; background: #f1f4ff; }
.sc .qrow b { position: absolute; left: 12px; top: 11px; width: 32px; height: 32px; border-radius: 10px; color: #fff; font-weight: 800; font-size: 20px; line-height: 32px; text-align: center; }
.sc .qrow i { position: absolute; left: 58px; top: 21px; width: 200px; height: 12px; border-radius: 6px; background: #cfd8fb; }
.sc .cbtn { position: absolute; left: 30px; top: 478px; width: 230px; height: 52px; border-radius: 26px; color: #fff; font-weight: 800; font-size: 19px; display: flex; align-items: center; justify-content: center; }
.sc .cchip { position: absolute; height: 58px; padding: 0 26px; border-radius: 29px; background: #fff; box-shadow: 0 18px 50px rgba(47,80,230,.25); font-weight: 800; font-size: 22px; line-height: 58px; color: #121a46; white-space: nowrap; }
.sc .cchip b { display: inline-block; width: 14px; height: 14px; border-radius: 50%; margin-right: 12px; }
.sc .blk2 { position: absolute; width: 190px; height: 104px; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 26px; box-shadow: 0 24px 60px rgba(80,70,240,.4); }
.sc svg.lk { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.sc .lkp { fill: none; stroke: url(#contenus-lg); stroke-width: 5; stroke-linecap: round; }
.sc .lkd { fill: none; stroke: rgba(47,107,255,.6); stroke-width: 3; stroke-dasharray: 8 12; stroke-linecap: round; }
.sc .lkn { fill: #fff; stroke: #2f6bff; stroke-width: 5; }
.sc .surf { position: absolute; inset: 0; background: linear-gradient(120deg, #7b3ff2 0%, #2f6bff 55%, #12d6ff 100%); clip-path: circle(0px at 1020px 380px); }
.sc .plat5 { left: 60px; top: 690px; width: 440px; height: 80px; }
.sc .plat5 .s { position: absolute; left: 0; right: 0; top: 14px; height: 62px; border-radius: 50%; background: linear-gradient(#b9c6ff, #8e9fff); box-shadow: 0 24px 50px rgba(60,70,220,.28); }
.sc .plat5 .t { position: absolute; left: 0; right: 0; top: 0; height: 62px; border-radius: 50%; background: radial-gradient(ellipse at 50% 40%, #fff, #e3e9ff); box-shadow: inset 0 0 0 4px rgba(255,255,255,.9); }
`,
    html: `
${h.bg(false, [
  { c: 'v', x: 1350, y: -200, s: 620, o: 0.36 },
  { c: 'c', x: -240, y: 420, s: 600, o: 0.4 },
  { c: 'b', x: 700, y: 700, s: 460, o: 0.2 },
])}
<div class="layer">${h.decor([
  { k: 'vio', x: 280, y: 700, s: 58, a: 12, d: 3.8 },
  { k: 'warm', x: 1760, y: 90, s: 70, a: 12, d: 3.4 },
  { k: 'cy', x: 60, y: 120, s: 78, a: 14, d: 4.2 },
  { k: 'ring', x: 1100, y: 800, s: 90, a: 10, d: 4.8 },
])}${h.particles(53, 20)}</div>
<div class="abs plat5" id="contenus-plat"><div class="s"></div><div class="t"></div></div>
<div class="pg pgx" id="contenus-pgx">${bars(5, 24, 40, 200, 24)}</div>
<div class="pg pgb" id="contenus-pgb">
  <div class="im"></div>
  <div class="tt2 fxl">Comment bien choisir son prestataire ?</div>
  ${bars(3, 24, 300, 290, 22)}
  <div class="lnk fxl">Lire la suite →</div>
</div>
<div class="pg pgf" id="contenus-pgf">
  <div class="h1" style="font-size:30px"><span class="fxl">Questions</span><span class="fxl">fréquentes</span></div>
  <div class="qrow fxl" style="top:100px"><b class="grad">?</b><i></i></div>
  <div class="qrow fxl" style="top:170px"><b style="background:linear-gradient(135deg,#12d6ff,#2f6bff)">?</b><i></i></div>
  <div class="qrow fxl" style="top:240px"><b style="background:linear-gradient(135deg,#ffc654,#ff8a35)">?</b><i></i></div>
  ${bars(3, 30, 330, 290, 22)}
</div>
<div class="pg pgm" id="contenus-pgm">
  <div class="h1"><span class="fxl">Nos</span><span class="fxl">prestations</span></div>
  ${bars(2, 30, 100, 360, 20)}
  <i class="ico grad fxl" style="left:30px;top:170px"></i><div class="hd fxl" style="left:82px;top:176px">Conseil</div>${bars(2, 82, 212, 300, 20)}
  <i class="ico fxl" style="left:30px;top:290px;background:linear-gradient(135deg,#12d6ff,#2f6bff)"></i><div class="hd fxl" style="left:82px;top:296px"><span class="hl" id="contenus-hl1">Réalisation</span></div>${bars(2, 82, 332, 300, 20)}
  <i class="ico fxl" style="left:30px;top:410px;background:linear-gradient(135deg,#ffc654,#ff8a35)"></i><div class="hd fxl" style="left:82px;top:416px"><span class="hl" id="contenus-hl2">Suivi</span> et devis</div>${bars(1, 82, 452, 300, 20)}
  <div class="cbtn grad fxl">Nous contacter</div>
</div>
<svg class="lk"><defs><linearGradient id="contenus-lg" x1="0" x2="1"><stop offset="0" stop-color="#7b3ff2"/><stop offset="1" stop-color="#12d6ff"/></linearGradient></defs>
  <path class="lkp" id="contenus-l1" d="M570,200 C620,80 900,40 1020,100 C1140,40 1400,80 1470,170"/>
  <path class="lkp" id="contenus-l2" d="M570,640 C640,740 900,760 1020,670 C1140,760 1400,740 1475,640"/>
  <path class="lkd" id="contenus-l3" d="M440,220 C420,300 360,330 320,350"/>
  <path class="lkd" id="contenus-l4" d="M1540,640 C1540,700 1500,730 1460,745"/>
  <circle class="lkn" id="contenus-n1" cx="570" cy="200" r="13"/><circle class="lkn" id="contenus-n2" cx="1020" cy="100" r="13"/><circle class="lkn" id="contenus-n3" cx="1470" cy="170" r="13"/>
  <circle class="lkn" id="contenus-n4" cx="570" cy="640" r="13"/><circle class="lkn" id="contenus-n5" cx="1020" cy="670" r="13"/><circle class="lkn" id="contenus-n6" cx="1475" cy="640" r="13"/>
</svg>
<div class="cchip" id="contenus-c1" style="left:110px;top:150px"><b class="grad"></b>Questions de vos clients</div>
<div class="cchip" id="contenus-c2" style="left:1290px;top:742px"><b style="background:#ffb62e"></b>Recherches sur Google</div>
<div class="blk2 grad" id="contenus-blk" style="left:300px;top:420px">Texte</div>
<div class="surf" id="contenus-surf"></div>
${h.mascot('contenus-m', ['hello', 'laptop', 'coffee', 'cheer', 'wink'], { k: 1.25, x: 40, y: 268 })}
`,
    top: h.title(4, 'CONTENUS', 'Des textes qui parlent à vos clients'),
    js: `
const m = q('#contenus-m');
const rig = q('.rig');
FLOATS();
PORTAL_IN(0.9);
tl.set(qa('.pg'), { opacity: 0 }, 0);
tl.set(q('#contenus-pgb'), { rotation: -4 }, 0);
tl.set(q('#contenus-pgf'), { rotation: 4 }, 0);
tl.set(qa('.cchip, .blk2'), { opacity: 0 }, 0);
qa('.lkp').forEach((p) => { const L = p.getTotalLength(); tl.set(p, { strokeDasharray: L, strokeDashoffset: L }, 0); });
qa('.lkd').forEach((p) => { tl.set(p, { opacity: 0 }, 0); });
tl.set(qa('.lkn'), { scale: 0, transformOrigin: '50% 50%' }, 0);
// she pops in and starts writing
POSE('contenus-m', 'hello', 0);
tl.set(m, { scale: 0, transformOrigin: '50% 100%' }, 0);
tl.to(m, { scale: 1, duration: 0.7, ease: 'elastic.out(1,0.5)' }, 0.5);
tl.fromTo(q('#contenus-plat'), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.4);
POSE('contenus-m', 'laptop', 1.5);
IDLE('contenus-m', 1.6, 5.4, 5);
// she grabs a text block and throws it onto the page: the words assemble
tl.fromTo(q('#contenus-blk'), { opacity: 0, scale: 0.4, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)' }, 1.7);
tl.to(q('#contenus-blk'), { x: 480, y: -250, scale: 2.2, opacity: 0, duration: 0.7, ease: 'power3.in' }, 2.35);
tl.fromTo(q('#contenus-pgm'), { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.3)' }, 2.6);
const frag = (page, t0) => qa(page + ' .fxl').forEach((e, i) => {
  const fx = ((i * 97) % 61 - 30) * 7, fy = ((i * 53) % 47 - 23) * 6, fr = ((i * 29) % 31 - 15);
  tl.fromTo(e, { opacity: 0, x: fx, y: fy, rotation: fr }, { opacity: 1, x: 0, y: 0, rotation: 0, duration: 0.6, ease: 'back.out(1.4)' }, t0 + i * 0.045);
});
frag('#contenus-pgm', 2.7);
// the other pages arrive: article, FAQ, depth
tl.fromTo(q('#contenus-pgb'), { opacity: 0, x: -140, rotation: -12 }, { opacity: 1, x: 0, rotation: -4, duration: 0.7, ease: 'power3.out' }, 3.5);
frag('#contenus-pgb', 3.6);
tl.fromTo(q('#contenus-pgf'), { opacity: 0, x: 140, rotation: 12 }, { opacity: 1, x: 0, rotation: 4, duration: 0.7, ease: 'power3.out' }, 3.8);
frag('#contenus-pgf', 3.9);
tl.fromTo(q('#contenus-pgx'), { opacity: 0, x: 120 }, { opacity: 0.7, x: 0, duration: 0.7, ease: 'power3.out' }, 4.0);
// she links the pages together; keywords are highlighted
['#contenus-l1', '#contenus-l2'].forEach((l, i) => tl.to(q(l), { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 4.3 + i * 0.15));
qa('.lkn').forEach((n, i) => tl.to(n, { scale: 1, duration: 0.35, ease: 'back.out(3)' }, 4.45 + i * 0.12));
tl.to(q('#contenus-hl1'), { backgroundSize: '100% 36%', duration: 0.5, ease: 'power2.out' }, 4.6);
tl.to(q('#contenus-hl2'), { backgroundSize: '100% 36%', duration: 0.5, ease: 'power2.out' }, 4.8);
POSE('contenus-m', 'coffee', 4.5);
// what customers ask meets what people search
tl.fromTo(q('#contenus-c1'), { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.5, ease: 'back.out(1.6)' }, 5.0);
tl.fromTo(q('#contenus-c2'), { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.5, ease: 'back.out(1.6)' }, 5.2);
['#contenus-l3', '#contenus-l4'].forEach((l, i) => { const L = q(l).getTotalLength(); tl.set(q(l), { opacity: 1, strokeDasharray: '8 12' }, 5.3 + i * 0.1); tl.fromTo(q(l), { strokeDashoffset: 0 }, { strokeDashoffset: -60, duration: 1.2, ease: 'none' }, 5.3 + i * 0.1); });
POSE('contenus-m', 'cheer', 5.6);
// the finished page comes toward the camera and floods the frame with colour
tl.to(q('#contenus-pgm'), { scale: 1.35, y: -20, duration: 0.9, ease: 'power2.in' }, 5.9);
tl.to(m, { opacity: 0, duration: 0.4, ease: 'power1.in' }, 6.3);
tl.to(q('#contenus-surf'), { clipPath: 'circle(1400px at 1020px 380px)', duration: 0.9, ease: 'power3.in' }, 5.95);
TITLE(0.9, 4.6);
ZOOM_OUT(1020, 380, 1.0);
`,
  };
};
