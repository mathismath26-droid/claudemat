// SCÈNE 2 — Expertise n°1 : création de sites internet (6.0 → 14.5 s)
export default (h) => {
  const r = h.rng(21);
  // search-network nodes for the hand-off to the SEO scene
  const nodes = [];
  for (let i = 0; i < 16; i++) nodes.push([Math.round(160 + r() * 1600), Math.round(120 + r() * 700)]);
  const edges = [];
  nodes.forEach((a, i) => {
    const d = nodes.map((b, j) => [j, (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2]).filter((x) => x[0] !== i).sort((x, y) => x[1] - y[1]).slice(0, 2);
    d.forEach(([j]) => { if (!edges.some((e) => (e[0] === j && e[1] === i))) edges.push([i, j]); });
  });
  const net =
    edges.map(([i, j], k) => `<line class="nl" x1="${nodes[i][0]}" y1="${nodes[i][1]}" x2="${nodes[j][0]}" y2="${nodes[j][1]}"/>`).join('') +
    nodes.map(([x, y], i) => `<circle class="nn" cx="${x}" cy="${y}" r="${i % 4 === 0 ? 11 : 7}"/>`).join('');
  return {
    id: 'sites',
    start: 6.0,
    dur: 8.5,
    css: `
.sc .bgcard { position: absolute; background: rgba(255,255,255,.55); border-radius: 22px; box-shadow: 0 20px 60px rgba(70,90,230,.14); filter: blur(1.5px); }
.sc .bw { left: 640px; top: 80px; width: 1000px; height: 640px; border-radius: 30px; background: #fff; box-shadow: 0 50px 120px rgba(47,80,230,.28), 0 8px 24px rgba(47,80,230,.12); overflow: hidden; }
.sc .bw .bar { position: absolute; left: 0; right: 0; top: 0; height: 56px; background: #f1f4ff; }
.sc .bw .bar i { position: absolute; top: 21px; width: 14px; height: 14px; border-radius: 50%; }
.sc .bw .bar .url { position: absolute; left: 130px; right: 60px; top: 12px; height: 32px; border-radius: 16px; background: #fff; }
.sc .sec { position: absolute; }
.sc .hbar { position: absolute; height: 30px; border-radius: 10px; background: #1b2559; }
.sc .cta { position: absolute; left: 676px; top: 392px; width: 250px; height: 56px; border-radius: 28px; color: #fff; font-weight: 800; font-size: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 14px 30px rgba(80,70,240,.4); }
.sc .himg { position: absolute; left: 1090px; top: 224px; width: 510px; height: 214px; border-radius: 22px; background: linear-gradient(135deg, #7b3ff2, #2f6bff 55%, #12d6ff); overflow: hidden; }
.sc .himg::before { content: ''; position: absolute; right: 60px; top: 28px; width: 110px; height: 110px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff7d8, #ffc654); }
.sc .himg::after { content: ''; position: absolute; left: -40px; bottom: -80px; width: 380px; height: 200px; border-radius: 50%; background: rgba(255,255,255,.25); }
.sc .svc { position: absolute; top: 490px; width: 184px; height: 118px; border-radius: 18px; background: #f3f6ff; }
.sc .svc b { position: absolute; left: 16px; top: 16px; width: 36px; height: 36px; border-radius: 12px; }
.sc .tile { position: absolute; top: 490px; width: 96px; height: 118px; border-radius: 16px; }
.sc .form { position: absolute; top: 636px; height: 44px; border-radius: 12px; background: #eef2ff; }
.sc .call { left: 1566px; top: 592px; width: 76px; height: 76px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 16px 36px rgba(80,70,240,.45); }
.sc .ph { left: 1670px; top: 250px; width: 214px; height: 420px; border-radius: 36px; background: #fff; box-shadow: 0 40px 90px rgba(47,80,230,.3); border: 8px solid #1b2559; overflow: hidden; }
.sc .ph .pn { position: absolute; border-radius: 8px; background: #e3e9ff; }
.sc .toast { left: 1190px; top: 168px; width: 410px; height: 84px; border-radius: 22px; background: #fff; box-shadow: 0 24px 60px rgba(47,80,230,.32); display: flex; align-items: center; gap: 16px; padding: 0 22px; font-weight: 800; font-size: 22px; }
.sc .toast b { width: 44px; height: 44px; border-radius: 14px; flex: none; display: flex; align-items: center; justify-content: center; }
.sc .toast small { display: block; font-weight: 600; font-size: 15px; color: #6b749f; margin-top: 2px; }
.sc .plat2 { left: 215px; top: 690px; width: 460px; height: 90px; }
.sc .plat2 .s { position: absolute; left: 0; right: 0; top: 14px; height: 70px; border-radius: 50%; background: linear-gradient(#b9c6ff, #8e9fff); box-shadow: 0 24px 50px rgba(60,70,220,.28); }
.sc .plat2 .t { position: absolute; left: 0; right: 0; top: 0; height: 70px; border-radius: 50%; background: radial-gradient(ellipse at 50% 40%, #fff, #e3e9ff); box-shadow: inset 0 0 0 4px rgba(255,255,255,.9); }
.sc svg.net { position: absolute; inset: 0; width: 100%; height: 100%; }
.sc .nl { stroke: rgba(47,107,255,.55); stroke-width: 2.5; }
.sc .nn { fill: #fff; stroke: #2f6bff; stroke-width: 4; filter: drop-shadow(0 0 8px rgba(60,120,255,.8)); }
.sc .ripple { position: absolute; left: 676px; top: 392px; width: 250px; height: 56px; border-radius: 28px; border: 4px solid rgba(80,110,255,.8); opacity: 0; }
`,
    html: `
${h.bg(false, [
  { c: 'c', x: -200, y: 500, s: 620, o: 0.42 },
  { c: 'v', x: 1300, y: -180, s: 620, o: 0.4 },
  { c: 'b', x: 500, y: 350, s: 480, o: 0.22 },
])}
<div class="layer">
  <div class="bgcard" style="left:90px;top:100px;width:300px;height:190px;transform:rotate(-8deg)"></div>
  <div class="bgcard" style="left:1480px;top:790px;width:340px;height:200px;transform:rotate(7deg)"></div>
  ${h.decor([
    { k: 'warm', x: 1190, y: 830, s: 64, a: 12, d: 3.4 },
    { k: 'cy', x: 1760, y: 120, s: 84, a: 14, d: 4.1 },
    { k: 'vio', x: 120, y: 360, s: 70, a: 12, d: 3.8 },
    { k: 'ring', x: 1500, y: 40, s: 100, a: 10, d: 4.8 },
  ])}${h.particles(23, 22)}
</div>
<div class="abs plat2" id="sites-plat"><div class="s"></div><div class="t"></div></div>
<div class="abs bw" id="sites-bw">
  <div class="bar"><i style="left:24px;background:#ff6b6b"></i><i style="left:50px;background:#ffc23d"></i><i style="left:76px;background:#3dd68c"></i><div class="url"></div></div>
</div>
<div id="sites-secs">
  <div class="abs sec grad" id="sites-logo" style="left:676px;top:150px;width:44px;height:44px;border-radius:14px"></div>
  <div class="abs sec skl" id="sites-n1" style="left:1280px;top:162px;width:76px;height:18px"></div>
  <div class="abs sec skl" id="sites-n2" style="left:1380px;top:162px;width:76px;height:18px"></div>
  <div class="abs sec skl" id="sites-n3" style="left:1480px;top:162px;width:76px;height:18px"></div>
  <div class="hbar sec" id="sites-h1" style="left:676px;top:232px;width:380px"></div>
  <div class="hbar sec" id="sites-h2" style="left:676px;top:276px;width:300px"></div>
  <div class="abs sec skl" id="sites-p1" style="left:676px;top:332px;width:340px;height:12px"></div>
  <div class="abs sec skl" id="sites-p2" style="left:676px;top:354px;width:290px;height:12px"></div>
  <div class="cta grad sec" id="sites-cta">Demander un devis</div>
  <i class="ripple" id="sites-ripple"></i>
  <div class="himg sec" id="sites-himg"></div>
  <div class="svc sec" id="sites-s1" style="left:676px"><b class="grad"></b><i class="skl" style="left:16px;top:70px;width:120px;height:12px"></i><i class="skl" style="left:16px;top:92px;width:90px;height:12px"></i></div>
  <div class="svc sec" id="sites-s2" style="left:876px"><b style="background:linear-gradient(135deg,#12d6ff,#2f6bff)"></b><i class="skl" style="left:16px;top:70px;width:120px;height:12px"></i><i class="skl" style="left:16px;top:92px;width:90px;height:12px"></i></div>
  <div class="svc sec" id="sites-s3" style="left:1076px"><b style="background:linear-gradient(135deg,#ffc654,#ff8a35)"></b><i class="skl" style="left:16px;top:70px;width:120px;height:12px"></i><i class="skl" style="left:16px;top:92px;width:90px;height:12px"></i></div>
  <div class="tile sec" id="sites-g1" style="left:1296px;background:linear-gradient(135deg,#7b3ff2,#2f6bff)"></div>
  <div class="tile sec" id="sites-g2" style="left:1404px;background:linear-gradient(135deg,#12d6ff,#7b3ff2)"></div>
  <div class="tile sec" id="sites-g3" style="left:1512px;background:linear-gradient(135deg,#ffc654,#ff6b9a)"></div>
  <div class="form sec" id="sites-f1" style="left:676px;width:230px"></div>
  <div class="form sec" id="sites-f2" style="left:922px;width:230px"></div>
  <div class="form sec" id="sites-f3" style="left:1168px;width:230px"></div>
  <div class="abs sec grad" id="sites-fb" style="left:1414px;top:636px;width:130px;height:44px;border-radius:22px"></div>
</div>
<div class="abs call grad" id="sites-call"><svg width="36" height="36" viewBox="0 0 24 24" fill="#fff"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.100.4 2.300.6 3.600.6.600 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.600 21 3 13.400 3 4c0-.6.4-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .7-.2 1l-2.300 2.200z"/></svg></div>
<div class="abs ph" id="sites-ph">
  <div class="pn grad" style="left:18px;top:26px;width:30px;height:30px;border-radius:10px"></div>
  <div class="pn" style="left:140px;top:34px;width:50px;height:14px"></div>
  <div class="pn" style="left:18px;top:84px;width:150px;height:22px;background:#1b2559"></div>
  <div class="pn" style="left:18px;top:116px;width:110px;height:22px;background:#1b2559"></div>
  <div class="pn grad" style="left:18px;top:160px;width:150px;height:40px;border-radius:20px"></div>
  <div class="pn" style="left:18px;top:222px;width:170px;height:92px;border-radius:16px;background:linear-gradient(135deg,#7b3ff2,#2f6bff 55%,#12d6ff)"></div>
  <div class="pn" style="left:18px;top:330px;width:80px;height:60px;border-radius:12px"></div>
  <div class="pn" style="left:108px;top:330px;width:80px;height:60px;border-radius:12px"></div>
</div>
<div class="abs toast" id="sites-toast"><b class="grad"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg></b><div>Nouvelle demande de devis<small>À l'instant</small></div></div>
<svg class="net" id="sites-net">${net}</svg>
${h.mascot('sites-m', ['hello', 'browser', 'cheer', 'wink', 'wave'], { k: 1.25, x: 250, y: 268 })}
`,
    top: h.title(1, 'SITE INTERNET', 'Un site qui donne envie de vous appeler'),
    js: `
const m = q('#sites-m');
const rig = q('.rig');
FLOATS();
PORTAL_IN(0.9);
// hidden start states
const secs = qa('#sites-secs > .sec, #sites-secs > .svc, #sites-secs > .tile, #sites-secs > .form, #sites-secs > .cta, #sites-secs > .himg');
tl.set(secs, { opacity: 0 }, 0);
tl.set(q('#sites-call'), { scale: 0 }, 0);
tl.set(q('#sites-toast'), { opacity: 0, y: -30 }, 0);
tl.set(q('#sites-ph'), { opacity: 0 }, 0);
tl.set(qa('#sites-net .nl'), { opacity: 0 }, 0);
qa('#sites-net .nl').forEach((l) => { const L = Math.hypot(l.x2.baseVal.value - l.x1.baseVal.value, l.y2.baseVal.value - l.y1.baseVal.value); tl.set(l, { strokeDasharray: L, strokeDashoffset: L }, 0); });
tl.set(qa('#sites-net .nn'), { scale: 0, transformOrigin: '50% 50%', opacity: 0 }, 0);
// mascot slides in with a hop and greets
POSE('sites-m', 'hello', 0);
tl.set(m, { x: -300 }, 0);
const tIn = HOP('sites-m', 0.35, 300, 0, 70, 0.5);
POSE('sites-m', 'browser', 1.55);
IDLE('sites-m', 1.5, 5.0, 5);
// the mock-up lies flat, then stands up
tl.fromTo(q('#sites-bw'), { rotationX: 74, y: 160, opacity: 0, transformPerspective: 1700, transformOrigin: '50% 100%' }, { rotationX: 0, y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, 1.0);
// sections fly in from different directions and snap into place
const fly = (id, from, t, d) => tl.fromTo(q(id), Object.assign({ opacity: 0 }, from), { opacity: 1, x: 0, y: 0, scale: 1, duration: d || 0.55, ease: 'back.out(1.4)' }, t);
fly('#sites-logo', { y: -50, scale: 0.4 }, 2.0);
['#sites-n1', '#sites-n2', '#sites-n3'].forEach((s, i) => fly(s, { y: -40 }, 2.05 + i * 0.07));
fly('#sites-h1', { x: -120 }, 2.25); fly('#sites-h2', { x: -120 }, 2.33);
fly('#sites-p1', { x: -80 }, 2.45); fly('#sites-p2', { x: -80 }, 2.5);
fly('#sites-cta', { y: 40, scale: 0.7 }, 2.6);
fly('#sites-himg', { x: 140, scale: 0.85 }, 2.4, 0.7);
['#sites-s1', '#sites-s2', '#sites-s3'].forEach((s, i) => fly(s, { y: 90 }, 2.9 + i * 0.12));
['#sites-g1', '#sites-g2', '#sites-g3'].forEach((s, i) => fly(s, { scale: 0.3 }, 3.1 + i * 0.1));
['#sites-f1', '#sites-f2', '#sites-f3', '#sites-fb'].forEach((s, i) => fly(s, { y: 40 }, 3.4 + i * 0.08));
tl.to(q('#sites-call'), { scale: 1, duration: 0.5, ease: 'back.out(2)' }, 3.8);
tl.to(q('#sites-call'), { scale: 1.12, duration: 0.5, ease: 'sine.inOut', yoyo: true, repeat: 3, transformOrigin: '50% 50%' }, 4.4);
POSE('sites-m', 'cheer', 3.7);
// adapts to mobile
tl.fromTo(q('#sites-ph'), { opacity: 0, y: 140, rotationY: -40, transformPerspective: 1200 }, { opacity: 1, y: 0, rotationY: 0, duration: 0.8, ease: 'power3.out' }, 4.15);
// she steps up to the call-to-action and taps it
POSE('sites-m', 'wave', 4.9);
const tHop = HOP('sites-m', 4.95, 150, 0, 50, 0.35);
POSE('sites-m', 'wink', 5.45);
tl.fromTo(q('#sites-ripple'), { scaleX: 1, scaleY: 1, opacity: 0.9 }, { scaleX: 1.5, scaleY: 2.2, opacity: 0, duration: 0.7, ease: 'power2.out', immediateRender: false }, 5.5);
tl.to(q('#sites-cta'), { scale: 1.08, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out' }, 5.5);
tl.to(q('#sites-cta'), { boxShadow: '0 0 60px 14px rgba(70,140,255,.75)', duration: 0.3, ease: 'power2.out' }, 5.5);
tl.to(q('#sites-toast'), { opacity: 1, y: 0, duration: 0.55, ease: 'back.out(1.6)' }, 5.75);
tl.fromTo(q('#sites-toast b'), { scale: 0.6 }, { scale: 1, duration: 0.5, ease: 'elastic.out(1,0.4)' }, 5.85);
// camera crosses the screen; the page turns into a search network
rig.style.transformOrigin = '1140px 380px';
tl.to(rig, { scale: 1.9, duration: 1.1, ease: 'power2.in' }, 6.1);
tl.to(qa('#sites-secs > *, #sites-bw, #sites-ph, #sites-call, #sites-toast, #sites-plat'), { opacity: 0, duration: 0.5, ease: 'power1.in' }, 6.6);
tl.to(m, { opacity: 0, duration: 0.4 }, 6.6);
tl.to(qa('#sites-net .nl'), { opacity: 1, strokeDashoffset: 0, duration: 0.8, stagger: 0.04, ease: 'power2.out' }, 6.6);
tl.to(qa('#sites-net .nn'), { opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: 'back.out(2)' }, 6.7);
TITLE(1.1, 5.4);
ZOOM_OUT(960, 450, 1.0);
`,
  };
};
