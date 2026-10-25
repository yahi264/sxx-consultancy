/* ==========================================================================
   SXX Consultancy — premium effects
   Particle hero, scroll-lit statement, horizontal services, counters,
   custom cursor, magnetic buttons, page curtain and scroll progress.
   ========================================================================== */
(() => {
  const q = (s, el = document) => el.querySelector(s);
  const qa = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const mouse = { x: -9999, y: -9999 };
  addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  /* ---------- intro counter, then reveal ---------- */
  const intro = q('#intro'), count = q('#introCount');
  let n = 0;
  const tick = () => { n = Math.min(100, n + 3 + Math.random() * 6); if (count) count.textContent = String(Math.floor(n)).padStart(2, '0'); if (n < 100) setTimeout(tick, 28); };
  tick();
  const ready = () => document.body.classList.add('ready');
  if (reduce || !intro) ready();
  else new MutationObserver((m, o) => { if (intro.classList.contains('done')) { ready(); o.disconnect(); } }).observe(intro, { attributes: true });

  /* ---------- page curtain ---------- */
  const curtain = q('#curtain');
  function playCurtain(cb) {
    if (reduce || !curtain) { cb && cb(); return; }
    curtain.classList.remove('out'); curtain.classList.add('in');
    setTimeout(() => { cb && cb(); curtain.classList.remove('in'); curtain.classList.add('out'); setTimeout(() => curtain.classList.remove('out'), 650); }, 450);
  }
  let lastRoute = location.hash.split('?')[0];
  addEventListener('hashchange', () => {
    const r = location.hash.split('?')[0];
    if (r.split('#')[1] === lastRoute.split('#')[1] || !r.startsWith('#/')) { lastRoute = r; return; }
    lastRoute = r;
    if (!reduce && curtain) { curtain.classList.remove('in'); curtain.classList.add('out'); setTimeout(() => curtain.classList.remove('out'), 650); }
  });

  /* ---------- scroll progress + header state ---------- */
  const bar = q('#progress'), hdr = q('#hdr');
  function onScroll() {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    const cine = q('.cine');
    document.body.classList.toggle('over-hero', !!cine && scrollY < cine.offsetHeight - 90);
    stmt(); hscroll();
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { sizeH(); onScroll(); });

  /* ---------- custom cursor ---------- */
  const cur = q('#cursor');
  if (cur && fine && !reduce) {
    document.body.classList.add('has-cursor');
    const ring = q('.cursor-ring', cur), dot = q('.cursor-dot', cur);
    let rx = 0, ry = 0;
    const loop = () => { rx += (mouse.x - rx) * 0.18; ry += (mouse.y - ry) * 0.18; ring.style.transform = `translate(${rx}px, ${ry}px)`; dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`; requestAnimationFrame(loop); };
    loop();
    document.addEventListener('pointerover', (e) => { cur.classList.toggle('big', !!e.target.closest('a, button, input, select, textarea, label, [data-ai]')); });
    document.addEventListener('pointerdown', () => cur.classList.add('down'));
    document.addEventListener('pointerup', () => cur.classList.remove('down'));
    document.addEventListener('pointerleave', () => cur.classList.add('hide'));
    document.addEventListener('pointerenter', () => cur.classList.remove('hide'));
  }

  /* ---------- magnetic buttons ---------- */
  function magnets() {
    if (!fine || reduce) return;
    qa('.mag').forEach((el) => {
      if (el.dataset.mag) return; el.dataset.mag = 1;
      el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2); el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`; });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- scroll-lit statement ---------- */
  function stmt() {
    const p = q('#stmt'); if (!p) return;
    const r = p.getBoundingClientRect(), words = p.children;
    const prog = clamp((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35));
    const lit = Math.round(prog * words.length);
    for (let i = 0; i < words.length; i++) words[i].classList.toggle('on', i < lit);
  }

  /* ---------- horizontal services ---------- */
  const wide = () => matchMedia('(min-width: 980px)').matches && !reduce;
  function sizeH() {
    const sec = q('#hsc'), track = q('#hscTrack'); if (!sec || !track) return;
    if (!wide()) { sec.style.height = ''; track.style.transform = ''; return; }
    const extra = Math.max(0, track.scrollWidth - innerWidth + 80);
    sec.style.height = `${innerHeight + extra}px`;
  }
  function hscroll() {
    const sec = q('#hsc'), track = q('#hscTrack'); if (!sec || !track || !wide()) return;
    const r = sec.getBoundingClientRect(), dist = sec.offsetHeight - innerHeight;
    const p = clamp(-r.top / (dist || 1));
    const extra = Math.max(0, track.scrollWidth - innerWidth + 80);
    track.style.transform = `translate3d(${-p * extra}px, 0, 0)`;
    const b = q('#hscBar'); if (b) b.style.transform = `scaleX(${p})`;
    const no = q('#hscNo'); if (no) no.textContent = String(Math.min(SERVICES.length, Math.floor(p * (SERVICES.length + 0.999)) + 1)).padStart(2, '0');
  }

  /* ---------- counters ---------- */
  function counters() {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      const el = e.target, end = +el.dataset.count, t0 = performance.now();
      const step = (now) => { const k = clamp((now - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: 0.4 });
    qa('[data-count]').forEach((el) => io.observe(el));
  }

  /* ---------- particle hero: a talent cloud that assembles into an organization ---------- */
  let raf;
  function stars() {
    cancelAnimationFrame(raf);
    const cv = q('#stars'); if (!cv) return;
    const ctx = cv.getContext('2d');
    let W = 0, H = 0, P = [], mode = 'cloud', modeT = 0, nodes = [], links = [];
    const roles = lang === 'tr'
      ? ['GENEL MÜDÜR', 'OPERASYON', 'FİNANS', 'SATIŞ', 'PLANLAMA', 'ÜRETİM', 'KONTROL', 'İK', 'TEKNİK SATIŞ', 'BÖLGE']
      : ['CEO', 'OPERATIONS', 'FINANCE', 'SALES', 'PLANNING', 'PRODUCTION', 'CONTROL', 'HR', 'TECH SALES', 'REGIONAL'];
    let open = 4 + Math.floor(Math.random() * 6), filled = 0;
    function layout() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.offsetWidth; H = cv.offsetHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const mob = W < 900;
      const ox = mob ? W * 0.5 : W * 0.73, oy = mob ? H * 0.62 : H * 0.5, sw = mob ? W * 0.9 : Math.min(W * 0.46, 640), sh = mob ? H * 0.42 : Math.min(H * 0.62, 470);
      const at = (fx, fy) => [ox + (fx - 0.5) * sw, oy + (fy - 0.5) * sh];
      nodes = [at(.5, .06), at(.17, .5), at(.5, .5), at(.83, .5), at(.08, .94), at(.26, .94), at(.42, .94), at(.58, .94), at(.74, .94), at(.92, .94)];
      links = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [2, 7], [3, 8], [3, 9]];
      const count = mob ? 90 : 170;
      const targets = [];
      nodes.forEach(([x, y], i) => { const k = i === 0 ? 12 : 9, r = i === 0 ? 15 : 11; for (let j = 0; j < k; j++) { const a = (j / k) * Math.PI * 2; targets.push([x + Math.cos(a) * r, y + Math.sin(a) * r, i]); } });
      const rest = count - targets.length;
      for (let j = 0; j < rest; j++) { const [a, b] = links[j % links.length]; const [x1, y1] = nodes[a], [x2, y2] = nodes[b]; const f = ((Math.floor(j / links.length) + 1) / (Math.ceil(rest / links.length) + 1)); const my = (y1 + y2) / 2; const pts = [[x1, y1], [x1, my], [x2, my], [x2, y2]]; const segIdx = f < .33 ? 0 : f < .66 ? 1 : 2; const lf = (f - segIdx * .33) / .33; const [sx, sy] = pts[segIdx], [ex, ey] = pts[segIdx + 1]; targets.push([sx + (ex - sx) * lf, sy + (ey - sy) * lf, -1]); }
      P = targets.map(([tx, ty, node], i) => {
        const old = P[i];
        return { x: old ? old.x : Math.random() * W, y: old ? old.y : Math.random() * H, vx: 0, vy: 0, ox: tx, oy: ty, node, cx: Math.random() * W, cy: Math.random() * H, ph: Math.random() * 6.28, s: 0.8 + Math.random() * 1.4, g: Math.random() < 0.28 };
      });
    }
    layout();
    addEventListener('resize', () => q('#stars') && layout());
    const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    let t = 0;
    function draw() {
      if (!document.body.contains(cv)) return;
      t += 1; modeT += 1;
      if (mode === 'cloud' && modeT > 200) { mode = 'org'; modeT = 0; filled = 0; }
      else if (mode === 'org' && modeT > 520) { mode = 'cloud'; modeT = 0; let o; do { o = 4 + Math.floor(Math.random() * 6); } while (o === open); open = o; }
      if (mode === 'org' && modeT > 230) filled = Math.min(1, filled + 0.02);
      ctx.clearRect(0, 0, W, H);
      const rect = cv.getBoundingClientRect(), mx = mouse.x - rect.left, my = mouse.y - rect.top;
      for (const p of P) {
        let tx, ty;
        if (mode === 'org') { tx = p.ox; ty = p.oy; if (p.node === open && filled < 1) { tx = p.cx * 0.15 + p.ox * 0.85 + Math.sin(t * .02 + p.ph) * 26; ty = p.oy + 40 + Math.cos(t * .02 + p.ph) * 20; } }
        else { p.cx += Math.sin(t * 0.004 + p.ph) * 0.35; p.cy += Math.cos(t * 0.005 + p.ph) * 0.35; tx = p.cx; ty = p.cy; if (p.cx < 0 || p.cx > W) p.cx = Math.random() * W; if (p.cy < 0 || p.cy > H) p.cy = Math.random() * H; }
        p.vx += (tx - p.x) * (mode === 'org' ? 0.022 : 0.006); p.vy += (ty - p.y) * (mode === 'org' ? 0.022 : 0.006);
        const dx = p.x - mx, dy = p.y - my, d2 = dx * dx + dy * dy;
        if (d2 < 14000) { const f = (14000 - d2) / 14000 * 2.2; const d = Math.sqrt(d2) || 1; p.vx += dx / d * f; p.vy += dy / d * f; }
        p.vx *= 0.86; p.vy *= 0.86; p.x += p.vx; p.y += p.vy;
      }
      const gold = '205,174,116';
      // constellation links
      ctx.lineWidth = 0.6;
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const a = P[i], b = P[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < 3600) { ctx.strokeStyle = `rgba(${gold},${(1 - d2 / 3600) * (mode === 'org' ? 0.32 : 0.18)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      // org skeleton fades in once assembled
      const show = mode === 'org' ? clamp((modeT - 60) / 80) : clamp(1 - modeT / 40);
      if (show > 0) {
        ctx.save(); ctx.globalAlpha = show * 0.55; ctx.strokeStyle = `rgb(${gold})`; ctx.lineWidth = 1; ctx.setLineDash([2, 5]); ctx.lineDashOffset = -t * 0.3;
        links.forEach(([a, b]) => { const [x1, y1] = nodes[a], [x2, y2] = nodes[b], m = (y1 + y2) / 2; ctx.beginPath(); ctx.moveTo(x1, y1 + 16); ctx.lineTo(x1, m); ctx.lineTo(x2, m); ctx.lineTo(x2, y2 - 14); ctx.stroke(); });
        ctx.restore();
        ctx.save(); ctx.font = `700 ${W < 900 ? 8 : 9.5}px Manrope, sans-serif`; ctx.textAlign = 'center'; ctx.letterSpacing = '2px';
        nodes.forEach(([x, y], i) => {
          const isOpen = i === open;
          ctx.globalAlpha = show * (isOpen ? 1 : 0.7);
          ctx.fillStyle = isOpen ? `rgb(${gold})` : 'rgba(244,239,228,.75)';
          ctx.fillText(isOpen ? (filled >= 1 ? '✓ ' + roles[i] : (lang === 'tr' ? 'AÇIK POZİSYON' : 'OPEN ROLE')) : roles[i], x, y + (i === 0 ? 34 : 28));
          if (isOpen && filled > 0) { ctx.globalAlpha = show * (1 - filled) * 0.8 + 0.2 * show; ctx.beginPath(); ctx.arc(x, y, 14 + filled * 18, 0, 7); ctx.strokeStyle = `rgba(${gold},${0.8 * (1 - filled * 0.6)})`; ctx.lineWidth = 1.2; ctx.stroke(); }
        });
        ctx.restore();
      }
      // particles
      for (const p of P) {
        const glow = mode === 'org' && p.node === open && filled >= 1;
        ctx.beginPath(); ctx.arc(p.x, p.y, glow ? p.s * 1.6 : p.s, 0, 7);
        ctx.fillStyle = p.g || glow ? `rgba(${gold},${glow ? 1 : 0.9})` : 'rgba(244,239,228,.7)'; ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- public ---------- */
  window.FX = {
    mount() { stars(); magnets(); counters(); sizeH(); onScroll(); },
    curtain: playCurtain,
  };
  window.FX.mount();
})();
