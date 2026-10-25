/* ==========================================================================
   SXX Consultancy — site content (TR / EN)
   Brand anonymised as "SXX" for the proposal; contact and permit details are placeholders.
   ========================================================================== */
const COMPANY = {
  name: 'SXX Consultancy',
  legal: 'SXX İnsan Kaynakları Danışmanlığı Ltd. Şti.',
  address: '00 Mah. 0000. Sok. No: 0/0, 00000 Türkiye',
  phone: '+00 (000) 000 00 00',
  phoneHref: 'tel:+000000000000',
  email: 'info@sxxconsultancy.com.tr',
  whatsapp: 'https://wa.me/000000000000',
  maps: 'https://www.google.com/maps/search/?api=1&query=T%C3%BCrkiye',
  social: { linkedin: 'https://www.linkedin.com/', instagram: 'https://www.instagram.com/' },
  permit: { tr: 'SXX İnsan Kaynakları Danışmanlığı Ltd. Şti., Türkiye İş Kurumunun 00.00.0000 tarih ve 00000000 sayılı oluru ile 0000 izin numaralı özel istihdam bürosu olarak faaliyet göstermektedir. 4904 sayılı Türkiye İş Kurumu Kanunu gereğince iş arayanlardan menfaat sağlanması ve ücret alınması yasaktır. Şikâyetleriniz için ilgili Çalışma ve İş Kurumu İl Müdürlüğü\'ne başvurabilirsiniz.',
            en: 'SXX İnsan Kaynakları Danışmanlığı Ltd. Şti. operates as a private employment agency under permit no. 0000, approved by the Turkish Employment Agency (İŞKUR) on 00.00.0000 (ref. 00000000). Under Law No. 4904, receiving any benefit or fee from job seekers is prohibited. Complaints may be submitted to the relevant Provincial Directorate of Labour and Employment.' },
};

/* ---------------- UI strings ---------------- */
const I18N = {
  tr: {
    home: 'Ana Sayfa', services: 'Hizmetlerimiz', insights: 'İçgörüler', employers: 'İşverenler', candidates: 'İş Arayanlar', about: 'Hakkımızda', contact: 'İletişim',
    book: 'Görüşme Planlayın', scan: 'HR Health Scan', calc: 'Yanlış İşe Alım Maliyeti', legal: 'Yasal', menu: 'Menü', readMore: 'Devamını oku', minRead: 'dk okuma', back: 'Geri',
    heroKicker: 'Executive Search · Stratejik İşe Alım · Organizasyon Danışmanlığı',
    heroTitle: 'Güçlü yapılar.<br><i>Doğru yetenek.</i><br>Kurumsal netlik.',
    heroLead: 'Doğru organizasyon yapısı, doğru yeteneğin gelişebileceği ortamı yaratır. Büyüyen ve dönüşen kurumların yapılarını güçlendiriyor, rollerini netleştiriyor ve doğru yeteneği doğru rolle buluşturuyoruz.',
    heroCta: 'Görüşme planlayın', heroCta2: 'Ücretsiz ön değerlendirme',
    problemsTitle: 'Ne <i>çözüyoruz?</i>', problemsLead: 'Şirketlerin en sık karşılaştığı dört problem:',
    problems: [['Doğru adayı bulamamak', 'Uzun süren aramalar, uygun olmayan aday havuzları.'], ['Rolün net tanımlanmamış olması', 'Belirsiz beklentiler ve başarı kriterleri.'], ['İşe alım süreçlerinin uzaması', 'Kaybedilen zaman, kaçırılan güçlü adaylar.'], ['Verimsiz organizasyon yapısı', 'Rol çakışmaları, yavaş karar süreçleri.']],
    servicesTitle: 'Butik <i>danışmanlık</i> hizmetleri', servicesLead: 'Her kurumun ihtiyacı farklıdır. Organizasyon yapısını ve İK uygulamalarını birlikte değerlendirerek en uygun çözümü kurgularız.',
    approachTitle: 'Önce yapıyı anlarız, <i>sonra</i> yeteneği yerleştiririz.',
    approach: ['Kurumların karşılaştığı insan kaynakları sorunlarının çoğu yalnızca işe alım eksikliğinden değil, organizasyon yapısındaki belirsizliklerden kaynaklanır.', 'Önce organizasyon yapısını ve ihtiyaçlarını anlamaya odaklanır, ardından doğru yeteneğin doğru rol içinde gelişebileceği ortamı oluştururuz.', 'Amacımız, kurumların büyüme süreçlerinde daha net, sürdürülebilir ve etkin organizasyon yapıları oluşturmasına katkı sağlamaktır.'],
    howTitle: 'Nasıl <i>çalışıyoruz?</i>', howLead: 'Aynı anda sınırlı sayıda firma ile çalışıyoruz. Bu sayede işinizi derinlemesine anlıyor ve gerçek sonuçlar üretiyoruz.',
    how: [['İlk görüşme', 'Kurumun mevcut yapısını ve ihtiyaçlarını anlamak için kısa bir tanışma görüşmesi (30 dk).'], ['HR Health Scan', '45 dakikalık değerlendirme ile organizasyon yapısı ve İK süreçlerinde gelişim alanlarını belirleriz.'], ['Danışmanlık çalışması', 'Netleşen ihtiyaçlara göre yapı, süreç veya kritik işe alım için danışmanlık desteği sunarız.']],
    founderTitle: 'Kurucudan', founderQuote: 'Doğru organizasyon yapısının, doğru yeteneklerin gelişebileceği ortamı yarattığına inanıyorum.',
    founderText: 'Farklı sektörlerde edinilen kurumsal deneyim ve güçlü profesyonel ağ sayesinde, kurumların ihtiyaç duyduğu yetenekleri doğru organizasyon yapıları içinde konumlandırmalarına destek oluyoruz. Her iş birliğini uzun vadeli bir ortaklık olarak görüyoruz.',
    founderRole: 'Kurucu & Baş Danışman',
    toolsTitle: 'Kararınızı <i>verilerle</i> verin.', toolsLead: 'Görüşmeden önce kendi kurumunuzu değerlendirin.',
    scanTeaser: '12 soruda organizasyon yapınızı, kritik rollerinizi, işe alım ve İK süreçlerinizi puanlayın; size özel öneriler alın.',
    calcTeaser: 'Yanlış bir işe alımın kurumunuza gerçek maliyetini dakikalar içinde hesaplayın.',
    insightsTitle: 'İçgörüler & <i>Perspektifler</i>', insightsLead: 'Yetenek, işe alım ve sektör dinamiklerine dair bakış açılarımız.',
    ctaTitle: 'Organizasyon yapınızı birlikte değerlendirelim.', ctaLead: 'Kurumunuza en uygun yaklaşımı konuşmak için bir görüşme planlayın.',
    name: 'Ad Soyad', firstName: 'Adınız', lastName: 'Soyadınız', company: 'Şirket', email: 'E-posta', phone: 'Telefon', message: 'Mesajınız', send: 'Gönder', role: 'Pozisyon / unvan', linkedin: 'LinkedIn profili', cv: 'Özgeçmiş (CV)', sector: 'Sektör', size: 'Çalışan sayısı', note: 'Not',
    consent: 'KVKK Aydınlatma Metni\'ni okudum; Açık Rıza Metni kapsamında kişisel verilerimin işlenmesine onay veriyorum.',
    formOk: '✓ Teşekkürler! Talebiniz alındı, en kısa sürede dönüş yapacağız.', formErr: 'Lütfen işaretli alanları doldurun.',
    address: 'Adres', openMap: 'Haritada aç', follow: 'Bizi takip edin', rights: 'Tüm hakları saklıdır.',
    askAI: 'Asistana sorun',
  },
  en: {
    home: 'Home', services: 'Services', insights: 'Insights', employers: 'Employers', candidates: 'Candidates', about: 'About Us', contact: 'Contact',
    book: 'Schedule a Meeting', scan: 'HR Health Scan', calc: 'Cost of a Bad Hire', legal: 'Legal', menu: 'Menu', readMore: 'Read more', minRead: 'min read', back: 'Back',
    heroKicker: 'Executive Search · Strategic Recruitment · Organizational Consulting',
    heroTitle: 'Strong structures.<br><i>The right talent.</i><br>Corporate clarity.',
    heroLead: 'The right organizational structure creates an environment where the right talent can grow. We help growing and transforming organizations strengthen their structures, clarify roles and match the right talent with the right role.',
    heroCta: 'Schedule a meeting', heroCta2: 'Free self-assessment',
    problemsTitle: 'What do we <i>solve?</i>', problemsLead: 'The four problems companies face most often:',
    problems: [['Not finding the right candidate', 'Long searches and candidate pools that don\'t fit.'], ['Roles that aren\'t clearly defined', 'Unclear expectations and success criteria.'], ['Recruitment that drags on', 'Lost time and strong candidates who walk away.'], ['An inefficient structure', 'Overlapping roles and slow decisions.']],
    servicesTitle: 'Boutique <i>consulting</i> services', servicesLead: 'Every organization is different. We assess structure and HR practices together and design the solution that fits.',
    approachTitle: 'We understand the structure first, <i>then</i> place the talent.',
    approach: ['Most HR problems organizations face come not only from a lack of hiring, but from uncertainty in the organizational structure.', 'We first focus on understanding the structure and its needs, then create an environment where the right talent can grow in the right role.', 'Our goal is to help organizations build clearer, more sustainable and more effective structures as they grow.'],
    howTitle: 'How we <i>work</i>', howLead: 'We work with a limited number of companies at a time, so we understand your business in depth and deliver real results.',
    how: [['First meeting', 'A short introductory call (30 min) to understand your current structure and needs.'], ['HR Health Scan', 'A 45-minute assessment that identifies improvement areas in your structure and HR processes.'], ['Consulting engagement', 'Support for structure, processes or critical hiring, based on the needs we identified.']],
    founderTitle: 'From the founder', founderQuote: 'I believe the right organizational structure creates the environment where the right talent can grow.',
    founderText: 'With corporate experience across sectors and a strong professional network, we help organizations position the talent they need within the right structures. We see every engagement as a long-term partnership.',
    founderRole: 'Founder & Principal Consultant',
    toolsTitle: 'Decide with <i>data.</i>', toolsLead: 'Assess your own organization before we meet.',
    scanTeaser: 'Score your structure, critical roles, recruitment and HR processes in 12 questions and get tailored recommendations.',
    calcTeaser: 'Estimate what a wrong hire really costs your organization, in minutes.',
    insightsTitle: 'Insights & <i>Perspectives</i>', insightsLead: 'Our views on talent, recruitment and industry dynamics.',
    ctaTitle: 'Let\'s review your organizational structure together.', ctaLead: 'Schedule a meeting to discuss the right approach for your organization.',
    name: 'Full name', firstName: 'First name', lastName: 'Last name', company: 'Company', email: 'Email', phone: 'Phone', message: 'Message', send: 'Send', role: 'Position / title', linkedin: 'LinkedIn profile', cv: 'CV', sector: 'Industry', size: 'Employees', note: 'Note',
    consent: 'I have read the Privacy Notice and consent to the processing of my personal data under the Explicit Consent Text.',
    formOk: '✓ Thank you! We received your request and will get back to you shortly.', formErr: 'Please fill in the highlighted fields.',
    address: 'Address', openMap: 'Open in maps', follow: 'Follow us', rights: 'All rights reserved.',
    askAI: 'Ask the assistant',
  },
};

/* ---------------- Services ---------------- */
const SERVICES = [
  { id: 'analiz', icon: 'scan', title: { tr: 'Organizasyonel Analiz ve Değerlendirme', en: 'Organizational Analysis & Assessment' },
    short: { tr: 'Organizasyon yapısını ve rol dağılımlarını değerlendirerek gelişim alanlarını belirleriz.', en: 'We assess structure and role distribution to identify areas for improvement.' },
    long: { tr: 'Mevcut organizasyon yapınızı, rol dağılımlarınızı ve insan kaynakları uygulamalarınızı analiz ederiz. Bu değerlendirme, gelişim alanlarının netleşmesini ve daha etkin bir yapı kurulmasını sağlar.', en: 'We analyse your current structure, role distribution and HR practices. The assessment clarifies improvement areas and lays the ground for a more effective structure.' },
    outcome: { tr: 'Net organizasyon yapısı ve gelişim alanlarının belirlenmesi', en: 'A clear structure and defined improvement areas' } },
  { id: 'danismanlik', icon: 'org', title: { tr: 'Organizasyon Danışmanlığı', en: 'Organizational Consulting' },
    short: { tr: 'Rol ve sorumlulukların netleştirilmesi ve ekip yapılandırması konusunda danışmanlık sunarız.', en: 'We advise on clarifying roles and responsibilities and structuring teams.' },
    long: { tr: 'Organizasyon yapısının geliştirilmesi, rol ve sorumlulukların netleştirilmesi ve ekip yapılanmasının güçlendirilmesi konularında danışmanlık sunarız.', en: 'We advise on developing the organizational structure, clarifying roles and responsibilities, and strengthening team setup.' },
    outcome: { tr: 'Rol ve sorumlulukların netleşmesi', en: 'Clear roles and responsibilities' } },
  { id: 'surec', icon: 'flow', title: { tr: 'İnsan Kaynakları Süreç Tasarımı', en: 'HR Process Design' },
    short: { tr: 'İşe alım ve İK süreçlerinin daha sistematik ve sürdürülebilir hale gelmesine destek oluruz.', en: 'We make recruitment and HR processes more systematic and sustainable.' },
    long: { tr: 'İşe alım ve insan kaynakları süreçlerinin daha sistematik ve sürdürülebilir hale gelmesine destek oluruz. Amaç, organizasyon içinde net, verimli ve ölçülebilir bir yapı oluşturmaktır.', en: 'We help make recruitment and HR processes more systematic and sustainable, with the aim of a clear, efficient and measurable setup.' },
    outcome: { tr: 'Verimli ve ölçülebilir İK süreçleri', en: 'Efficient, measurable HR processes' } },
  { id: 'isealim', icon: 'target', title: { tr: 'Stratejik İşe Alım & Executive Search', en: 'Strategic Recruitment & Executive Search' },
    short: { tr: 'Kritik roller için hedef odaklı işe alım süreçleri yürütürüz.', en: 'We run targeted recruitment for critical roles.' },
    long: { tr: 'Kritik pozisyonlar ve yönetici kadroları için hedef odaklı işe alım süreçleri yürütürüz. Organizasyon yapınızı dikkate alarak doğru yeteneğin doğru rolle buluşmasını sağlarız.', en: 'We run targeted searches for critical and leadership roles. Taking your structure into account, we match the right talent with the right role.' },
    outcome: { tr: 'Doğru yetenek ve rol eşleşmesi', en: 'The right talent–role match' } },
];

/* ---------------- Pages ---------------- */
const PAGES = {
  employers: {
    tr: ['SXX Consultancy, kurumların organizasyon yapılarını güçlendirmelerine ve doğru yetenekleri doğru rollerle buluşturmalarına destek olur. Liderlik kadrolarını güçlendirerek sürdürülebilir büyümeyi desteklemek amacıyla executive search ve yönetim danışmanlığı hizmetleri sunar.', 'Her kurumun ihtiyaçlarının farklı olduğuna inanır, organizasyon yapısını ve İK süreçlerini değerlendirerek en uygun çözümü birlikte belirleriz.'],
    en: ['SXX Consultancy helps organizations strengthen their structures and match the right talent with the right roles. We offer executive search and management consulting to strengthen leadership teams and support sustainable growth.', 'We believe every organization\'s needs are different, so we assess your structure and HR processes and decide on the best solution together.'],
    offer: { tr: ['Organizasyon yapısı değerlendirmesi', 'İnsan kaynakları süreçlerinin geliştirilmesi', 'Kritik pozisyonlar için işe alım desteği', 'Organizasyon danışmanlığı'], en: ['Organizational structure assessment', 'HR process improvement', 'Recruitment support for critical roles', 'Organizational consulting'] },
  },
  candidates: {
    tr: ['SXX Consultancy, profesyonelleri deneyim ve yetkinliklerine uygun kariyer fırsatları ile buluşturmayı hedefler. Kariyer yolculuğunuzda bir sonraki adımı planlarken sizi doğru organizasyonlarla bir araya getirmek için çalışıyoruz.'],
    en: ['SXX Consultancy aims to connect professionals with career opportunities that fit their experience and skills. As you plan the next step in your career, we work to bring you together with the right organizations.'],
    process: { tr: ['Başvurunuz gizlilik esasına göre değerlendirilir.', 'Uygun bir pozisyon oluştuğunda sizinle iletişime geçeriz.', 'Süreç boyunca her adımda bilgilendirilirsiniz.'], en: ['Your application is reviewed in confidence.', 'We contact you when a suitable position opens.', 'You are kept informed at every step.'] },
    fee: { tr: '4904 sayılı Türkiye İş Kurumu Kanunu gereğince iş arayan adaylardan hiçbir ad altında ücret alınmaz.', en: 'Under Law No. 4904, no fee of any kind is charged to job seekers.' },
  },
  about: {
    tr: ['SXX Consultancy, organizasyonların liderlik kadrolarını güçlendirmek, stratejik işe alım süreçlerini desteklemek ve organizasyonel dönüşüm projelerine katkı sağlamak amacıyla kurulmuştur.', 'Her kurumun ihtiyaçlarının farklı olduğuna inanır, organizasyon yapısını ve insan kaynakları uygulamalarını değerlendirerek kurumlara özel çözümler geliştiririz. Amacımız kurumların büyüme süreçlerinde daha net, sürdürülebilir ve güçlü ekipler oluşturmalarına katkı sağlamaktır.'],
    en: ['SXX Consultancy was founded to strengthen leadership teams, support strategic recruitment and contribute to organizational transformation projects.', 'We believe every organization is different, so we assess structure and HR practices and develop tailored solutions. Our goal is to help organizations build clearer, more sustainable and stronger teams as they grow.'],
  },
  principles: [
    ['shield', { tr: 'Güven ve Şeffaflık', en: 'Trust & Transparency' }, { tr: 'Her iş birliğini karşılıklı güvene dayalı uzun vadeli bir ortaklık olarak görürüz.', en: 'We see every engagement as a long-term partnership built on mutual trust.' }],
    ['org', { tr: 'Kurum Odaklı Yaklaşım', en: 'Client-Centred Approach' }, { tr: 'Her kurumun ihtiyaçlarının farklı olduğuna inanır, çözümlerimizi buna göre şekillendiririz.', en: 'Every organization is different, and we shape our solutions accordingly.' }],
    ['lock', { tr: 'Gizlilik', en: 'Confidentiality' }, { tr: 'Aday ve müşteri bilgilerinin gizliliğine büyük önem veririz.', en: 'We take the confidentiality of candidate and client information very seriously.' }],
    ['leaf', { tr: 'Sürdürülebilirlik', en: 'Sustainability' }, { tr: 'Amacımız yalnızca bir pozisyonu doldurmak değil, sürdürülebilir ekipler oluşturmaktır.', en: 'Our aim is not just to fill a position, but to build sustainable teams.' }],
  ],
  scan: {
    tr: { intro: 'Kurumunuzun organizasyon yapısı ve insan kaynakları süreçlerini değerlendirmek için 45 dakikalık bir tanışma ve analiz görüşmesi gerçekleştiriyoruz. Mevcut yapınızı anlamaya, kritik ihtiyaç alanlarını belirlemeye ve gelişim fırsatlarını ortaya koymaya odaklanırız.',
          what: ['Organizasyon yapısı', 'Kritik rol ihtiyaçları', 'İşe alım süreçleri', 'İnsan kaynakları uygulamaları'],
          who: ['Hızlı büyüyen organizasyonlar', 'Yeni ekip kuran şirketler', 'İşe alım süreçlerini yapılandırmak isteyen kurumlar', 'Organizasyon yapısını gözden geçirmek isteyen yönetim ekipleri'],
          format: 'Görüşmeler online (Zoom / Microsoft Teams) yapılır ve yaklaşık 45 dakika sürer. Değerlendirme bilgilendirme amaçlıdır ve kurumunuza özel danışmanlık çalışmalarının ilk adımını oluşturur.' },
    en: { intro: 'We hold a 45-minute introductory and analysis meeting to assess your organizational structure and HR processes. We focus on understanding your current setup, identifying critical needs and highlighting opportunities for improvement.',
          what: ['Organizational structure', 'Critical role needs', 'Recruitment processes', 'HR practices'],
          who: ['Fast-growing organizations', 'Companies building new teams', 'Organizations that want to structure recruitment', 'Leadership teams reviewing their structure'],
          format: 'Meetings are held online (Zoom / Microsoft Teams) and last about 45 minutes. The assessment is for information and is the first step of a tailored consulting engagement.' },
  },
};

/* ---------------- HR Health Scan self-assessment ---------------- */
const SCAN_AREAS = [
  { id: 'yapi', name: { tr: 'Organizasyon yapısı', en: 'Structure' } },
  { id: 'rol', name: { tr: 'Kritik roller', en: 'Critical roles' } },
  { id: 'alim', name: { tr: 'İşe alım süreci', en: 'Recruitment' } },
  { id: 'ik', name: { tr: 'İK uygulamaları', en: 'HR practices' } },
];
const SCAN_Q = [
  ['yapi', { tr: 'Organizasyon şemamız güncel ve herkes tarafından biliniyor.', en: 'Our org chart is up to date and known by everyone.' }],
  ['yapi', { tr: 'Karar alma yetkileri ve onay süreçleri net.', en: 'Decision rights and approval flows are clear.' }],
  ['yapi', { tr: 'Ekipler arasında rol çakışması veya boşluk yaşanmıyor.', en: 'There are no overlaps or gaps between teams.' }],
  ['rol', { tr: 'Kritik rollerimizin görev tanımları ve başarı kriterleri yazılı.', en: 'Our critical roles have written descriptions and success criteria.' }],
  ['rol', { tr: 'Kilit pozisyonlar için yedekleme / halef planımız var.', en: 'We have succession plans for key positions.' }],
  ['rol', { tr: 'Önümüzdeki 12 ayın yetenek ihtiyacını öngörebiliyoruz.', en: 'We can forecast our talent needs for the next 12 months.' }],
  ['alim', { tr: 'Kritik bir pozisyonu genellikle 60 günden kısa sürede dolduruyoruz.', en: 'We usually fill a critical role in under 60 days.' }],
  ['alim', { tr: 'Mülakatlarımız yapılandırılmış ve aynı kriterlerle yapılıyor.', en: 'Our interviews are structured and use the same criteria.' }],
  ['alim', { tr: 'Yeni çalışanlarımızın çoğu ilk yılını tamamlıyor.', en: 'Most new hires complete their first year.' }],
  ['ik', { tr: 'Oryantasyon (onboarding) sürecimiz tanımlı ve uygulanıyor.', en: 'Our onboarding process is defined and followed.' }],
  ['ik', { tr: 'Performans değerlendirme düzenli ve hedeflerle bağlantılı.', en: 'Performance reviews are regular and linked to goals.' }],
  ['ik', { tr: 'Ücret ve kariyer yapımız şeffaf ve pazara uygun.', en: 'Our pay and career structure is transparent and competitive.' }],
];
const SCAN_TIPS = {
  yapi: { tr: 'Organizasyon şemasını ve karar yetkilerini netleştirmek, rol çakışmalarını azaltır ve karar hızını artırır. Organizasyonel analiz ile başlamanızı öneririz.', en: 'Clarifying the org chart and decision rights reduces overlaps and speeds up decisions. We suggest starting with an organizational analysis.' },
  rol: { tr: 'Kritik roller için görev tanımları, başarı kriterleri ve halef planı oluşturmak, işe alım ve elde tutmanın temelidir.', en: 'Role descriptions, success criteria and succession plans for critical roles are the foundation of hiring and retention.' },
  alim: { tr: 'Yapılandırılmış mülakatlar ve net bir süreç takvimi, hem süreyi kısaltır hem yanlış işe alım riskini azaltır.', en: 'Structured interviews and a clear process timeline shorten time-to-hire and reduce the risk of a bad hire.' },
  ik: { tr: 'Tanımlı bir oryantasyon ve düzenli performans döngüsü, yeni çalışanların ilk yıl bağlılığını belirgin şekilde artırır.', en: 'A defined onboarding and a regular performance cycle significantly improve first-year retention.' },
};

/* ---------------- Insights (articles) ---------------- */
const ARTICLES = [
  { id: 'teknik-satis', cat: { tr: 'İşe Alım', en: 'Recruitment' }, mins: 4,
    title: { tr: 'Teknik Satış Rolleri Neden Giderek Daha Zor Bulunuyor?', en: 'Why Are Technical Sales Roles Getting Harder to Fill?' },
    lead: { tr: 'Teknik satış rollerinde doğru adaylara ulaşmak giderek zorlaşıyor. Ancak bu zorluk yalnızca "yeterli aday yok" meselesiyle açıklanamaz.', en: 'Reaching the right candidates for technical sales roles keeps getting harder. But the challenge can\'t be explained simply by "not enough candidates".' },
    body: {
      tr: [['', 'Türkiye\'de özellikle yapı kimyasalları, endüstriyel ürünler ve teknik bilgi gerektiren satış rollerinde doğru adaylara ulaşmak her zamankinden daha zor hale geliyor. Bugün karşı karşıya olduğumuz durum, birkaç temel dinamiğin kesişiminden oluşuyor.'],
           ['1. Rol tanımları değişiyor', 'Teknik satış pozisyonları artık sadece ürün bilgisi ve saha tecrübesi gerektirmiyor. Adaylardan aynı anda teknik derinlik, ticari bakış açısı, ilişki yönetimi ve problem çözme yetkinliği bekleniyor. Bu da aday havuzunu doğal olarak daraltıyor.'],
           ['2. Aday beklentileri dönüştü', 'Deneyimli adaylar artık yalnızca maaş ve unvan üzerinden karar vermiyor. Kurumun karar alma hızı, organizasyon yapısının netliği, yönetim yaklaşımı ve kariyer gelişim alanı çok daha belirleyici. Bu faktörler net değilse güçlü adaylar sürece dahil olmuyor.'],
           ['3. Şirketler rolü doğru konumlandıramıyor', 'Birçok organizasyonda problem aday bulmak değil, rolü doğru tanımlayamamak. Beklentiler belirsiz, başarı kriterleri net değil ve iç yapı destekleyici değilse, doğru aday bulunsa bile sürdürülebilir başarı sağlanamıyor.'],
           ['4. Pazar dinamikleri daha rekabetçi', 'Aynı aday havuzu aynı sektör içinde sürekli el değiştiriyor. Bu da hem maaş beklentilerini yükseltiyor hem de adayların seçici davranmasına neden oluyor.'],
           ['Sonuç', 'Teknik satış rollerindeki zorluk, yüzeyde görünen bir aday eksikliğinden çok daha fazlasıdır. Organizasyonel yapı, rol tasarımı ve pazar gerçeklerinin birlikte ele alınmasını gerektirir. Sürdürülebilir bir işe alım için yalnızca doğru adayı değil, doğru kurgulanmış bir rol ve yapı oluşturmak gerekir.']],
      en: [['', 'In Turkey, reaching the right candidates for sales roles in construction chemicals, industrial products and other technical fields is harder than ever. Today\'s situation is the result of several dynamics coming together.'],
           ['1. Role definitions are changing', 'Technical sales roles no longer require only product knowledge and field experience. Candidates are expected to bring technical depth, commercial thinking, relationship management and problem solving at the same time, which naturally narrows the pool.'],
           ['2. Candidate expectations have shifted', 'Experienced candidates no longer decide on salary and title alone. Decision speed, structural clarity, management style and career growth matter much more. If these aren\'t clear, strong candidates don\'t engage.'],
           ['3. Companies struggle to position the role', 'In many organizations the problem isn\'t finding candidates but defining the role. With vague expectations, unclear success criteria and an unsupportive structure, even the right hire can\'t succeed sustainably.'],
           ['4. The market is more competitive', 'The same candidate pool keeps moving within the same industry, pushing salary expectations up and making candidates more selective.'],
           ['Conclusion', 'The challenge is about much more than a visible shortage of candidates. It requires looking at structure, role design and market realities together. Sustainable hiring needs not just the right candidate, but a well-designed role and structure.']] } },
  { id: 'yanlis-ise-alim', cat: { tr: 'İşe Alım Stratejileri', en: 'Recruitment Strategy' }, mins: 4, calc: true,
    title: { tr: 'Yanlış İşe Alımın Gerçek Maliyeti Nedir?', en: 'What Is the Real Cost of a Bad Hire?' },
    lead: { tr: 'Yanlış işe alım yalnızca zaman kaybı değil; ekip dengesi ve iş sonuçları üzerinde doğrudan etkiler yaratır.', en: 'A bad hire isn\'t just lost time; it directly affects team balance and business results.' },
    body: {
      tr: [['', 'Bir pozisyonu hızlı doldurmak çoğu zaman doğru doldurmak anlamına gelmez. Özellikle kritik roller için yapılan yanlış işe alımlar, organizasyonun genel performansını etkileyen stratejik bir problemdir. Maliyet çoğu zaman yalnızca maaş ve süreç giderleri üzerinden değerlendirilir; oysa gerçek maliyet çok daha derindir.'],
           ['1. Zaman kaybı ve operasyonel aksama', 'Yanlış bir işe alım yeniden başlamak zorunda kalmaktır: pozisyon tekrar açılır, süreç baştan yürütülür, ekip üzerindeki yük artar. Bu da iş sürekliliğini doğrudan etkiler.'],
           ['2. Ekip dinamiklerinin bozulması', 'Uyumsuz bir aday, ekip içinde görünmeyen ama hissedilen bir etki yaratır: motivasyon düşer, iş paylaşımı dengesizleşir, iç iletişim zayıflar.'],
           ['3. Müşteri ve iş sonuçlarına etkisi', 'Özellikle satış ve müşteri temaslı rollerde müşteri ilişkileri zedelenebilir, fırsatlar kaçabilir ve marka algısı zarar görebilir. Bu etkiler geri döndürülmesi en zor olanlardır.'],
           ['4. Gizli finansal maliyet', 'Maaş ve yan haklar, eğitim ve oryantasyon, yönetim zamanı ve kaçırılan fırsatlar toplandığında tek bir yanlış kararın maliyeti beklenenden çok daha büyük olabilir.'],
           ['Sonuç', 'Doğru işe alım bir pozisyonu doldurmak değil, organizasyonun geleceğine yapılan bir yatırımdır. Süreç hız odaklı değil, doğruluk ve uyum odaklı kurgulanmalıdır.']],
      en: [['', 'Filling a position fast rarely means filling it right. Bad hires in critical roles are a strategic problem that affects overall performance. The cost is often judged only by salary and process expenses, but the real cost runs much deeper.'],
           ['1. Lost time and operational disruption', 'A bad hire means starting over: the role reopens, the process restarts and the team carries more load, which directly affects continuity.'],
           ['2. Damaged team dynamics', 'A poor fit creates an effect that\'s invisible but felt: motivation drops, workload becomes uneven and communication weakens.'],
           ['3. Impact on customers and results', 'Especially in sales and customer-facing roles, relationships can suffer, opportunities can be missed and the brand can be hurt. These are the hardest effects to reverse.'],
           ['4. Hidden financial cost', 'Add up salary and benefits, training and onboarding, management time and missed opportunities, and one wrong decision can cost far more than expected.'],
           ['Conclusion', 'The right hire isn\'t filling a seat; it\'s an investment in the organization\'s future. The process should be built for accuracy and fit, not speed.']] } },
  { id: 'dogru-aday', cat: { tr: 'Yetenek & Organizasyon', en: 'Talent & Organization' }, mins: 3,
    title: { tr: 'Doğru Aday Neden Tek Başına Yeterli Değildir?', en: 'Why Isn\'t the Right Candidate Enough on Their Own?' },
    lead: { tr: 'Başarılı bir işe alım, doğru adayın doğru rol ve yapı ile buluşmasını gerektirir.', en: 'Successful hiring requires the right candidate to meet the right role and structure.' },
    body: {
      tr: [['', 'İşe alımda en sık yanılgılardan biri, doğru aday bulunduğunda sürecin tamamlandığını düşünmektir. Oysa gerçek başarı, adayın organizasyon içinde sürdürülebilir performans gösterebilmesiyle ölçülür. Doğru aday, yanlış yapı içinde beklenen etkiyi yaratamaz.'],
           ['1. Rol tanımı ve beklentiler net olmalı', 'Başarı kriterleri net değilse, öncelikler değişkense ve rolün sınırları çizilmemişse aday zamanla yönünü kaybeder.'],
           ['2. Organizasyonel yapı destekleyici olmalı', 'Karar süreçleri yavaşsa, iç iletişim zayıfsa ve yetki-sorumluluk dengesi kurulmamışsa en iyi aday bile potansiyelini gerçekleştiremez.'],
           ['3. Yönetim yaklaşımı kritik rol oynar', 'Net yönlendirme, düzenli geri bildirim ve güven ortamı olmadan performans sürdürülebilir olmaz.'],
           ['4. Uyum (fit) faktörü göz ardı edilmemeli', 'Teknik yeterlilik tek başına yeterli değildir. Kültürel uyum, çalışma tarzı ve değerler örtüşmediğinde doğru aday bile yanlış seçim haline gelebilir.'],
           ['Sonuç', 'Doğru aday, doğru rol ve doğru organizasyonel yapı bir araya geldiğinde performans, bağlılık ve sürdürülebilir başarı mümkün olur.']],
      en: [['', 'A common misconception is that hiring is done once the right candidate is found. Real success is measured by sustained performance inside the organization. The right candidate can\'t make the expected impact in the wrong structure.'],
           ['1. Roles and expectations must be clear', 'If success criteria are unclear, priorities keep shifting and the role has no boundaries, the candidate loses direction over time.'],
           ['2. The structure must be supportive', 'With slow decisions, weak communication and no balance of authority and responsibility, even the best candidate can\'t reach their potential.'],
           ['3. Management style plays a critical role', 'Without clear direction, regular feedback and trust, performance isn\'t sustainable.'],
           ['4. Fit must not be ignored', 'Technical competence alone isn\'t enough. When culture, working style and values don\'t align, even the right candidate can become the wrong choice.'],
           ['Conclusion', 'When the right candidate, the right role and the right structure come together, performance, commitment and sustainable success become possible.']] } },
];

/* ---------------- Legal texts (anonymised) ---------------- */
const LEGAL = [
  { id: 'kvkk', icon: 'shield', title: { tr: 'KVKK Aydınlatma Metni', en: 'Privacy Notice (KVKK)' }, body: {
    tr: [['1. Veri Sorumlusu', 'Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca SXX İnsan Kaynakları Danışmanlığı Ltd. Şti. ("SXX Consultancy") tarafından kişisel verilerin işlenmesine ilişkin bilgilendirme amacıyla hazırlanmıştır.'], ['2. İşlenen Kişisel Veriler', 'Web sitesi iletişim formları, e-posta ve benzeri kanallar aracılığıyla ad, soyad, iletişim bilgileri (telefon, e-posta), şirket bilgisi ve mesaj içeriğinde paylaşılan bilgiler işlenebilir.'], ['3. İşlenme Amaçları', 'İletişim taleplerinin yanıtlanması, hizmet süreçlerinin yürütülmesi, danışmanlık faaliyetlerinin planlanması ve icrası ile yasal yükümlülüklerin yerine getirilmesi.'], ['4. Hukuki Sebep', 'KVKK\'nın 5. maddesinde belirtilen; sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun hukuki yükümlülüğü ve meşru menfaati.'], ['5. Aktarım', 'Kişisel verileriniz yalnızca hizmetin gerektirdiği ölçüde ve mevzuata uygun olarak yetkili kamu kurumlarına ve bilişim altyapı sağlayıcılarına aktarılabilir.'], ['6. Haklarınız', 'KVKK\'nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, düzeltilmesini ve silinmesini isteme haklarına sahipsiniz. Taleplerinizi ' + COMPANY.email + ' adresine iletebilirsiniz.'], ['7. Ücret Politikası', 'SXX Consultancy, faaliyetleri kapsamında iş arayanlardan hiçbir ad altında ücret talep etmez.']],
    en: [['1. Data Controller', 'This notice is provided by SXX İnsan Kaynakları Danışmanlığı Ltd. Şti. ("SXX Consultancy") under Turkish Personal Data Protection Law No. 6698 ("KVKK").'], ['2. Data Processed', 'Through contact forms, email and similar channels we may process name, contact details (phone, email), company information and any information shared in messages.'], ['3. Purposes', 'Responding to enquiries, delivering services, planning and carrying out consulting work, and meeting legal obligations.'], ['4. Legal Basis', 'Article 5 of KVKK: performance of a contract, compliance with legal obligations and legitimate interest.'], ['5. Transfers', 'Data may be shared only as required by the service and the law, with authorised public bodies and IT infrastructure providers.'], ['6. Your Rights', 'Under Article 11 you may ask whether your data is processed, request information, learn whether it is used for its purpose, and request correction or deletion. Send requests to ' + COMPANY.email + '.'], ['7. Fee Policy', 'SXX Consultancy never charges job seekers any fee.']] } },
  { id: 'acik-riza', icon: 'hand', title: { tr: 'Açık Rıza Metni', en: 'Explicit Consent Text' }, body: {
    tr: [['1. Veri Sorumlusu', 'Bu metin, SXX İnsan Kaynakları Danışmanlığı Ltd. Şti. tarafından KVKK kapsamında hazırlanmıştır.'], ['2. Açık Rızaya Konu Veriler', 'Paylaşılan özgeçmiş, eğitim bilgileri, iş deneyimi, referans ve iletişim bilgileri ile işe yerleştirme süreçleri için gerekli diğer kişisel veriler.'], ['3. İşleme Amaçları', 'İşe yerleştirme ve aday değerlendirme süreçlerinin yürütülmesi, uygun pozisyonlarla eşleştirme, potansiyel işverenlerle paylaşım ve ileride oluşabilecek pozisyonlar için veri tabanında saklama.'], ['4. Veri Aktarımı', 'Veriler yalnızca işe yerleştirmenin gerektirdiği ölçüde yurt içindeki potansiyel işverenlere ve teknik altyapı sağlayıcılarına aktarılabilir.'], ['5. Saklama Süresi', 'Veriler aday havuzunda azami 2 yıl saklanır; süre sonunda yeniden onay istenir veya veriler silinir.'], ['6. Beyan', 'KVKK Aydınlatma Metni\'ni okuduğumu, anladığımı ve yukarıdaki kapsamda kişisel verilerimin işlenmesine açık rıza verdiğimi kabul ederim.']],
    en: [['1. Data Controller', 'This text is prepared by SXX İnsan Kaynakları Danışmanlığı Ltd. Şti. under KVKK.'], ['2. Data Covered', 'CV, education, work experience, references, contact details and other data needed for placement.'], ['3. Purposes', 'Running placement and assessment processes, matching with suitable roles, sharing with potential employers and keeping data for future roles.'], ['4. Transfers', 'Data may be shared only as placement requires, with potential employers in Turkey and technical infrastructure providers.'], ['5. Retention', 'Data is kept in the candidate pool for up to 2 years; after that, consent is requested again or the data is deleted.'], ['6. Declaration', 'I confirm that I have read and understood the Privacy Notice and give explicit consent to the processing described above.']] } },
  { id: 'veri-saklama', icon: 'db', title: { tr: 'Veri Saklama ve İmha Politikası', en: 'Data Retention & Disposal Policy' }, body: {
    tr: [['1. Amaç', 'Adaylardan elde edilen kişisel verilerin saklanması, korunması ve gerektiğinde imhasına ilişkin esasları belirler.'], ['2. Kapsam', 'İş başvurusu yapan adaylara ait kişisel verilerin işlenmesi, saklanması ve imhasına ilişkin tüm süreçleri kapsar.'], ['3. Toplanan Veriler', 'Ad ve soyad, iletişim bilgileri, özgeçmiş, eğitim ve iş deneyimi, LinkedIn veya benzeri profesyonel profil bilgileri.'], ['4. Saklama Süresi', 'Aday verileri mevzuata uygun olarak en fazla 2 yıl saklanır.'], ['5. Veri Güvenliği', 'Yetkisiz erişim, kayıp veya kötüye kullanıma karşı gerekli teknik ve idari tedbirler alınır.'], ['6. Veri İmhası', 'Saklama süresi dolan veya hukuki sebebi ortadan kalkan veriler güvenli şekilde silinir, yok edilir veya anonim hale getirilir.'], ['7. Aday Hakları', 'Adaylar verilerinin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme ve silme haklarını kullanabilir.']],
    en: [['1. Purpose', 'Sets the rules for storing, protecting and, when needed, disposing of candidate data.'], ['2. Scope', 'Covers all processing, storage and disposal of data belonging to applicants.'], ['3. Data Collected', 'Name, contact details, CV, education and experience, LinkedIn or similar profiles.'], ['4. Retention Period', 'Candidate data is kept for up to 2 years in line with the law.'], ['5. Security', 'Technical and administrative measures protect against unauthorised access, loss or misuse.'], ['6. Disposal', 'Data past its retention period, or without a legal basis, is securely deleted, destroyed or anonymised.'], ['7. Candidate Rights', 'Candidates may ask whether their data is processed, request information, correction and deletion.']] } },
  { id: 'cerez', icon: 'cookie', title: { tr: 'Çerez Politikası', en: 'Cookie Policy' }, body: {
    tr: [['1. Amaç', 'Web sitesinde kullanılan çerezlere ilişkin bilgilendirme amacıyla hazırlanmıştır.'], ['2. Çerez Nedir?', 'Siteyi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır; tercihlerin hatırlanmasını ve deneyimin iyileştirilmesini sağlar.'], ['3. Çerez Türleri', 'Zorunlu, performans ve analitik, işlevsel ve (varsa) pazarlama çerezleri.'], ['4. Kullanım Amaçları', 'Sitenin güvenli çalışması, kullanıcı deneyiminin iyileştirilmesi, hizmet kalitesinin geliştirilmesi ve istatistiksel analiz.'], ['5. Yönetim', 'Tarayıcı ayarlarınızdan çerezleri kabul edebilir, reddedebilir veya silebilirsiniz; bu durumda bazı bölümler düzgün çalışmayabilir.'], ['6. Haklarınız', 'KVKK\'nın 11. maddesi kapsamındaki haklarınız için ' + COMPANY.email + ' adresine başvurabilirsiniz.']],
    en: [['1. Purpose', 'Explains the cookies used on this website.'], ['2. What Are Cookies?', 'Small text files saved on your device that remember preferences and improve your experience.'], ['3. Types', 'Strictly necessary, performance and analytics, functional and (if any) marketing cookies.'], ['4. Purposes', 'Secure operation, better user experience, service quality and statistical analysis.'], ['5. Managing Cookies', 'You can accept, refuse or delete cookies in your browser settings; some parts of the site may not work properly.'], ['6. Your Rights', 'For your rights under Article 11 of KVKK, contact ' + COMPANY.email + '.']] } },
  { id: 'etik', icon: 'scale', title: { tr: 'Etik Kurallar', en: 'Code of Ethics' }, body: {
    tr: [['1. Amaç', 'Tüm faaliyetlerimizi dürüstlük, şeffaflık ve profesyonel etik ilkeler çerçevesinde yürütmeyi taahhüt ederiz.'], ['2. Gizlilik', 'Aday ve müşteri bilgileri, ilgili tarafların bilgisi ve onayı olmadan üçüncü kişilerle paylaşılmaz.'], ['3. Tarafsızlık', 'Değerlendirmeler yalnızca adayların deneyimleri, yetkinlikleri ve pozisyona uygunlukları doğrultusunda yapılır.'], ['4. Şeffaflık', 'Tüm süreçlerde açık ve dürüst iletişim kurar, doğru ve zamanında bilgilendirme yaparız.'], ['5. Aday Haklarına Saygı', 'Adayların kişisel verileri ve kariyer bilgileri korunur; başvuru süreçlerinde adil ve saygılı bir yaklaşım benimsenir.'], ['6. Yasal Uyum', 'Tüm yasal düzenlemelere ve mesleki standartlara uyarız. 4904 sayılı Kanun gereğince adaylardan ücret talep edilmez.'], ['7. Profesyonel Sorumluluk', 'Kurumların ve adayların beklentilerini doğru anlamaya ve süreçleri sorumluluk bilinciyle yürütmeye özen gösteririz.'], ['8. Çıkar Çatışması ve Adil Temsil', 'Çıkar çatışması oluşmamasına özen gösterir, gerektiğinde şeffaf bilgilendirme yapar, adayları ve kurumları adil biçimde temsil ederiz.']],
    en: [['1. Purpose', 'We commit to conducting all activities with integrity, transparency and professional ethics.'], ['2. Confidentiality', 'Candidate and client information is never shared with third parties without the knowledge and consent of those concerned.'], ['3. Impartiality', 'Assessments are based solely on experience, competence and fit for the role.'], ['4. Transparency', 'We communicate openly and honestly, with accurate and timely updates.'], ['5. Respect for Candidates', 'Personal and career data is protected, and every applicant is treated fairly and respectfully.'], ['6. Legal Compliance', 'We comply with all regulations and professional standards. Under Law No. 4904, no fee is charged to candidates.'], ['7. Professional Responsibility', 'We take care to understand the expectations of organizations and candidates and act responsibly.'], ['8. Conflicts of Interest & Fair Representation', 'We avoid conflicts of interest, inform transparently when needed and represent candidates and organizations fairly.']] } },
];

/* ---------------- Job description and interview templates for the assistant ---------------- */
const ROLE_KB = [
  { k: ['satış', 'sales', 'satis'], fam: { tr: 'Satış', en: 'Sales' },
    resp: { tr: ['Hedef pazar ve müşteri portföyünün yönetimi', 'Yeni iş geliştirme ve teklif süreçleri', 'Satış hedeflerinin planlanması ve raporlanması', 'Teknik ekiplerle müşteri çözümleri geliştirme'], en: ['Managing target markets and the customer portfolio', 'New business development and proposals', 'Planning and reporting against sales targets', 'Building customer solutions with technical teams'] },
    comp: { tr: ['Ticari bakış açısı', 'İlişki yönetimi', 'Müzakere', 'Teknik ürün bilgisi'], en: ['Commercial acumen', 'Relationship management', 'Negotiation', 'Technical product knowledge'] },
    kpi: { tr: ['Ciro ve marj hedefleri', 'Yeni müşteri sayısı', 'Teklif-dönüşüm oranı'], en: ['Revenue and margin targets', 'New customers won', 'Proposal conversion rate'] } },
  { k: ['mühendis', 'engineer', 'teknik', 'üretim', 'production', 'muhendis'], fam: { tr: 'Mühendislik / Teknik', en: 'Engineering / Technical' },
    resp: { tr: ['Teknik projelerin planlanması ve yürütülmesi', 'Süreç iyileştirme ve verimlilik çalışmaları', 'Kalite ve iş güvenliği standartlarına uyum', 'Ekipler arası teknik koordinasyon'], en: ['Planning and delivering technical projects', 'Process improvement and efficiency', 'Compliance with quality and safety standards', 'Technical coordination across teams'] },
    comp: { tr: ['Analitik düşünme', 'Problem çözme', 'Proje yönetimi', 'Teknik dokümantasyon'], en: ['Analytical thinking', 'Problem solving', 'Project management', 'Technical documentation'] },
    kpi: { tr: ['Proje zamanında teslim oranı', 'Verimlilik artışı', 'Hata / ret oranı'], en: ['On-time project delivery', 'Efficiency gains', 'Defect / rejection rate'] } },
  { k: ['finans', 'finance', 'muhasebe', 'accounting', 'cfo', 'mali'], fam: { tr: 'Finans', en: 'Finance' },
    resp: { tr: ['Bütçe ve finansal planlama', 'Raporlama ve yönetim analizleri', 'Nakit akışı ve risk yönetimi', 'Mevzuat ve denetim uyumu'], en: ['Budgeting and financial planning', 'Reporting and management analysis', 'Cash flow and risk management', 'Regulatory and audit compliance'] },
    comp: { tr: ['Finansal analiz', 'Detay odaklılık', 'Raporlama', 'İş ortaklığı'], en: ['Financial analysis', 'Attention to detail', 'Reporting', 'Business partnering'] },
    kpi: { tr: ['Raporlama doğruluğu ve zamanlaması', 'Bütçe sapma oranı', 'Denetim bulguları'], en: ['Reporting accuracy and timeliness', 'Budget variance', 'Audit findings'] } },
  { k: ['insan kaynak', 'ik ', 'hr', 'human resources', 'işe alım', 'recruit'], fam: { tr: 'İnsan Kaynakları', en: 'Human Resources' },
    resp: { tr: ['İşe alım ve oryantasyon süreçleri', 'Performans ve yetenek yönetimi', 'Ücret ve yan hak yönetimi', 'Çalışan bağlılığı ve iç iletişim'], en: ['Recruitment and onboarding', 'Performance and talent management', 'Compensation and benefits', 'Engagement and internal communication'] },
    comp: { tr: ['İletişim', 'Gizlilik ve etik', 'Süreç tasarımı', 'Veri odaklılık'], en: ['Communication', 'Confidentiality and ethics', 'Process design', 'Data orientation'] },
    kpi: { tr: ['Pozisyon doldurma süresi', 'İlk yıl çalışan devir oranı', 'Bağlılık skoru'], en: ['Time to fill', 'First-year attrition', 'Engagement score'] } },
  { k: ['yönetici', 'müdür', 'direktör', 'manager', 'director', 'head', 'lider', 'ceo', 'genel müdür'], fam: { tr: 'Yönetim', en: 'Leadership' },
    resp: { tr: ['Strateji ve hedeflerin belirlenmesi', 'Ekip liderliği ve gelişimi', 'Bütçe ve kaynak yönetimi', 'Paydaş ve üst yönetim iletişimi'], en: ['Setting strategy and objectives', 'Leading and developing the team', 'Budget and resource management', 'Stakeholder and board communication'] },
    comp: { tr: ['Stratejik düşünme', 'Liderlik', 'Karar verme', 'Değişim yönetimi'], en: ['Strategic thinking', 'Leadership', 'Decision making', 'Change management'] },
    kpi: { tr: ['İş birimi hedefleri', 'Ekip bağlılığı ve devir oranı', 'Stratejik projelerin ilerlemesi'], en: ['Business unit targets', 'Team engagement and attrition', 'Progress on strategic projects'] } },
];
