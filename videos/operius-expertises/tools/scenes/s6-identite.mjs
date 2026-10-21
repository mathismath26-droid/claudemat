// SCÈNE 5/6 — Expertise n°5 : identité visuelle et branding (34.8 → 42.5 s)
export default (h) => {
  const bars = () => [0, 1, 2, 3, 4, 5].map((i) => `<i class="bp skl" style="left:18px;top:${84 + i * 22}px;width:${i === 5 ? 80 : 150}px;height:10px"></i>`).join('');
  const icon = (id, grad, path, x, y) =>
    `<div class="abs sico" id="contenu-${id}" style="left:${x}px;top:${y}px;background:${grad}"><svg width="44" height="44" viewBox="0 0 24 24" fill="#fff">${path}</svg></div>`.replace('contenu-', 'identite-');
  const icons = [
    icon('i1', 'linear-gradient(135deg,#7b3ff2,#2f6bff)', '<path d="M12 21s-7.500-4.600-9.500-9.300C1.200 8.500 3.100 5 6.500 5c2 0 3.400 1.100 5.500 3.300C14.100 6.100 15.500 5 17.500 5c3.400 0 5.300 3.500 4 6.700C19.500 16.400 12 21 12 21z"/>', 820, 326),
    icon('i2', 'linear-gradient(135deg,#2f6bff,#12d6ff)', '<path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>', 920, 326),
    icon('i3', 'linear-gradient(135deg,#12d6ff,#7b3ff2)', '<path d="M8 5v14l11-7z"/>', 1020, 326),
    icon('i4', 'linear-gradient(135deg,#ffc654,#ff8a35)', '<path d="M9 4l-2 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2-3H9zm3 5a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9z"/>', 1120, 326),
    icon('i5', 'linear-gradient(135deg,#7b3ff2,#12d6ff)', '<path d="M18 16a3 3 0 0 0-2.200 1L9 13.300a3 3 0 0 0 0-2.600L15.800 7A3 3 0 1 0 15 5a3 3 0 0 0 .1.800L8.300 9.500a3 3 0 1 0 0 5l6.800 3.700A3 3 0 1 0 18 16z"/>', 1220, 326),
  ].join('');
  return {
    id: 'identite',
    start: 34.8,
    dur: 7.7,
    css: `
.sc .board { left: 740px; top: 60px; width: 960px; height: 640px; border-radius: 34px; background: #fff; box-shadow: 0 60px 140px rgba(47,80,230,.30), 0 8px 24px rgba(47,80,230,.14); }
.sc .bp { position: absolute; }
.sc .mark { width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #7b3ff2, #2f6bff 55%, #12d6ff); overflow: hidden; }
.sc .mark::before { content: ''; position: absolute; left: 22px; top: 30px; width: 76px; height: 76px; background: rgba(255,255,255,.92); clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.sc .mark::after { content: ''; position: absolute; right: 8px; top: 12px; width: 34px; height: 34px; border-radius: 50%; background: #ffc654; }
.sc .wm { font-weight: 800; font-size: 46px; letter-spacing: -.03em; white-space: nowrap; }
.sc .sw { width: 80px; height: 80px; border-radius: 50%; box-shadow: 0 10px 24px rgba(30,40,140,.22); }
.sc .tbox { left: 560px; top: 40px; width: 360px; height: 250px; border-radius: 26px; background: #f3f6ff; }
.sc .aa { font-weight: 800; font-size: 140px; line-height: 1; letter-spacing: -.04em; }
.sc .bcard { width: 260px; height: 150px; border-radius: 18px; background: linear-gradient(135deg, #2f6bff, #7b3ff2); box-shadow: 0 24px 50px rgba(47,80,230,.35); }
.sc .bcard::before { content: ''; position: absolute; left: 20px; top: 20px; width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,.92); }
.sc .letter { width: 190px; height: 260px; border-radius: 12px; background: #fff; box-shadow: 0 24px 60px rgba(47,80,230,.28), 0 0 0 2px #eef1ff; }
.sc .phn { width: 140px; height: 250px; border-radius: 28px; background: #fff; border: 7px solid #1b2559; box-shadow: 0 24px 60px rgba(47,80,230,.3); overflow: hidden; }
.sc .web { width: 190px; height: 150px; border-radius: 16px; background: #fff; box-shadow: 0 24px 60px rgba(47,80,230,.28), 0 0 0 2px #eef1ff; overflow: hidden; }
.sc .sico { width: 84px; height: 84px; border-radius: 26px; display: flex; align-items: center; justify-content: center; box-shadow: 0 24px 50px rgba(60,70,230,.4); opacity: 0; }
.sc .surf2 { position: absolute; inset: -5%; background: linear-gradient(120deg, #7b3ff2 0%, #2f6bff 55%, #12d6ff 100%); }
.sc .shp { position: absolute; }
.sc .plat6 { left: 60px; top: 690px; width: 440px; height: 80px; }
.sc .plat6 .s { position: absolute; left: 0; right: 0; top: 14px; height: 62px; border-radius: 50%; background: linear-gradient(#b9c6ff, #8e9fff); box-shadow: 0 24px 50px rgba(60,70,220,.28); }
.sc .plat6 .t { position: absolute; left: 0; right: 0; top: 0; height: 62px; border-radius: 50%; background: radial-gradient(ellipse at 50% 40%, #fff, #e3e9ff); box-shadow: inset 0 0 0 4px rgba(255,255,255,.9); }
`,
    html: `
${h.bg(false, [
  { c: 'v', x: 1300, y: -200, s: 640, o: 0.38 },
  { c: 'c', x: -220, y: 480, s: 600, o: 0.42 },
  { c: 'b', x: 760, y: 720, s: 440, o: 0.2 },
])}
<div class="layer">
  <div class="shp dc" data-a="14" data-d="4" data-r="12" style="left:120px;top:110px;width:90px;height:90px;background:linear-gradient(135deg,#ffc654,#ff8a35);clip-path:polygon(50% 0,100% 100%,0 100%)"></div>
  <div class="shp dc" data-a="12" data-d="3.6" data-r="-10" style="left:560px;top:90px;width:70px;height:70px;border-radius:18px;background:linear-gradient(135deg,#12d6ff,#2f6bff)"></div>
  <div class="shp dc" data-a="16" data-d="4.4" data-r="8" style="left:1780px;top:760px;width:80px;height:80px;border-radius:50%;border:12px solid #7b3ff2"></div>
  <div class="shp dc" data-a="10" data-d="3.2" data-r="20" style="left:60px;top:560px;width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,#7b3ff2,#12d6ff)"></div>
  ${h.decor([{ k: 'cy', x: 1740, y: 90, s: 78, a: 14, d: 4.2 }, { k: 'warm', x: 620, y: 800, s: 56, a: 12, d: 3.4 }])}${h.particles(63, 20)}
</div>
<div class="abs plat6" id="identite-plat"><div class="s"></div><div class="t"></div></div>
<div class="abs board" id="identite-board">
  <div class="bp mark bpx" id="identite-mark" style="left:40px;top:40px"></div>
  <div class="bp wm bpx" id="identite-wm" style="left:176px;top:62px"><span class="gtxt">Votre marque</span></div>
  <i class="bp skl bpx" style="left:178px;top:130px;width:230px;height:12px"></i>
  <i class="bp skl bpx" style="left:40px;top:196px;width:110px;height:10px"></i>
  <i class="bp sw bpx" id="identite-sw1" style="left:40px;top:226px;background:#7b3ff2"></i>
  <i class="bp sw bpx" id="identite-sw2" style="left:140px;top:226px;background:#2f6bff"></i>
  <i class="bp sw bpx" id="identite-sw3" style="left:240px;top:226px;background:#12d6ff"></i>
  <i class="bp sw bpx" id="identite-sw4" style="left:340px;top:226px;background:#ffc654"></i>
  <i class="bp sw bpx" id="identite-sw5" style="left:440px;top:226px;background:#121a46"></i>
  <div class="bp tbox bpx"><div class="bp aa gtxt" style="left:26px;top:20px">Aa</div><i class="bp skl" style="left:26px;top:178px;width:210px;height:12px"></i><i class="bp skl" style="left:26px;top:202px;width:150px;height:12px"></i><div class="bp" style="right:28px;top:40px;font-weight:700;font-size:52px;font-style:italic;color:#9aa6e6">Aa</div></div>
  <div class="bp bcard bpx" id="identite-ap1" style="left:40px;top:392px"><i class="skl" style="left:20px;top:92px;width:110px;height:10px;background:rgba(255,255,255,.7);position:absolute"></i><i class="skl" style="left:20px;top:112px;width:80px;height:10px;background:rgba(255,255,255,.5);position:absolute"></i></div>
  <div class="bp letter bpx" id="identite-ap2" style="left:340px;top:360px"><div class="bp mark" style="left:18px;top:18px;width:36px;height:36px"></div>${bars()}</div>
  <div class="bp phn bpx" id="identite-ap3" style="left:570px;top:368px"><div class="bp grad" style="left:10px;top:14px;width:100px;height:90px;border-radius:14px"></div><i class="bp skl" style="left:10px;top:120px;width:100px;height:10px"></i><i class="bp skl" style="left:10px;top:142px;width:70px;height:10px"></i><div class="bp grad" style="left:10px;top:176px;width:100px;height:30px;border-radius:15px"></div></div>
  <div class="bp web bpx" id="identite-ap4" style="left:742px;top:392px"><div class="bp" style="left:0;top:0;right:0;height:22px;background:#f1f4ff"></div><div class="bp grad" style="left:12px;top:36px;width:166px;height:60px;border-radius:10px"></div><i class="bp skl" style="left:12px;top:108px;width:120px;height:10px"></i><i class="bp skl" style="left:12px;top:126px;width:80px;height:10px"></i></div>
</div>
${icons}
<div class="surf2" id="identite-surf"></div>
${h.mascot('identite-m', ['hello', 'wink', 'heart', 'cheer', 'laptop'], { k: 1.25, x: 40, y: 268 })}
`,
    top: h.title(5, 'IDENTITÉ VISUELLE', 'Une image dont vous serez fier'),
    js: `
const m = q('#identite-m');
const rig = q('.rig');
FLOATS();
PORTAL_IN(0.9);
// the colour flood from the previous scene clears into a studio
tl.to(q('#identite-surf'), { opacity: 0, duration: 0.9, ease: 'power2.inOut' }, 0.5);
const board = q('#identite-board');
tl.set(board, { rotationY: 20, rotationX: 4, transformPerspective: 1800, transformOrigin: '50% 50%' }, 0);
tl.set(board, { opacity: 0 }, 0);
tl.fromTo(board, { scale: 0.88 }, { scale: 1, duration: 1.0, ease: 'power3.out' }, 1.3);
tl.fromTo(board, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.3);
// every piece starts scattered in the air, then snaps into the layout
qa('#identite-board .bpx').forEach((e, i) => {
  const fx = ((i * 131) % 97 - 48) * 9, fy = ((i * 71) % 83 - 41) * 7, fr = ((i * 37) % 41 - 20) * 1.4;
  const t0 = 1.5 + Math.min(i, 14) * 0.17;
  tl.fromTo(e, { opacity: 0, x: fx, y: fy, rotation: fr, scale: 0.6 }, { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)' }, t0);
});
// the mascot slides in, handles the shapes, then admires the result
POSE('identite-m', 'hello', 0);
tl.set(m, { x: -400 }, 0);
tl.fromTo(q('#identite-plat'), { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.5);
const tIn = HOP('identite-m', 0.55, 400, 0, 70, 0.5);
POSE('identite-m', 'laptop', 1.5);
POSE('identite-m', 'wink', 3.1);
POSE('identite-m', 'heart', 4.5);
IDLE('identite-m', 1.5, 5.4, 5);
// the board turns to face the camera
tl.to(board, { rotationY: 0, rotationX: 0, scale: 1.06, duration: 1.0, ease: 'power3.inOut' }, 4.9);
POSE('identite-m', 'cheer', 5.2);
// the colours leave the board and become social-network icons
tl.set(qa('.sico'), { opacity: 0, scale: 0.4 }, 0);
const dest = [[1450, 150], [1640, 300], [1520, 470], [1380, 600], [1700, 560]];
['#identite-i1', '#identite-i2', '#identite-i3', '#identite-i4', '#identite-i5'].forEach((s, i) => {
  const sw = q('#identite-sw' + (i + 1));
  const t = 6.0 + i * 0.1;
  tl.set(q(s), { opacity: 1 }, t);
  tl.to(sw, { opacity: 0, scale: 0.6, duration: 0.25 }, t);
  tl.to(q(s), { scale: 1, x: dest[i][0] - (820 + i * 100), y: dest[i][1] - 326, rotation: 360, duration: 0.9, ease: 'power3.out' }, t);
});
tl.to(board, { opacity: 0, scale: 1.4, duration: 0.6, ease: 'power2.in' }, 6.35);
tl.to(m, { opacity: 0, duration: 0.4, ease: 'power1.in' }, 6.2);
TITLE(0.9, 4.6);
ZOOM_OUT(1520, 380, 1.0);
`,
  };
};
