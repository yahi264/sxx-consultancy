/* ==========================================================================
   SXX Consultancy — single-page app (hash routing, works from file:// too)
   ========================================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $('#app');

let lang = 'tr';
try { lang = localStorage.getItem('sxc-lang') || 'tr'; } catch (e) {}
if (!I18N[lang]) lang = 'tr';
const t = (k) => I18N[lang][k] ?? I18N.tr[k] ?? k;
const L = (o) => (o && typeof o === 'object' && !Array.isArray(o) ? (o[lang] ?? o.tr) : o);
const tr = () => lang === 'tr';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const money = (n) => new Intl.NumberFormat(tr() ? 'tr-TR' : 'en-US', { maximumFractionDigits: 0 }).format(Math.round(n)) + ' ₺';

/* ---------------- Icons ---------------- */
const I = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s8-7.4 8-13a8 8 0 0 0-16 0c0 5.6 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>',
  cal: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  scan: '<svg viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10M12 7v10"/></svg>',
  org: '<svg viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>',
  flow: '<svg viewBox="0 0 24 24"><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7.5 6h9M6 8.3l4.8 7.6M18 8.3l-4.8 7.6"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/></svg>',
  hand: '<svg viewBox="0 0 24 24"><path d="M11 17l-2 2a2 2 0 0 1-3-3l4-4"/><path d="m13 7 2-2a2 2 0 0 1 3 3l-4 4M8 12l4 4M10 10l4 4M12 8l4 4"/></svg>',
  db: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  cookie: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9 4 4 0 0 0 4 4 4 4 0 0 0 5 5z"/><circle cx="8.5" cy="10.5" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="15.5" cy="13" r="1"/></svg>',
  scale: '<svg viewBox="0 0 24 24"><path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a4 4 0 0 0 6 0zM19 7l-3 7a4 4 0 0 0 6 0z"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  calc: '<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h8"/></svg>',
  q: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/></svg>',
  ai: '<svg viewBox="0 0 24 24"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" class="f"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" class="f"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
};
const LOGO = `<svg class="logo-svg" viewBox="0 0 214 40" role="img" aria-label="SXX Consultancy">
  <g class="lg-mark"><path d="M20 7v8M10 27v-5h20v5M20 15v7" fill="none" stroke-width="1.8" stroke-linecap="round"/><circle cx="20" cy="6" r="4" class="lg-top"/><circle cx="10" cy="31" r="4"/><circle cx="30" cy="31" r="4"/></g>
  <text x="44" y="26" class="lg-word">SXX</text><text x="112" y="25" class="lg-sub">CONSULTANCY</text></svg>`;
const FLAGS = {
  tr: '<svg class="flag" viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="30" height="20" fill="#E30A17"/><circle cx="11" cy="10" r="5" fill="#fff"/><circle cx="12.25" cy="10" r="4" fill="#E30A17"/><polygon fill="#fff" points="13.20,10.00 14.83,9.44 14.86,7.72 15.89,9.10 17.54,8.59 16.55,10.00 17.54,11.41 15.89,10.90 14.86,12.28 14.83,10.56"/></svg>',
  en: '<svg class="flag" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="2.5"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>',
};

/* ---------------- Shared pieces ---------------- */
function pageHead(title, crumbs = [], lead = '', kicker = '') {
  const bc = [[t('home'), '#/'], ...crumbs].map(([n, h], i, a) => (i < a.length - 1 && h ? `<a href="${h}">${esc(n)}</a>` : `<span>${esc(n)}</span>`)).join('<i>/</i>');
  return `<section class="phead"><div class="wrap"><nav class="crumbs">${bc}</nav>${kicker ? `<span class="kicker">${kicker}</span>` : ''}<h1>${title}</h1>${lead ? `<p>${lead}</p>` : ''}</div><div class="phead-orn" aria-hidden="true"></div></section>`;
}
const cta = () => `<section class="cta"><div class="wrap cta-in rv"><div><h2>${t('ctaTitle')}</h2><p>${t('ctaLead')}</p></div>
  <div class="acts"><a class="btn btn-light" href="#/randevu">${I.cal} ${t('book')}</a><a class="btn btn-line" href="#/hr-health-scan">${t('scan')} ${I.arrow}</a></div></div></section>`;
function field(f) {
  const lbl = (f.label || t(f.k)) + (f.req ? ' *' : '');
  const c = f.full ? 'full' : '';
  if (f.type === 'textarea') return `<label class="${c}">${lbl}<textarea id="f-${f.k}" name="${f.k}" rows="4" ${f.req ? 'required' : ''}></textarea></label>`;
  if (f.type === 'select') return `<label class="${c}">${lbl}<select id="f-${f.k}" name="${f.k}">${f.options.map((o) => `<option>${esc(o)}</option>`).join('')}</select></label>`;
  if (f.type === 'consent') return `<label class="consent full"><input type="checkbox" id="f-${f.k}" name="${f.k}" required><span>${t('consent')} <a href="#/yasal/kvkk">KVKK</a> · <a href="#/yasal/acik-riza">${tr() ? 'Açık Rıza' : 'Consent'}</a></span></label>`;
  return `<label class="${c}">${lbl}<input id="f-${f.k}" name="${f.k}" type="${f.type || 'text'}" ${f.accept ? `accept="${f.accept}"` : ''} ${f.req ? 'required' : ''}></label>`;
}
const form = (id, fields, title, btn) => `<form class="frm rv" id="${id}" novalidate>${title ? `<h3>${title}</h3>` : ''}<div class="frm-grid">${fields.map(field).join('')}</div>
  <button class="btn btn-main full" type="submit">${btn || t('send')} ${I.arrow}</button><p class="frm-msg" role="status"></p></form>`;
function articleCard(a, big) {
  return `<a class="art rv ${big ? 'big' : ''}" href="#/makale/${a.id}"><span class="art-cat">${L(a.cat)}</span><h3>${L(a.title)}</h3><p>${L(a.lead)}</p>
    <span class="art-meta">${a.mins} ${t('minRead')} <b>${t('readMore')} ${I.arrow}</b></span></a>`;
}

/* ==========================================================================
   Pages
   ========================================================================== */
const ROUTES = {
  '': home,
  hizmetler: servicesPage,
  isverenler: employersPage,
  adaylar: candidatesPage,
  hakkimizda: aboutPage,
  icgoruler: () => pageHead(tr() ? 'İçgörüler & <i>Perspektifler</i>' : 'Insights & <i>Perspectives</i>', [[t('insights')]], tr() ? 'Yetenek yönetimi, işe alım stratejileri ve sektör dinamiklerine dair sahadan gözlemlerimiz.' : 'Field observations on talent management, recruitment strategy and industry dynamics.') +
    `<section class="sec"><div class="wrap arts">${ARTICLES.map((a, i) => articleCard(a, i === 0)).join('')}</div></section>${cta()}`,
  makale: (q, id) => articlePage(id),
  'hr-health-scan': scanPage,
  maliyet: calcPage,
  randevu: bookingPage,
  iletisim: contactPage,
  yasal: (q, id) => legalPage(id),
};

/* ---------------- Home ---------------- */
function home() {
  const T = tr();
  const lines = T ? ['Güçlü yapılar.', '<i>Doğru yetenek.</i>', 'Kurumsal netlik.'] : ['Strong structures.', '<i>The right talent.</i>', 'Corporate clarity.'];
  const words = T ? ['Executive Search', 'Organizasyon', 'Yetenek', 'Netlik', 'Stratejik İşe Alım', 'Dönüşüm'] : ['Executive Search', 'Organization', 'Talent', 'Clarity', 'Strategic Hiring', 'Transformation'];
  const facts = T
    ? [['45', 'dk', 'HR Health Scan görüşmesi'], ['12', 'soru', 'Ücretsiz ön değerlendirme'], ['2', 'yıl', 'Azami aday verisi saklama'], ['0', '₺', 'Adaylardan alınan ücret']]
    : [['45', 'min', 'HR Health Scan meeting'], ['12', 'questions', 'Free self-assessment'], ['2', 'years', 'Maximum candidate data retention'], ['0', '₺', 'Fee charged to candidates']];
  return `
  <section class="cine">
    <canvas id="stars" aria-hidden="true"></canvas>
    <div class="cine-glow" aria-hidden="true"></div>
    <div class="wrap cine-in">
      <div class="cine-copy">
        <span class="kicker fx-up">${t('heroKicker')}</span>
        <h1 class="cine-title">${lines.map((l, i) => `<span class="ln"><span style="--d:${0.15 + i * 0.12}s">${l}</span></span>`).join('')}</h1>
        <p class="lead fx-up" style="--d:.55s">${t('heroLead')}</p>
        <div class="acts fx-up" style="--d:.7s"><a class="btn btn-main mag" href="#/randevu">${I.cal} ${t('heroCta')}</a><a class="btn btn-glass mag" href="#/hr-health-scan#test">${I.scan} ${t('heroCta2')}</a></div>
        <button class="hero-ai fx-up mag" style="--d:.85s" data-ai><span class="hero-ai-av">${I.ai}</span><span><b>${T ? 'AI Asistan' : 'AI Assistant'}</b><small>${T ? 'İş tanımı, mülakat soruları veya hizmet önerisi isteyin' : 'Ask for a job description, interview questions or advice'}</small></span>${I.arrow}</button>
      </div>
    </div>
    <div class="wrap cine-foot">
      <span class="cine-meta">${T ? 'Butik danışmanlık · Aynı anda sınırlı sayıda kurum' : 'Boutique consultancy · A limited number of clients at a time'}</span>
      <span class="cine-scroll"><i></i>${T ? 'Keşfedin' : 'Scroll'}</span>
      <span class="cine-meta right">TR · EN</span>
    </div>
  </section>

  <section class="band2" aria-hidden="true"><div class="band2-track">${[0, 1].map(() => words.map((w, i) => `<span class="${i % 2 ? 'solid' : ''}">${w}</span><em>✦</em>`).join('')).join('')}</div></section>

  <section class="statement"><div class="wrap">
    <span class="kicker">${T ? 'Yaklaşımımız' : 'Our approach'}</span>
    <p class="stmt" id="stmt">${(t('approach')[0] + ' ' + t('approach')[1]).split(' ').map((w) => `<span>${w}</span>`).join(' ')}</p>
  </div></section>

  <section class="sec probs2"><div class="wrap">
    <div class="sec-head rv"><span class="kicker">${T ? 'Problemler' : 'Problems'}</span><h2>${t('problemsTitle')}</h2></div>
    <ol class="plist">${t('problems').map(([h, p], i) => `<li class="rv"><span class="pl-no">0${i + 1}</span><h3>${h}</h3><p>${p}</p><span class="pl-arrow">${I.arrow}</span></li>`).join('')}</ol>
  </div></section>

  <section class="hsc" id="hsc">
    <div class="hsc-pin">
      <div class="wrap hsc-head"><span class="kicker">${t('services')}</span><h2>${t('servicesTitle')}</h2><span class="hsc-count"><b id="hscNo">01</b> / 0${SERVICES.length}</span></div>
      <div class="hsc-track" id="hscTrack">${SERVICES.map((s, i) => `<article class="hsc-card">
        <span class="hsc-num">0${i + 1}</span><span class="svc-ico">${I[s.icon]}</span>
        <h3>${L(s.title)}</h3><p>${L(s.long)}</p><div class="svc-out">${I.check} ${L(s.outcome)}</div>
        <a class="link-arrow" href="#/hizmetler" data-jump="s-${s.id}">${T ? 'Detaylar' : 'Details'} ${I.arrow}</a></article>`).join('')}
        <article class="hsc-card end"><h3>${T ? 'Hangisi size uygun?' : 'Which one fits you?'}</h3><p>${t('scanTeaser')}</p><a class="btn btn-main" href="#/hr-health-scan#test">${T ? 'Ön değerlendirmeye başla' : 'Start the self-assessment'} ${I.arrow}</a></article>
      </div>
      <div class="wrap hsc-bar"><i id="hscBar"></i></div>
    </div>
  </section>

  <section class="sec facts"><div class="wrap facts-grid">${facts.map(([n, u, l]) => `<div class="fact rv"><b><span data-count="${n}">0</span><small>${u}</small></b><span>${l}</span></div>`).join('')}</div></section>

  <section class="sec ink stack-sec"><div class="wrap">
    <div class="sec-head rv"><span class="kicker">${T ? 'Süreç' : 'Process'}</span><h2>${t('howTitle')}</h2><p>${t('howLead')}</p></div>
    <div class="stack">${t('how').map(([h, p], i) => `<article class="stack-card" style="--i:${i}"><span class="how-no">${['I', 'II', 'III'][i]}</span><div><h3>${h}</h3><p>${p}</p></div><span class="stack-step">${T ? 'Adım' : 'Step'} ${i + 1} / 3</span></article>`).join('')}</div>
  </div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-head rv"><span class="kicker">${T ? 'Araçlar' : 'Tools'}</span><h2>${t('toolsTitle')}</h2><p>${t('toolsLead')}</p></div>
    <div class="tools">
      <a class="tool rv" href="#/hr-health-scan#test"><span class="tool-ico">${I.scan}</span><span class="kicker">HR Health Scan</span><h3>${T ? 'Organizasyon sağlık testi' : 'Organizational health check'}</h3><p>${t('scanTeaser')}</p>
        <span class="tool-viz">${radarSVG([82, 55, 68, 40], true)}</span><span class="btn btn-main">${T ? 'Teste başla' : 'Start the check'} ${I.arrow}</span></a>
      <a class="tool rv" href="#/maliyet"><span class="tool-ico">${I.calc}</span><span class="kicker">${T ? 'Hesaplayıcı' : 'Calculator'}</span><h3>${t('calc')}</h3><p>${t('calcTeaser')}</p>
        <span class="tool-num"><small>${T ? 'Örnek' : 'Example'}</small><b>${money(612000)}</b><small>${T ? '60.000 ₺ maaşlı bir rolde 6 ayda' : 'for a 60,000 ₺/month role over 6 months'}</small></span><span class="btn btn-ghost">${T ? 'Hesapla' : 'Calculate'} ${I.arrow}</span></a>
    </div>
  </div></section>

  <section class="sec alt"><div class="wrap">
    <div class="sec-head row rv"><div><span class="kicker">${t('insights')}</span><h2>${t('insightsTitle')}</h2><p>${t('insightsLead')}</p></div><a class="btn btn-ghost" href="#/icgoruler">${t('insights')} ${I.arrow}</a></div>
    <div class="arts">${ARTICLES.map((a, i) => articleCard(a, i === 0)).join('')}</div>
  </div></section>

  <section class="quote-sec"><div class="wrap quote-in rv">
    <span class="quote-mark" aria-hidden="true">“</span>
    <blockquote>${t('founderQuote')}</blockquote>
    <span class="founder-role">— ${t('founderRole')}</span>
  </div></section>

  <section class="finale"><div class="wrap finale-in">
    <h2 class="rv">${T ? 'Doğru yetenek,<br><i>doğru yapıda.</i>' : 'The right talent,<br><i>in the right structure.</i>'}</h2>
    <a class="orb mag rv" href="#/randevu"><span>${t('book')}</span>${I.arrow}</a>
  </div></section>`;
}

/* ---------------- Services / employers / candidates / about ---------------- */
function servicesPage() {
  return pageHead(tr() ? 'Hizmetlerimiz' : 'Our <i>services</i>', [[t('services')]], tr() ? 'Kurumların organizasyon yapılarını güçlendirmelerine ve insan kaynakları süreçlerini daha etkin hale getirmelerine destek oluyoruz.' : 'We help organizations strengthen their structures and make HR processes more effective.') + `
  <section class="sec"><div class="wrap">${SERVICES.map((s, i) => `<article class="svc-row rv" id="s-${s.id}">
    <div class="svc-row-l"><span class="svc-big">0${i + 1}</span><span class="svc-ico">${I[s.icon]}</span></div>
    <div><h2>${L(s.title)}</h2><p class="lead-p">${L(s.long)}</p><div class="svc-out big">${I.check} ${L(s.outcome)}</div>
      <div class="acts"><a class="btn btn-main" href="#/randevu">${t('book')} ${I.arrow}</a><button class="btn btn-ghost" data-ai="${esc(L(s.title))}">${I.ai} ${t('askAI')}</button></div></div></article>`).join('')}</div></section>${cta()}`;
}
function employersPage() {
  const p = PAGES.employers;
  return pageHead(tr() ? 'Kurumlar <i>için</i>' : 'For <i>employers</i>', [[t('employers')]]) + `
  <section class="sec"><div class="wrap split">
    <div class="rv">${p[lang].map((x, i) => `<p class="${i ? 'muted' : 'lead-p'}">${x}</p>`).join('')}
      <div class="note-box"><small>${tr() ? 'Yaklaşımımız' : 'Our approach'}</small>${t('approach')[0]} ${tr() ? 'Bu nedenle çalışmaya her zaman organizasyon yapısını ve ihtiyaçları anlamakla başlarız.' : 'That\'s why we always start by understanding the structure and its needs.'}</div></div>
    <div class="rv"><h3 class="h3">${tr() ? 'Neler sunuyoruz?' : 'What we offer'}</h3><ul class="ticks">${L(p.offer).map((x) => `<li>${I.check}<span>${x}</span></li>`).join('')}</ul>
      <div class="tools mini"><a class="tool rv in" href="#/hr-health-scan#test"><span class="tool-ico">${I.scan}</span><h3>HR Health Scan</h3><p>${t('scanTeaser')}</p></a><a class="tool rv in" href="#/maliyet"><span class="tool-ico">${I.calc}</span><h3>${t('calc')}</h3><p>${t('calcTeaser')}</p></a></div></div>
  </div></section>
  <section class="sec alt"><div class="wrap narrow">${form('fEmp', [{ k: 'name', req: true }, { k: 'company', req: true }, { k: 'email', type: 'email', req: true }, { k: 'phone', type: 'tel' }, { k: 'role', label: tr() ? 'Aradığınız pozisyon' : 'Role you are hiring for', full: true }, { k: 'size', type: 'select', options: ['1–50', '51–200', '201–500', '500+'] }, { k: 'sector' }, { k: 'message', type: 'textarea', full: true }, { k: 'kvkk', type: 'consent' }], tr() ? 'Bize ihtiyacınızı anlatın' : 'Tell us what you need')}</div></section>`;
}
function candidatesPage() {
  const p = PAGES.candidates;
  return pageHead(tr() ? 'Adaylar <i>için</i>' : 'For <i>candidates</i>', [[t('candidates')]]) + `
  <section class="sec"><div class="wrap split">
    <div class="rv"><p class="lead-p">${p[lang][0]}</p><h3 class="h3">${tr() ? 'Başvuru süreci' : 'Application process'}</h3>
      <ol class="steps">${L(p.process).map((x, i) => `<li><b>${i + 1}</b><span>${x}</span></li>`).join('')}</ol>
      <div class="note-box gold"><small>${tr() ? 'Önemli bilgilendirme' : 'Important'}</small>${L(p.fee)}</div></div>
    ${form('fCand', [{ k: 'firstName', req: true }, { k: 'lastName', req: true }, { k: 'email', type: 'email', req: true }, { k: 'phone', type: 'tel', req: true }, { k: 'role' }, { k: 'linkedin', type: 'url' }, { k: 'cv', type: 'file', accept: '.pdf,.doc,.docx', req: true, full: true }, { k: 'kvkk', type: 'consent' }], tr() ? 'Başvuru' : 'Apply')}
  </div></section>`;
}
function aboutPage() {
  return pageHead(tr() ? 'Hakkımızda' : 'About <i>us</i>', [[t('about')]]) + `
  <section class="sec"><div class="wrap split">
    <div class="rv">${PAGES.about[lang].map((x, i) => `<p class="${i ? 'muted' : 'lead-p'}">${x}</p>`).join('')}</div>
    <div class="rv"><span class="kicker">${tr() ? 'Yaklaşımımız' : 'Our approach'}</span><h2 class="h2s">${t('approachTitle')}</h2><p class="muted">${t('approach')[1]}</p></div>
  </div></section>
  <section class="sec ink"><div class="wrap"><div class="sec-head rv"><span class="kicker">${tr() ? 'İlkeler' : 'Principles'}</span><h2>${tr() ? 'Çalışma <i>ilkelerimiz</i>' : 'How we <i>work</i>'}</h2></div>
    <div class="principles">${PAGES.principles.map(([ic, h, p]) => `<div class="pr rv"><span class="pr-ico">${I[ic]}</span><h3>${L(h)}</h3><p>${L(p)}</p></div>`).join('')}</div></div></section>
  <section class="sec"><div class="wrap founder rv"><div class="founder-mono" aria-hidden="true"><span>${I.user}</span></div>
    <div><span class="kicker">${t('founderTitle')}</span><blockquote>“${t('founderQuote')}”</blockquote><p>${t('founderText')}</p><b class="founder-role">${t('founderRole')}</b></div></div></section>${cta()}`;
}

/* ---------------- Articles ---------------- */
function articlePage(id) {
  const a = ARTICLES.find((x) => x.id === id);
  if (!a) return notFound();
  const others = ARTICLES.filter((x) => x.id !== id);
  const share = encodeURIComponent(L(a.title));
  return pageHead(L(a.title), [[t('insights'), '#/icgoruler'], [L(a.cat)]], L(a.lead), `${L(a.cat)} · ${a.mins} ${t('minRead')}`) + `
  <section class="sec"><div class="wrap article">
    <article class="prose rv">${L(a.body).map(([h, p]) => `${h ? `<h2>${h}</h2>` : ''}<p class="${h ? '' : 'lead-p'}">${p}</p>`).join('')}
      ${a.calc ? `<a class="inline-tool" href="#/maliyet"><span class="tool-ico">${I.calc}</span><span><b>${t('calc')}</b><small>${t('calcTeaser')}</small></span>${I.arrow}</a>` : ''}
      <div class="share"><span>${tr() ? 'Paylaş' : 'Share'}</span><a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}" target="_blank" rel="noopener" aria-label="LinkedIn">${I.linkedin}</a><a href="https://wa.me/?text=${share}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.whatsapp}</a></div>
    </article>
    <aside class="aside rv"><div class="aside-box"><span class="kicker">${t('founderRole')}</span><p>${t('founderQuote')}</p><a class="btn btn-main full" href="#/randevu">${t('book')}</a></div>
      ${others.map((o) => articleCard(o)).join('')}</aside>
  </div></section>${cta()}`;
}

/* ---------------- HR Health Scan (info + self-assessment) ---------------- */
function scanPage() {
  const s = PAGES.scan[lang];
  return pageHead('HR Health <i>Scan</i>', [[t('scan')]], s.intro, tr() ? '45 dakikalık değerlendirme' : '45-minute assessment') + `
  <section class="sec"><div class="wrap scan-info">
    <div class="rv"><h3 class="h3">${tr() ? 'Neleri değerlendiriyoruz?' : 'What we assess'}</h3><ul class="ticks">${s.what.map((x) => `<li>${I.check}<span>${x}</span></li>`).join('')}</ul></div>
    <div class="rv"><h3 class="h3">${tr() ? 'Kimler için uygun?' : 'Who it\'s for'}</h3><ul class="ticks">${s.who.map((x) => `<li>${I.check}<span>${x}</span></li>`).join('')}</ul></div>
    <div class="rv note-box"><small>${tr() ? 'Görüşme formatı' : 'Format'}</small>${s.format}<a class="btn btn-main" href="#/randevu?t=scan">${tr() ? 'HR Health Scan planlayın' : 'Schedule an HR Health Scan'} ${I.arrow}</a></div>
  </div></section>
  <section class="sec ink" id="test"><div class="wrap narrow">
    <div class="sec-head rv center"><span class="kicker">${tr() ? 'Ücretsiz ön değerlendirme' : 'Free self-assessment'}</span><h2>${tr() ? 'Organizasyonunuz ne kadar <i>sağlıklı?</i>' : 'How <i>healthy</i> is your organization?'}</h2><p>${tr() ? '12 ifadeyi kurumunuza göre yanıtlayın. Sonuçlar yalnızca tarayıcınızda hesaplanır.' : 'Answer 12 statements for your organization. Results are calculated only in your browser.'}</p></div>
    <div class="quiz rv" id="quiz"></div>
  </div></section>`;
}
let quizAns = [];
function renderQuiz() {
  const box = $('#quiz'); if (!box) return;
  const i = quizAns.length;
  if (i < SCAN_Q.length) {
    const [area, q] = SCAN_Q[i];
    const a = SCAN_AREAS.find((x) => x.id === area);
    box.innerHTML = `<div class="quiz-top"><span>${L(a.name)}</span><span>${i + 1} / ${SCAN_Q.length}</span></div><div class="quiz-bar"><i style="width:${(i / SCAN_Q.length) * 100}%"></i></div>
      <h3 class="quiz-q">${L(q)}</h3><div class="quiz-opts">${[[2, tr() ? 'Evet' : 'Yes'], [1, tr() ? 'Kısmen' : 'Partly'], [0, tr() ? 'Hayır' : 'No']].map(([v, n]) => `<button data-qv="${v}">${n}</button>`).join('')}</div>
      ${i ? `<button class="quiz-back" data-qback>← ${t('back')}</button>` : ''}`;
    return;
  }
  const scores = SCAN_AREAS.map((a) => { const qs = SCAN_Q.map((x, k) => [x[0], quizAns[k]]).filter((x) => x[0] === a.id); return Math.round((qs.reduce((s, x) => s + x[1], 0) / (qs.length * 2)) * 100); });
  const total = Math.round(scores.reduce((s, x) => s + x, 0) / scores.length);
  const level = total >= 75 ? (tr() ? 'Güçlü' : 'Strong') : total >= 50 ? (tr() ? 'Gelişime açık' : 'Room to grow') : (tr() ? 'Öncelikli iyileştirme' : 'Priority improvement');
  const weak = SCAN_AREAS.filter((a, k) => scores[k] < 70);
  const summary = (tr() ? 'HR Health Scan ön değerlendirme sonucum: ' : 'My HR Health Scan self-assessment: ') + `${total}/100 — ` + SCAN_AREAS.map((a, k) => `${L(a.name)} ${scores[k]}`).join(', ');
  box.innerHTML = `<div class="res">
    <div class="res-chart">${radarSVG(scores)}</div>
    <div><span class="kicker">${tr() ? 'Sonuç' : 'Result'}</span><div class="res-total"><b>${total}</b><span>/100</span></div><p class="res-level">${level}</p>
      <div class="res-bars">${SCAN_AREAS.map((a, k) => `<div><span>${L(a.name)}</span><i><em style="width:${scores[k]}%"></em></i><b>${scores[k]}</b></div>`).join('')}</div></div>
  </div>
  <div class="res-tips"><h3>${tr() ? 'Önerilerimiz' : 'Our recommendations'}</h3>${(weak.length ? weak : SCAN_AREAS.slice(0, 1)).map((a) => `<div class="tip"><b>${L(a.name)}</b><p>${L(SCAN_TIPS[a.id])}</p></div>`).join('')}
    <p class="muted small">${tr() ? 'Bu ön değerlendirme bilgilendirme amaçlıdır. Detaylı analiz 45 dakikalık HR Health Scan görüşmesinde yapılır.' : 'This self-assessment is for information only. A detailed analysis happens in the 45-minute HR Health Scan meeting.'}</p>
    <div class="acts"><a class="btn btn-main" href="#/randevu?t=scan">${I.cal} ${tr() ? 'Sonuçları görüşelim' : 'Discuss my results'}</a><a class="btn btn-wa" target="_blank" rel="noopener" href="${COMPANY.whatsapp}?text=${encodeURIComponent(summary)}">${I.whatsapp} WhatsApp</a><button class="btn btn-ghost" data-qreset>${tr() ? 'Yeniden başla' : 'Start again'}</button></div></div>`;
  requestAnimationFrame(() => box.querySelectorAll('.res-bars em, .radar-poly').forEach((e) => e.classList.add('go')));
}
function radarSVG(vals, mini) {
  const n = vals.length, c = 110, R = 82;
  const pt = (i, r) => { const a = -Math.PI / 2 + (i / n) * Math.PI * 2; return [c + Math.cos(a) * r, c + Math.sin(a) * r]; };
  const rings = [0.25, 0.5, 0.75, 1].map((f) => `<polygon class="radar-ring" points="${vals.map((_, i) => pt(i, R * f).join(',')).join(' ')}"/>`).join('');
  const axes = vals.map((_, i) => `<line class="radar-axis" x1="${c}" y1="${c}" x2="${pt(i, R)[0]}" y2="${pt(i, R)[1]}"/>`).join('');
  const poly = `<polygon class="radar-poly ${mini ? 'go' : ''}" points="${vals.map((v, i) => pt(i, R * Math.max(v, 4) / 100).join(',')).join(' ')}"/>`;
  const dots = vals.map((v, i) => `<circle class="radar-dot" cx="${pt(i, R * Math.max(v, 4) / 100)[0]}" cy="${pt(i, R * Math.max(v, 4) / 100)[1]}" r="3.5"/>`).join('');
  const labels = mini ? '' : SCAN_AREAS.map((a, i) => { const [x, y] = pt(i, R + 18); return `<text class="radar-lbl" x="${x}" y="${y}" text-anchor="${Math.abs(x - c) < 5 ? 'middle' : x > c ? 'start' : 'end'}" dominant-baseline="middle">${esc(L(a.name))}</text>`; }).join('');
  return `<svg class="radar" viewBox="${mini ? '20 20 180 180' : '-40 -10 300 240'}" role="img" aria-label="${tr() ? 'Değerlendirme grafiği' : 'Assessment chart'}">${rings}${axes}${poly}${dots}${labels}</svg>`;
}

/* ---------------- Bad-hire cost calculator ---------------- */
function calcPage() {
  const inp = (k, lbl, val, step = 1000, suf = '₺') => `<label class="cin"><span>${lbl}</span><div><input type="number" min="0" step="${step}" id="c-${k}" value="${val}"><em>${suf}</em></div></label>`;
  return pageHead(tr() ? 'Yanlış işe alımın <i>gerçek maliyeti</i>' : 'The <i>real cost</i> of a bad hire', [[t('calc')]], tr() ? 'Görünen maaşın ötesinde: zaman, ekip, müşteri ve fırsat maliyetini birlikte hesaplayın.' : 'Beyond salary: estimate the cost in time, team, customers and missed opportunities.') + `
  <section class="sec"><div class="wrap calc">
    <div class="calc-in rv">
      ${inp('salary', tr() ? 'Aylık brüt maaş' : 'Monthly gross salary', 60000)}
      ${inp('months', tr() ? 'Ayrılana kadar geçen süre' : 'Months until they leave', 6, 1, tr() ? 'ay' : 'mo')}
      ${inp('recruit', tr() ? 'İşe alım maliyeti (ilan, danışmanlık, mülakat)' : 'Recruitment cost (ads, agency, interviews)', 60000)}
      ${inp('training', tr() ? 'Eğitim ve oryantasyon' : 'Training and onboarding', 20000)}
      ${inp('mgr', tr() ? 'Yöneticinin aylık harcadığı ek saat' : 'Extra manager hours per month', 10, 1, tr() ? 'saat' : 'h')}
      ${inp('mgrRate', tr() ? 'Yöneticinin saatlik maliyeti' : 'Manager hourly cost', 1200, 100)}
      ${inp('vacancy', tr() ? 'Yeniden işe alım süresi' : 'Time to re-hire', 2, 1, tr() ? 'ay' : 'mo')}
      <label class="cin range"><span>${tr() ? 'Verim kaybı' : 'Productivity loss'} <b id="c-lossV">40%</b></span><input type="range" min="0" max="100" value="40" id="c-loss"></label>
    </div>
    <div class="calc-out rv" id="calcOut"></div>
  </div></section>${cta()}`;
}
function runCalc() {
  const v = (k) => +($('#c-' + k)?.value || 0);
  if (!$('#calcOut')) return;
  const load = 1.22; // employer cost on top of gross salary (estimate)
  const loss = v('loss') / 100;
  $('#c-lossV').textContent = v('loss') + '%';
  const parts = [
    [tr() ? 'Maaş ve işveren maliyeti' : 'Salary and employer cost', v('salary') * load * v('months')],
    [tr() ? 'İlk işe alım süreci' : 'Original recruitment', v('recruit')],
    [tr() ? 'Eğitim ve oryantasyon' : 'Training and onboarding', v('training')],
    [tr() ? 'Yönetici zamanı' : 'Manager time', v('mgr') * v('mgrRate') * v('months')],
    [tr() ? 'Verim kaybı' : 'Lost productivity', v('salary') * load * v('months') * loss],
    [tr() ? 'Boş kalan pozisyon' : 'Vacancy period', v('salary') * load * v('vacancy') * 0.5],
    [tr() ? 'Yeniden işe alım' : 'Re-hiring', v('recruit')],
  ];
  const total = parts.reduce((s, p) => s + p[1], 0), max = Math.max(...parts.map((p) => p[1]), 1);
  const yearly = v('salary') * 12 || 1;
  $('#calcOut').innerHTML = `<span class="kicker">${tr() ? 'Tahmini toplam maliyet' : 'Estimated total cost'}</span><div class="calc-total">${money(total)}</div>
    <p class="calc-ratio">${tr() ? `Yıllık brüt maaşın <b>${(total / yearly * 100).toFixed(0)}%</b>'i` : `<b>${(total / yearly * 100).toFixed(0)}%</b> of annual gross salary`}</p>
    <div class="calc-bars">${parts.map(([n, val]) => `<div><span>${n}</span><i><em style="width:${(val / max) * 100}%"></em></i><b>${money(val)}</b></div>`).join('')}</div>
    <p class="muted small">${tr() ? 'Tahmindir; işveren maliyeti brüt maaşın %22 fazlası, boş pozisyon döneminde %50 verim kaybı varsayılmıştır. Müşteri ve marka etkisi dahil değildir.' : 'Estimate only: employer cost assumed at gross +22%, and 50% lost output while the role is vacant. Customer and brand impact are not included.'}</p>
    <div class="acts"><a class="btn btn-main" href="#/randevu">${tr() ? 'Doğru işe alımı konuşalım' : 'Let\'s talk about getting it right'} ${I.arrow}</a></div>`;
}

/* ---------------- Booking ---------------- */
let booking = { type: 'general', day: null, time: null };
function bookingPage(q) {
  booking = { type: q.get('t') === 'scan' ? 'scan' : 'general', day: null, time: null };
  const days = []; const d = new Date(); d.setHours(0, 0, 0, 0);
  while (days.length < 12) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d)); }
  const fmt = new Intl.DateTimeFormat(tr() ? 'tr-TR' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  return pageHead(tr() ? 'Görüşme <i>planlayın</i>' : 'Schedule a <i>meeting</i>', [[t('book')]], tr() ? 'Size uygun görüşme türünü, günü ve saati seçin; onay için sizinle iletişime geçelim.' : 'Choose a meeting type, day and time; we\'ll contact you to confirm.') + `
  <section class="sec"><div class="wrap book">
    <div class="rv">
      <h3 class="h3">1. ${tr() ? 'Görüşme türü' : 'Meeting type'}</h3>
      <div class="btypes">
        <button class="btype ${booking.type === 'general' ? 'on' : ''}" data-btype="general"><span>${I.clock} 30 ${tr() ? 'dk' : 'min'}</span><b>${tr() ? 'Genel görüşme talebi' : 'General meeting'}</b><small>${tr() ? 'Tanışma ve ihtiyaçların konuşulması' : 'Introduction and needs'}</small></button>
        <button class="btype ${booking.type === 'scan' ? 'on' : ''}" data-btype="scan"><span>${I.clock} 45 ${tr() ? 'dk' : 'min'}</span><b>HR Health Scan</b><small>${tr() ? 'Organizasyon ve İK süreç değerlendirmesi' : 'Structure and HR process assessment'}</small></button>
      </div>
      <h3 class="h3">2. ${tr() ? 'Gün' : 'Day'}</h3>
      <div class="bdays">${days.map((x) => `<button data-bday="${x.toISOString().slice(0, 10)}">${fmt.format(x)}</button>`).join('')}</div>
      <h3 class="h3">3. ${tr() ? 'Saat' : 'Time'}</h3>
      <div class="btimes">${['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'].map((x) => `<button data-btime="${x}">${x}</button>`).join('')}</div>
      <p class="muted small">${tr() ? 'Görüşmeler online (Zoom / Microsoft Teams) yapılır.' : 'Meetings are held online (Zoom / Microsoft Teams).'}</p>
    </div>
    <div>
      <div class="bsum rv" id="bsum"></div>
      ${form('fBook', [{ k: 'name', req: true }, { k: 'company' }, { k: 'email', type: 'email', req: true }, { k: 'phone', type: 'tel' }, { k: 'note', type: 'textarea', full: true }, { k: 'kvkk', type: 'consent' }], '4. ' + (tr() ? 'Bilgileriniz' : 'Your details'), tr() ? 'Randevu talep et' : 'Request appointment')}
    </div>
  </div></section>`;
}
function bookSummary() {
  const box = $('#bsum'); if (!box) return;
  const d = booking.day ? new Intl.DateTimeFormat(tr() ? 'tr-TR' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(booking.day)) : '—';
  const type = booking.type === 'scan' ? 'HR Health Scan (45 ' + (tr() ? 'dk' : 'min') + ')' : (tr() ? 'Genel görüşme (30 dk)' : 'General meeting (30 min)');
  box.innerHTML = `<span class="kicker">${tr() ? 'Seçiminiz' : 'Your selection'}</span><div class="bsum-row">${I.target}<span>${type}</span></div><div class="bsum-row">${I.cal}<span>${d}</span></div><div class="bsum-row">${I.clock}<span>${booking.time || '—'}</span></div>`;
}

/* ---------------- Contact / legal ---------------- */
function contactPage() {
  return pageHead(tr() ? 'İletişim' : 'Contact <i>us</i>', [[t('contact')]], tr() ? 'Bize ulaşmak veya görüşme planlamak için aşağıdaki bilgileri kullanabilirsiniz.' : 'Use the details below to reach us or schedule a meeting.') + `
  <section class="sec"><div class="wrap contact">
    <div class="rv"><div class="cinfo">
      <a class="ci wide" href="${COMPANY.maps}" target="_blank" rel="noopener"><span>${I.pin}</span><small>${t('address')}</small><p>${COMPANY.address}</p></a>
      <a class="ci" href="${COMPANY.phoneHref}"><span>${I.phone}</span><small>${t('phone')}</small><p>${COMPANY.phone}</p></a>
      <a class="ci" href="mailto:${COMPANY.email}"><span>${I.mail}</span><small>${t('email')}</small><p>${COMPANY.email}</p></a>
    </div><a class="mapcard" href="${COMPANY.maps}" target="_blank" rel="noopener"><span class="mapdot">${I.pin}</span><span class="maplbl">${t('openMap')} ${I.arrow}</span></a></div>
    ${form('fContact', [{ k: 'firstName', req: true }, { k: 'lastName', req: true }, { k: 'email', type: 'email', req: true }, { k: 'phone', type: 'tel' }, { k: 'message', type: 'textarea', req: true, full: true }, { k: 'kvkk', type: 'consent' }], tr() ? 'Bize ulaşın' : 'Get in touch')}
  </div></section>`;
}
function legalPage(id) {
  const d = LEGAL.find((x) => x.id === id) || LEGAL[0];
  return pageHead(L(d.title), [[t('legal')], [L(d.title)]], COMPANY.legal) + `
  <section class="sec"><div class="wrap article">
    <article class="prose legal rv">${L(d.body).map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join('')}</article>
    <aside class="aside rv"><nav class="legal-nav">${LEGAL.map((x) => `<a href="#/yasal/${x.id}" class="${x.id === d.id ? 'on' : ''}">${I[x.icon]}<span>${L(x.title)}</span></a>`).join('')}</nav></aside>
  </div></section>`;
}
const notFound = () => pageHead('404', [['404']]) + `<section class="sec"><div class="wrap center"><a class="btn btn-main" href="#/">${t('home')}</a></div></section>`;

/* ==========================================================================
   Chrome
   ========================================================================== */
function renderChrome() {
  document.documentElement.lang = lang;
  $('#logo').innerHTML = LOGO; $('#introMark').innerHTML = LOGO;
  $('#nav').innerHTML = [['', 'home'], ['hizmetler', 'services'], ['icgoruler', 'insights', 'makale'], ['isverenler', 'employers'], ['adaylar', 'candidates'], ['hakkimizda', 'about'], ['iletisim', 'contact']]
    .map(([r, k, also]) => `<a href="#/${r}" data-r="${r}${also ? ' ' + also : ''}">${t(k)}</a>`).join('') + `<a class="nav-book" href="#/randevu">${t('book')}</a>`;
  $('#aiPill').innerHTML = `${I.ai}<span>${tr() ? 'AI Asistan' : 'AI Assistant'}</span>`;
  const LANGS = [['tr', 'Türkçe', 'Turkish'], ['en', 'English', 'İngilizce']];
  const cur = LANGS.find((x) => x[0] === lang);
  $('#langBtn').innerHTML = `<span class="lang-flag">${FLAGS[lang]}</span><span class="lang-code">${lang.toUpperCase()}</span><svg class="lang-chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>`;
  $('#langBtn').setAttribute('aria-label', (tr() ? 'Dil: ' : 'Language: ') + cur[1]);
  $('#langMenu').innerHTML = `<span class="lang-title">${tr() ? 'Dil seçin' : 'Choose language'}</span>` + LANGS.map(([l, n, alt]) => `<button role="menuitemradio" aria-checked="${l === lang}" data-lang="${l}" class="${l === lang ? 'on' : ''}"><span class="lang-flag">${FLAGS[l]}</span><span class="lang-name"><b>${n}</b><small>${alt}</small></span><svg class="lang-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></button>`).join('');
  $('#hdrBook').innerHTML = `${I.cal} ${t('book')}`;
  $('#ftr').innerHTML = `<div class="wrap ftr-grid">
    <div><a href="#/" class="logo ftr-logo">${LOGO}</a><p>${tr() ? 'Executive search, stratejik işe alım ve organizasyonel dönüşüm danışmanlığında butik çözümler.' : 'Boutique solutions in executive search, strategic recruitment and organizational transformation.'}</p>
      <div class="socials"><a href="${COMPANY.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${I.linkedin}</a><a href="${COMPANY.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.instagram}</a><a href="${COMPANY.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.whatsapp}</a></div></div>
    <div><h5>${t('services')}</h5>${SERVICES.map((s) => `<a href="#/hizmetler">${L(s.title)}</a>`).join('')}</div>
    <div><h5>SXX</h5><a href="#/hakkimizda">${t('about')}</a><a href="#/isverenler">${t('employers')}</a><a href="#/adaylar">${t('candidates')}</a><a href="#/icgoruler">${t('insights')}</a><a href="#/hr-health-scan">HR Health Scan</a><a href="#/maliyet">${t('calc')}</a><a href="#/randevu">${t('book')}</a></div>
    <div><h5>${t('legal')}</h5>${LEGAL.map((x) => `<a href="#/yasal/${x.id}">${L(x.title)}</a>`).join('')}</div>
    <div class="ftr-c"><h5>${t('contact')}</h5><p>${I.pin}<span>${COMPANY.address}</span></p><p>${I.phone}<a href="${COMPANY.phoneHref}">${COMPANY.phone}</a></p><p>${I.mail}<a href="mailto:${COMPANY.email}">${COMPANY.email}</a></p></div>
  </div>
  <div class="wrap ftr-permit"><p>${L(COMPANY.permit)}</p></div>
  <div class="wrap ftr-bot"><span>© ${new Date().getFullYear()} ${COMPANY.legal}. ${t('rights')}</span><span>Executive Search · HR Consulting</span></div>`;
  $('#dock').innerHTML = `
    <a class="dk wa" href="${COMPANY.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.whatsapp}<span class="tip">WhatsApp</span></a>
    <a class="dk ig" href="${COMPANY.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.instagram}<span class="tip">Instagram</span></a>
    <a class="dk li" href="${COMPANY.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${I.linkedin}<span class="tip">LinkedIn</span></a>
    <div class="dk-ai-wrap">
      <div class="ai-teaser" id="aiTeaser" hidden><button class="ai-teaser-x" aria-label="Kapat">${I.x}</button><p>${tr() ? '👋 Merhaba! İş tanımı hazırlayabilir, mülakat soruları önerebilir veya size uygun hizmeti bulabilirim.' : '👋 Hi! I can draft a job description, suggest interview questions or find the right service for you.'}</p><button class="ai-teaser-go" data-ai>${tr() ? 'Sohbeti başlat' : 'Start chat'} ${I.arrow}</button></div>
      <button class="dk-ai" data-ai aria-label="${tr() ? 'AI Asistanı aç' : 'Open AI assistant'}"><span class="dk-ai-av">${I.ai}</span><span class="dk-ai-t"><b>${tr() ? 'AI Asistan' : 'AI Assistant'}</b><small><i class="dot"></i> ${tr() ? 'Çevrimiçi' : 'Online'}</small></span></button>
    </div>`;
  $('#aiAv').innerHTML = I.ai;
  $('#aiStatus').textContent = tr() ? 'Çevrimiçi · İK ve işe alım asistanı' : 'Online · HR & recruitment assistant';
  $('#aiText').placeholder = tr() ? 'Örn. "Satış müdürü için iş tanımı"' : 'E.g. "Job description for a sales manager"';
  setSug();
}

/* ---------------- Router ---------------- */
function render() {
  if (location.hash && !location.hash.startsWith('#/')) return;
  const raw = location.hash.replace(/^#\/?/, '');
  const [pathQ, anchor] = raw.split('#');
  const [path, qs] = pathQ.split('?');
  const [name, ...args] = path.split('/').filter(Boolean);
  app.innerHTML = (ROUTES[name || ''] || notFound)(new URLSearchParams(qs || ''), ...args.map(decodeURIComponent));
  closeMenus();
  window.scrollTo({ top: 0, behavior: 'instant' });
  $$('#nav [data-r]').forEach((a) => a.classList.toggle('on', a.dataset.r.split(' ').includes(name || '')));
  after();
  if (anchor) setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 120);
}
window.addEventListener('hashchange', render);

let obs;
function after() {
  obs?.disconnect();
  obs = new IntersectionObserver((es) => es.forEach((e) => { if (!e.isIntersecting) return; e.target.classList.add('in'); obs.unobserve(e.target); }), { threshold: 0.1 });
  $$('.rv', app).forEach((el, i) => { if (el.getBoundingClientRect().top < innerHeight) { el.classList.add('in'); return; } el.style.transitionDelay = (i % 4) * 0.06 + 's'; obs.observe(el); });
  if ($('#quiz')) { quizAns = []; renderQuiz(); }
  if ($('#calcOut')) { runCalc(); $$('.calc input').forEach((i) => i.addEventListener('input', runCalc)); }
  if ($('#bsum')) bookSummary();
  bindForms();
  window.FX?.mount();
}
function bindForms() {
  $$('form.frm').forEach((f) => f.addEventListener('submit', (e) => {
    e.preventDefault(); const msg = $('.frm-msg', f); let ok = true;
    $$('[required]', f).forEach((el) => { const bad = el.type === 'checkbox' ? !el.checked : (!el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value))); (el.type === 'checkbox' ? el.parentElement : el).classList.toggle('bad', bad); if (bad) ok = false; });
    if (f.id === 'fBook' && (!booking.day || !booking.time)) { ok = false; msg.className = 'frm-msg err'; msg.textContent = tr() ? 'Lütfen gün ve saat seçin.' : 'Please choose a day and time.'; return; }
    if (!ok) { msg.className = 'frm-msg err'; msg.textContent = t('formErr'); return; }
    if (f.id === 'fBook') {
      const txt = (tr() ? 'Merhaba, görüşme talebim: ' : 'Hello, my meeting request: ') + `${booking.type === 'scan' ? 'HR Health Scan' : (tr() ? 'Genel görüşme' : 'General meeting')} · ${booking.day} ${booking.time} · ${$('#f-name').value}`;
      msg.className = 'frm-msg ok'; msg.innerHTML = `${t('formOk')}<br><a class="btn btn-wa" target="_blank" rel="noopener" href="${COMPANY.whatsapp}?text=${encodeURIComponent(txt)}">${I.whatsapp} ${tr() ? 'WhatsApp ile de iletin' : 'Also send via WhatsApp'}</a>`;
      return;
    }
    msg.className = 'frm-msg ok'; msg.textContent = t('formOk'); f.reset();
  }));
}

/* ==========================================================================
   Global UI
   ========================================================================== */
const hdr = $('#hdr');
window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 30), { passive: true });
const burger = $('#burger'), nav = $('#nav');
burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); document.body.classList.toggle('lock', o); });
nav.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenus(); });
function closeMenus() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('lock'); }
const langBox = $('#lang');
$('#langBtn').addEventListener('click', (e) => { e.stopPropagation(); const o = langBox.classList.toggle('open'); $('#langBtn').setAttribute('aria-expanded', o); });
document.addEventListener('click', (e) => { if (!e.target.closest('#lang')) { langBox.classList.remove('open'); $('#langBtn').setAttribute('aria-expanded', 'false'); } });
$('#langMenu').addEventListener('click', (e) => {
  const b = e.target.closest('[data-lang]'); if (!b) return;
  langBox.classList.remove('open');
  if (b.dataset.lang === lang) return;
  lang = b.dataset.lang; try { localStorage.setItem('sxc-lang', lang); } catch (e2) {}
  window.FX?.curtain(() => { renderChrome(); render(); greeted = false; $('#aiBody').innerHTML = ''; });
});
$('#themeBtn').addEventListener('click', () => {
  const r = document.documentElement; const dark = r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  r.dataset.theme = dark ? 'light' : 'dark'; try { localStorage.setItem('sxc-theme', r.dataset.theme); } catch (e) {}
});
document.addEventListener('click', (e) => {
  const qv = e.target.closest('[data-qv]'); if (qv) { quizAns.push(+qv.dataset.qv); renderQuiz(); return; }
  if (e.target.closest('[data-qback]')) { quizAns.pop(); renderQuiz(); return; }
  if (e.target.closest('[data-qreset]')) { quizAns = []; renderQuiz(); return; }
  const bt = e.target.closest('[data-btype]'); if (bt) { booking.type = bt.dataset.btype; $$('[data-btype]').forEach((x) => x.classList.toggle('on', x === bt)); bookSummary(); return; }
  const bd = e.target.closest('[data-bday]'); if (bd) { booking.day = bd.dataset.bday; $$('[data-bday]').forEach((x) => x.classList.toggle('on', x === bd)); bookSummary(); return; }
  const bm = e.target.closest('[data-btime]'); if (bm) { booking.time = bm.dataset.btime; $$('[data-btime]').forEach((x) => x.classList.toggle('on', x === bm)); bookSummary(); return; }
  const j = e.target.closest('[data-jump]'); if (j && location.hash.startsWith('#/hizmetler')) { e.preventDefault(); document.getElementById(j.dataset.jump)?.scrollIntoView({ behavior: 'smooth' }); return; }
  if (j) { setTimeout(() => document.getElementById(j.dataset.jump)?.scrollIntoView({ behavior: 'smooth' }), 150); }
  const cp = e.target.closest('[data-copy]'); if (cp) { const txt = cp.closest('.m').querySelector('.jd')?.innerText || ''; navigator.clipboard?.writeText(txt).then(() => toast(I.check + (tr() ? 'Kopyalandı' : 'Copied'))).catch(() => {}); return; }
  const ai = e.target.closest('[data-ai]'); if (ai) { e.preventDefault(); openAI(ai.dataset.ai); }
  if (e.target.closest('.ai-teaser-x, [data-ai]')) { $('#aiTeaser')?.setAttribute('hidden', ''); try { sessionStorage.setItem('sxc-teaser', '1'); } catch (e2) {} }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAI(); closeMenus(); } });
let toastT;
function toast(html) { const el = $('#toast'); el.innerHTML = html; el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2600); }

/* ==========================================================================
   AI assistant — bilingual HR & recruitment helper.
   For a production LLM, replace answer() with a call to your backend.
   ========================================================================== */
const AI_SUG = {
  tr: ['Satış müdürü için iş tanımı', 'Finans uzmanı mülakat soruları', 'Bize hangi hizmet uygun?', 'HR Health Scan nedir?', 'Adaylardan ücret alıyor musunuz?', 'Görüşme planla'],
  en: ['Job description for a sales manager', 'Interview questions for a finance specialist', 'Which service fits us?', 'What is the HR Health Scan?', 'Do you charge candidates?', 'Schedule a meeting'],
};
// lowercase both ways so Turkish (İ/ı) and English (I/i) input both match
const low = (q) => q.toLocaleLowerCase('tr') + ' ' + q.toLowerCase();
function roleFrom(q) {
  const stop = ['için', 'icin', 'for', 'a', 'an', 'the', 'bir', 'iş', 'tanımı', 'görev', 'job', 'description', 'jd', 'mülakat', 'soruları', 'sorusu', 'interview', 'question', 'questions', 'hazırla', 'hazırlar', 'mısın', 'yaz', 'write', 'create', 'draft', 'please', 'lütfen', 'bana', 'me'];
  const words = q.replace(/[?.!:,"]/g, ' ').split(/\s+/).filter((w) => w && !stop.includes(w.toLocaleLowerCase('tr')) && !stop.includes(w.toLowerCase()));
  return words.length ? words.map((w) => w.charAt(0).toLocaleUpperCase('tr') + w.slice(1)).join(' ') : (tr() ? 'Pozisyon' : 'Position');
}
const famOf = (q) => ROLE_KB.find((f) => f.k.some((k) => low(q).includes(k))) || ROLE_KB[4];
function answer(q) {
  const s = low(q.trim());
  const has = (...w) => w.some((x) => s.includes(x));

  if (has('iş tanımı', 'görev tanımı', 'job description', 'jd ', 'pozisyon tanımı') || /^jd$/.test(s)) {
    const f = famOf(s), role = roleFrom(q);
    const jd = `<div class="jd"><h4>${esc(role)}</h4><p><b>${tr() ? 'Rolün amacı' : 'Purpose'}:</b> ${tr() ? `${esc(role)}, ${L(f.fam).toLocaleLowerCase('tr')} alanında kurumun hedeflerine doğrudan katkı sağlayan, sonuç odaklı bir roldür.` : `${esc(role)} is a results-driven role contributing directly to company goals in ${L(f.fam).toLowerCase()}.`}</p>
      <p><b>${tr() ? 'Temel sorumluluklar' : 'Key responsibilities'}</b></p><ul>${L(f.resp).map((x) => `<li>${x}</li>`).join('')}</ul>
      <p><b>${tr() ? 'Yetkinlikler' : 'Competencies'}</b></p><ul>${L(f.comp).map((x) => `<li>${x}</li>`).join('')}</ul>
      <p><b>${tr() ? 'Başarı göstergeleri (ilk 12 ay)' : 'Success measures (first 12 months)'}</b></p><ul>${L(f.kpi).map((x) => `<li>${x}</li>`).join('')}</ul>
      <p><b>${tr() ? 'Raporlama' : 'Reports to'}:</b> ${tr() ? 'İlgili direktör / genel müdür' : 'Relevant director / CEO'}</p></div>`;
    return { html: `<p>${tr() ? 'Taslak iş tanımı hazırladım; kurumunuza göre birlikte netleştirebiliriz:' : 'Here is a draft job description; we can refine it for your organization:'}</p>${jd}`,
      actions: [{ copy: true, label: tr() ? 'Kopyala' : 'Copy' }, { href: '#/randevu', label: tr() ? 'Bu rol için arama başlatalım' : 'Start a search for this role' }],
      sug: tr() ? [`${role} mülakat soruları`, 'Yanlış işe alımın maliyeti', 'Görüşme planla'] : [`${role} interview questions`, 'Cost of a bad hire', 'Schedule a meeting'] };
  }
  if (has('mülakat', 'interview')) {
    const f = famOf(s), role = roleFrom(q);
    const c = L(f.comp);
    const qs = tr()
      ? [`Son rolünüzde ${c[0].toLocaleLowerCase('tr')} gerektiren zor bir durumu ve sonucunu anlatır mısınız?`, `${c[1]} konusunda kendinizi geliştirdiğiniz somut bir örnek verir misiniz?`, `Bu rolde ilk 90 günde neyi başarmayı hedeflersiniz?`, 'Önceliklerin çatıştığı bir dönemde nasıl karar verdiniz?', 'Bir yöneticiden aldığınız en değerli geri bildirim neydi ve ne değiştirdiniz?', 'Sizi bir kurumda uzun süre tutan üç faktör nedir?']
      : [`Tell me about a difficult situation that required ${c[0].toLowerCase()} and what happened.`, `Give a concrete example of how you developed your ${c[1].toLowerCase()}.`, 'What would you aim to achieve in your first 90 days in this role?', 'How did you decide when priorities were in conflict?', 'What is the most valuable feedback you have received, and what did you change?', 'What three factors keep you at an organization for the long term?'];
    return { html: `<p>${tr() ? `<b>${esc(role)}</b> için yapılandırılmış mülakat soruları (STAR yöntemiyle değerlendirin):` : `Structured interview questions for <b>${esc(role)}</b> (score with the STAR method):`}</p><div class="jd"><ol>${qs.map((x) => `<li>${x}</li>`).join('')}</ol></div>`,
      actions: [{ copy: true, label: tr() ? 'Kopyala' : 'Copy' }], sug: tr() ? [`${role} için iş tanımı`, 'HR Health Scan nedir?'] : [`Job description for ${role}`, 'What is the HR Health Scan?'] };
  }
  if (has('ücret', 'fee', 'para', 'charge', 'ödeme', 'pay') && has('aday', 'candidate', 'iş arayan', 'job seeker', 'başvur', 'apply')) {
    return { html: tr() ? '<b>Hayır.</b> 4904 sayılı Türkiye İş Kurumu Kanunu gereğince iş arayan adaylardan hiçbir ad altında ücret alınmaz. <a href="#/adaylar">Başvuru formu</a>' : '<b>No.</b> Under Law No. 4904, job seekers are never charged any fee. <a href="#/adaylar">Application form</a>' };
  }
  if (has('ücret', 'fiyat', 'fee', 'price', 'cost of your', 'maliyeti ne kadar')) {
    return { html: tr() ? 'Danışmanlık ücretleri kapsam ve role göre belirlenir. İhtiyacınızı netleştirmek için 30 dakikalık ücretsiz bir ön görüşme planlayalım.' : 'Consulting fees depend on scope and role. Let\'s schedule a free 30-minute call to define your needs.', actions: [{ href: '#/randevu', label: t('book') }] };
  }
  if (has('maliyet', 'yanlış işe alım', 'bad hire', 'cost')) {
    const m = s.match(/(\d[\d.,]{3,})/);
    if (m) { const sal = +m[1].replace(/[.,]/g, ''); const est = sal * 1.22 * 6 * 1.4 + sal * 2 + sal * 1.22 * 2 * .5; return { html: `${tr() ? `${money(sal)} aylık maaşlı bir rolde 6 ayda ayrılan yanlış bir işe alımın tahmini maliyeti:` : `Estimated cost of a bad hire leaving after 6 months on ${money(sal)}/month:`} <b>${money(est)}</b>`, actions: [{ href: '#/maliyet', label: tr() ? 'Detaylı hesapla' : 'Calculate in detail' }] }; }
    return { html: tr() ? 'Yanlış bir işe alımın maliyeti çoğu zaman yıllık maaşın %50\'sini aşar: maaş, yönetici zamanı, verim kaybı, boş pozisyon ve yeniden işe alım. Maaş tutarını yazarsanız hemen tahmin edeyim.' : 'A bad hire often costs more than 50% of annual salary: pay, manager time, lost productivity, vacancy and re-hiring. Type a salary and I\'ll estimate it.', actions: [{ href: '#/maliyet', label: t('calc') }] };
  }
  if (has('health', 'scan', 'sağlık', 'değerlendirme', 'assessment', 'analiz')) {
    return { html: tr() ? '<b>HR Health Scan</b>, organizasyon yapınızı, kritik rollerinizi, işe alım ve İK süreçlerinizi değerlendirdiğimiz 45 dakikalık online görüşmedir. Önce sitedeki <b>12 soruluk ücretsiz ön testi</b> yapabilirsiniz.' : 'The <b>HR Health Scan</b> is a 45-minute online meeting assessing your structure, critical roles, recruitment and HR processes. You can start with the <b>free 12-question self-assessment</b> on the site.',
      actions: [{ href: '#/hr-health-scan#test', label: tr() ? 'Ön teste başla' : 'Start self-assessment' }, { href: '#/randevu?t=scan', label: tr() ? 'Görüşme planla' : 'Schedule' }] };
  }
  if (has('randevu', 'görüşme', 'toplantı', 'meeting', 'appointment', 'schedule', 'planla')) {
    return { html: tr() ? 'İki görüşme türümüz var: <b>Genel görüşme (30 dk)</b> ve <b>HR Health Scan (45 dk)</b>. Gün ve saati seçerek talep oluşturabilirsiniz.' : 'We offer a <b>General meeting (30 min)</b> and an <b>HR Health Scan (45 min)</b>. Pick a day and time to send a request.', actions: [{ href: '#/randevu', label: t('book') }] };
  }
  if (has('iş arıyorum', 'kariyer', 'başvuru', 'cv', 'özgeçmiş', 'job', 'career', 'apply', 'pozisyon var')) {
    return { html: tr() ? 'Özgeçmişinizi <a href="#/adaylar">aday başvuru formu</a> ile paylaşabilirsiniz. Başvurular gizlilikle değerlendirilir; uygun pozisyon oluştuğunda sizinle iletişime geçeriz. Adaylardan ücret alınmaz.' : 'Share your CV through the <a href="#/adaylar">candidate form</a>. Applications are reviewed in confidence and we contact you when a suitable role opens. Candidates are never charged.', actions: [{ href: '#/adaylar', label: t('candidates') }] };
  }
  if (has('kvkk', 'veri', 'gizlilik', 'privacy', 'data', 'sakla')) {
    return { html: tr() ? 'Aday verileri gizlilik esasıyla işlenir ve <b>en fazla 2 yıl</b> saklanır; süre sonunda yeniden onay istenir veya silinir. KVKK 11. madde kapsamındaki haklarınız için <a href="#/yasal/kvkk">Aydınlatma Metni</a>\'ne bakabilirsiniz.' : 'Candidate data is processed in confidence and kept for <b>up to 2 years</b>, then consent is requested again or it is deleted. See the <a href="#/yasal/kvkk">Privacy Notice</a> for your rights.' };
  }
  if (has('hangi hizmet', 'which service', 'öner', 'recommend', 'büyüyoruz', 'growing', 'yeni ekip', 'new team', 'yapı', 'structure', 'rol', 'role')) {
    const pick = has('işe alım', 'aday', 'recruit', 'hire', 'yönetici', 'executive') ? 3 : has('süreç', 'process') ? 2 : has('rol', 'role', 'ekip', 'team') ? 1 : 0;
    const sv = SERVICES[pick];
    return { html: `${tr() ? 'Anlattıklarınıza göre başlangıç noktası olarak şunu öneririm:' : 'Based on what you describe, I\'d suggest starting with:'}<div class="ai-svc"><span>${I[sv.icon]}</span><div><b>${L(sv.title)}</b><small>${L(sv.short)}</small></div></div>${tr() ? 'Emin olmak için 12 soruluk ön değerlendirmeyi yapabilirsiniz.' : 'To be sure, try the 12-question self-assessment.'}`,
      actions: [{ href: '#/hizmetler', label: t('services') }, { href: '#/hr-health-scan#test', label: 'HR Health Scan' }] };
  }
  const art = ARTICLES.find((a) => (has('teknik satış', 'technical sales') && a.id === 'teknik-satis') || (has('doğru aday', 'right candidate', 'fit', 'uyum') && a.id === 'dogru-aday'));
  if (art || has('makale', 'içgörü', 'article', 'insight', 'blog')) {
    const list = art ? [art] : ARTICLES;
    return { html: `${tr() ? 'Bu konudaki yazılarımız:' : 'Our articles on this:'}${list.map((a) => `<a class="ai-art" href="#/makale/${a.id}"><b>${L(a.title)}</b><small>${a.mins} ${t('minRead')}</small></a>`).join('')}` };
  }
  if (has('executive', 'yönetici arama', 'headhunt')) return { html: tr() ? '<b>Executive search</b> ile yönetici ve kritik uzman rolleri için hedef odaklı arama yürütürüz; önce rolü ve organizasyon yapısını birlikte netleştiririz.' : 'With <b>executive search</b> we run targeted searches for leadership and critical specialist roles, after defining the role and structure together.', actions: [{ href: '#/hizmetler', label: t('services') }] };
  if (has('adres', 'nerede', 'telefon', 'iletişim', 'address', 'where', 'phone', 'contact', 'mail')) return { html: `📍 ${COMPANY.address}<br>📞 ${COMPANY.phone}<br>✉️ ${COMPANY.email}`, actions: [{ href: '#/iletisim', label: t('contact') }] };
  if (has('hakkında', 'kimsiniz', 'about', 'who are')) return { html: L(PAGES.about)[0], actions: [{ href: '#/hakkimizda', label: t('about') }] };
  if (has('merhaba', 'selam', 'hello', 'hi', 'hey')) return { html: tr() ? 'Merhaba! 😊 İş tanımı, mülakat soruları, hizmet önerisi veya görüşme planlama konusunda yardımcı olabilirim.' : 'Hello! 😊 I can help with job descriptions, interview questions, service advice or scheduling.' };
  if (has('teşekkür', 'sağol', 'thanks', 'thank')) return { html: tr() ? 'Rica ederim! Başka bir konuda yardımcı olabilirsem buradayım.' : 'You\'re welcome! I\'m here if you need anything else.' };
  return { html: tr() ? 'Bu konuyu danışmanımızla konuşmanız en doğrusu olur.' : 'This is best discussed with our consultant.', actions: [{ href: '#/randevu', label: t('book') }, { wa: q, label: 'WhatsApp' }] };
}
const aiEl = $('#ai'), aiBody = $('#aiBody');
let greeted = false;
function openAI(q) {
  aiEl.classList.add('open'); aiEl.setAttribute('aria-hidden', 'false');
  if (!greeted) { greeted = true; msg('bot', { html: tr() ? 'Merhaba 👋 Ben SXX asistanıyım. <b>İş tanımı</b> hazırlayabilir, <b>mülakat soruları</b> önerebilir, size uygun <b>hizmeti</b> bulabilir veya <b>görüşme</b> planlamanıza yardım edebilirim.' : 'Hi 👋 I\'m the SXX assistant. I can draft a <b>job description</b>, suggest <b>interview questions</b>, find the right <b>service</b> or help you <b>schedule</b> a meeting.' }); }
  if (q) ask(q);
  setTimeout(() => $('#aiText').focus(), 250);
}
function closeAI() { aiEl.classList.remove('open'); aiEl.setAttribute('aria-hidden', 'true'); }
$('#aiClose').addEventListener('click', closeAI);
function actionsHTML(acts = []) {
  if (!acts.length) return '';
  return `<div class="ai-acts">${acts.map((a) => a.copy ? `<button class="chip" data-copy>${I.copy}<span>${a.label}</span></button>`
    : a.wa ? `<a class="chip wa" target="_blank" rel="noopener" href="${COMPANY.whatsapp}?text=${encodeURIComponent(a.wa)}">${I.whatsapp}<span>${a.label}</span></a>`
    : `<a class="chip" href="${a.href}">${a.label} ${I.arrow}</a>`).join('')}</div>`;
}
function msg(who, r) { const m = document.createElement('div'); m.className = 'm ' + who; if (who === 'me') m.textContent = r; else m.innerHTML = r.html + actionsHTML(r.actions); aiBody.appendChild(m); aiBody.scrollTop = aiBody.scrollHeight; return m; }
function setSug(list) { $('#aiSug').innerHTML = (list || AI_SUG[lang]).map((x) => `<button>${esc(x)}</button>`).join(''); }
function ask(q) {
  if (!q.trim()) return; msg('me', q);
  const tp = msg('bot', { html: '<span class="typing"><i></i><i></i><i></i></span>' });
  setTimeout(() => { const r = answer(q); tp.innerHTML = r.html + actionsHTML(r.actions); tp.classList.add('reveal'); setSug(r.sug); aiBody.scrollTop = aiBody.scrollHeight; }, 500 + Math.random() * 400);
}
$('#aiForm').addEventListener('submit', (e) => { e.preventDefault(); ask($('#aiText').value); $('#aiText').value = ''; });
$('#aiSug').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) ask(b.textContent); });

/* ---------------- Boot ---------------- */
renderChrome();
render();
setTimeout(() => $('#intro')?.classList.add('done'), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1000);
setTimeout(() => { let seen = false; try { seen = sessionStorage.getItem('sxc-teaser') === '1'; } catch (e) {} if (!seen && !aiEl.classList.contains('open')) $('#aiTeaser')?.removeAttribute('hidden'); }, 3500);
