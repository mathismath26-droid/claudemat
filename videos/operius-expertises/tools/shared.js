const q = (s) => R.querySelector(s);
const qa = (s) => Array.from(R.querySelectorAll(s));
const POSE = (id, name, t) => {
  qa('#' + id + ' img').forEach((i) => tl.set(i, { opacity: i.dataset.pose === name ? 1 : 0 }, t));
};
// jump: squash, stretch, arc, land. Returns end time.
const HOP = (id, t, dx, dy, h, dur) => {
  const m = q('#' + id), b = q('#' + id + ' .mb');
  tl.to(b, { scaleY: 0.86, scaleX: 1.1, duration: 0.14, ease: 'power2.out' }, t);
  tl.to(b, { scaleY: 1.1, scaleX: 0.93, duration: 0.14, ease: 'power2.out' }, t + 0.14);
  tl.to(m, { x: '+=' + dx, duration: dur, ease: 'none' }, t + 0.14);
  tl.to(m, { y: '+=' + (dy - h), duration: dur * 0.5, ease: 'power2.out' }, t + 0.14);
  tl.to(m, { y: '+=' + h, duration: dur * 0.5, ease: 'power2.in' }, t + 0.14 + dur * 0.5);
  tl.to(b, { scaleY: 0.88, scaleX: 1.08, duration: 0.1, ease: 'power2.in' }, t + 0.14 + dur);
  tl.to(b, { scaleY: 1, scaleX: 1, duration: 0.3, ease: 'elastic.out(1,0.5)' }, t + 0.24 + dur);
  return t + 0.54 + dur;
};
const IDLE = (id, t0, t1, amp) => {
  const b = q('#' + id + ' .mb');
  const per = 1.1, n = Math.max(1, Math.floor((t1 - t0) / per / 2));
  tl.to(b, { y: -(amp || 6), duration: per, ease: 'sine.inOut', yoyo: true, repeat: n * 2 - 1 }, t0);
};
const FLOATS = () => {
  qa('.dc').forEach((el, i) => {
    const a = +el.dataset.a || 14, d = +el.dataset.d || 3 + (i % 3), r = +el.dataset.r || 0;
    const n = Math.max(2, Math.round(D / d / 2) * 2);
    tl.to(el, { y: '+=' + a, rotation: '+=' + r, duration: d, ease: 'sine.inOut', yoyo: true, repeat: n - 1 }, 0);
  });
  qa('.pt').forEach((el, i) => {
    const a = 20 + (i % 5) * 9, d = 2.4 + (i % 4) * 0.7;
    tl.fromTo(el, { opacity: 0.2 }, { opacity: 1, y: '-=' + a, duration: d, ease: 'sine.inOut', yoyo: true, repeat: Math.max(1, Math.round(D / d / 2) * 2 - 1) }, (i % 7) * 0.2);
  });
};
const PORTAL_IN = (dur) => {
  dur = dur || 0.9;
  tl.fromTo(q('.portal'), { clipPath: 'circle(0% at 50% 52%)' }, { clipPath: 'circle(80% at 50% 52%)', duration: dur, ease: 'power3.inOut' }, 0);
  tl.fromTo(q('.cam'), { scale: 1.6 }, { scale: 1, duration: dur + 0.5, ease: 'power3.out' }, 0);
};
const ZOOM_OUT = (ox, oy, dur) => {
  dur = dur || 0.95;
  q('.cam').style.transformOrigin = ox + 'px ' + oy + 'px';
  tl.to(q('.cam'), { scale: 2.1, duration: dur, ease: 'power3.in' }, D - dur);
  tl.to(q('.portal'), { opacity: 0, duration: 0.3, ease: 'none' }, D - 0.3);
};
const TITLE = (t, hold) => {
  const bar = q('.tt-bar');
  tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, t);
  qa('.tt .mi').forEach((el, i) => tl.fromTo(el, { yPercent: 115 }, { yPercent: 0, duration: 0.7, ease: 'power3.out' }, t + 0.1 + i * 0.14));
  qa('.tt .mi').forEach((el, i) => tl.to(el, { yPercent: -115, duration: 0.45, ease: 'power2.in' }, t + hold + i * 0.06));
  tl.to(bar, { scaleX: 0, transformOrigin: 'right center', duration: 0.4, ease: 'power2.in' }, t + hold);
};
