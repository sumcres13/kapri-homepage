const english = {
  "skip": "Skip to content",
  "companyName": "KAPRI Co., Ltd.",
  "navHome": "HOME",
  "navAbout": "ABOUT US",
  "navAccess": "SHOP ACCESS",
  "navReservation": "RESERVATION",
  "footerTagline": "Connecting people and cultures through food.",
  "footerContact": "CONTACT",
  "storeHinoShort": "Asakusabashi",
  "storeHachiojiShort": "Shin-Koenji",
  "pageTop": "BACK TO TOP ↑",
  "homeHeroTitle": "Connecting people<br><em>and cultures through food.</em>",
  "homeHeroLead": "Diverse Asian flavors and warm, welcoming moments.<br>Visit our restaurants in Asakusabashi and Shin-Koenji.",
  "homeHeroReserve": "RESERVE A TABLE",
  "homeHeroAccess": "SHOP ACCESS",
  "homeIntroLabel": "ABOUT KAPRI",
  "homeIntroTitle": "Bringing people<br>together through food.",
  "homeIntroP1": "KAPRI Co., Ltd. operates Indian Naan House Asakusabashi and Asian Restaurant & Bar Godawari Shin-Koenji.",
  "homeIntroP2": "We believe food brings people together and adds richness and warmth to everyday life.",
  "companyOverviewMessage": "KAPRI Co., Ltd. operates Indian Naan House in Asakusabashi and Asian Restaurant & Bar Godawari in Shin-Koenji. Through food, we connect people and bring richness and warmth to everyday life.",
  "homeIntroLink": "ABOUT US ↗",
  "homeShopsEyebrow": "OUR RESTAURANTS",
  "homeShopsTitle": "Two neighborhoods, two experiences",
  "storeHinoIndex": "ASAKUSABASHI",
  "storeHachiojiIndex": "SHIN-KOENJI",
  "hinoName": "Indian Naan House",
  "hachiojiName": "Asian Restaurant & Bar Godawari",
  "hachiojiNameLong": "Asian Restaurant & Bar<br>Godawari Shin-Koenji",
  "homeHinoSummary": "Authentic Asian cuisine and handmade masala in Asakusabashi.",
  "homeHachiojiSummary": "Asian cuisine, appetizers and drinks in Shin-Koenji.",
  "shopInfoLink": "VIEW SHOP DETAILS ↗",
      "snsLabel": "SNS",
  "snsTitle": "Stay up to date<br>with our restaurants.",
  "snsDetail": "Follow Indian Naan House on LINE for shop updates.",
  "snsShopNote": "Indian Naan House official LINE",
  "lineButton": "VIEW ASAKUSABASHI ON LINE",
  "instagramIndonan": "Indian Naan House · Asakusabashi",
  "instagramGodawari": "Godawari · Shin-Koenji",
  "aboutValuesTitle": "What we value",
  "aboutValue1": "Asian food culture",
  "aboutValue1Detail": "We share diverse Asian flavors, especially from India and Nepal.",
  "aboutValue2": "A welcoming time",
  "aboutValue2Detail": "Enjoy a comfortable visit, whether you come alone or with friends.",
  "aboutValue3": "New challenges",
  "aboutValue3Detail": "We build on what our restaurants have taught us and explore wider services.",
  "companyProfileTitle": "Company information",
  "companyFieldName": "Company",
  "companyFieldBusiness": "Business",
    "accessTitle": "Our restaurants",
  "accessHinoName": "Indian Naan House",
  "accessHachiojiName": "Asian Restaurant & Bar<br>Godawari Shin-Koenji",
  "addressLabel": "Address",
  "phoneLabel": "Phone",
  "mapLink": "OPEN MAP ↗",
  "reserveThisStore": "RESERVE HERE ↗",
  "accessHinoHeading": "Authentic Asian cuisine<br>with handmade masala.",
  "accessHinoP1": "Indian Nan House Asakusabashi is an authentic Asian restaurant specializing in handmade masala and traditional flavors. We serve a variety of Indian and Nepali dishes, along with selected Asian specialties.",
  "accessHinoP2": "Our popular items include chicken biryani, cheese naan, and izakaya-style dishes. Guests can enjoy casual dining from lunch to dinner.",
  "accessHachiojiHeading": "Asian food and drinks<br>for every occasion.",
  "accessHachiojiP1": "Asian Restaurant & Bar Godawari Shin-Koenji offers authentic Asian cuisine along with a wide variety of appetizers and drinks at reasonable prices. From small dishes like chicken skin ponzu to draft beer, our menu is designed for casual and easy dining.",
  "accessHachiojiP2": "Whether you are dining alone or gathering with friends, our restaurant is perfect for a wide range of occasions, from quick visits to group parties.",
    "reservationTitle": "Choose your shop",
  "hinoAddressShort": "2-7-10 Yanagibashi, Taito-ku, Tokyo",
  "hachiojiAddressShort": "B1F, 2-13-1 Koenji-minami, Suginami-ku, Tokyo",
  "shopAccessLink": "SHOP ACCESS ↗",
  "ceoRole": "Representative",
  "ceoName": "Kamala Kapri",
  "ceoMessage1": "Thank you very much for visiting our website.",
  "ceoMessage2": "Kapri Co., Ltd. has been delivering diverse Asian food culture and comfortable experiences through the operation of Indian Naan House Asakusabashi and Asian Restaurant & Bar Godawari Shin-Koenji.",
  "ceoMessage3": "We believe that the food service industry is not simply about providing meals, but about connecting people and bringing richness and warmth into everyday life.",
  "ceoMessage4": "Moving forward, we will continue to value what we have built at each of our restaurants, while expanding beyond the boundaries of the food industry and taking on new challenges in a wider range of services, aiming to become a company that is truly needed by society.",
  "companyFieldRepresentative": "Representative",
  "companyFieldHino": "Shop 1",
  "companyFieldHachioji": "Shop 2",
  "companyFieldContact": "Contact",
  "companyBusinessFull": "Operation of Indian Naan House Asakusabashi and Asian Restaurant & Bar Godawari Shin-Koenji",
  "hoursLabel": "Hours",
  "holidayLabel": "Regular holiday",
  "noHoliday": "None",
  "hinoHours": "11:00–15:00, 16:30–22:30",
  "hachiojiHours": "11:00–23:00",
  "reserveEyebrow": "RESERVATION",
  "reservationIntro": "Explore reservations and delivery options for both restaurants.",
  "reserveMethodsHeading": "Reserve a table",
  "deliveryHeading": "Delivery",
  "bookTabelog": "View on Tabelog",
  "bookGurunavi": "Reserve on Rakuten Gurunavi",
  "bookPhone": "Reserve by phone",
  "viewShopPage": "VIEW SHOP PAGE",
  "viewReservationPage": "VIEW RESERVATION PAGE",
  "bookPhoneNumberHino": "03-3861-8030",
  "bookPhoneNumberHachioji": "03-5913-9199"
};

const translations = [...document.querySelectorAll('[data-i18n]')];
translations.forEach((element) => { element.dataset.jaHtml = element.innerHTML; });
const languageButton = document.querySelector('.lang-toggle');
const pageNames = {
  home: { ja: 'ＫＡＰＲＩ株式会社｜私たちについて・店舗案内・ご予約', en: 'KAPRI | About, Restaurants & Reservations' },
  about: { ja: '私たちについて｜ＫＡＰＲＩ株式会社', en: 'ABOUT KAPRI | KAPRI' },
  access: { ja: 'SHOP ACCESS｜ＫＡＰＲＩ株式会社', en: 'SHOP ACCESS | KAPRI' },
  reservation: { ja: 'RESERVATION｜ＫＡＰＲＩ株式会社', en: 'RESERVATION | KAPRI' }
};
let language = 'ja';
try { language = localStorage.getItem('kapri-language') === 'en' ? 'en' : 'ja'; } catch { /* Local files may restrict storage. */ }
const requestedLanguage = new URLSearchParams(location.search).get('lang');
if (requestedLanguage === 'ja' || requestedLanguage === 'en') language = requestedLanguage;
const metaDescription = document.querySelector('meta[name=description]');
const originalDescription = metaDescription?.content || '';
const englishDescriptions = {
  home: 'Meet KAPRI Co., Ltd. and explore Indian Naan House Asakusabashi and Godawari Shin-Koenji, including access, reservations and delivery.',
  about: 'A message from the representative of KAPRI Co., Ltd. and company information.',
  access: 'Addresses, hours, maps and introductions for Indian Naan House and Godawari.',
  reservation: 'Reservation and delivery information for Indian Naan House and Godawari.'
};
const imageAlts = [...document.querySelectorAll('img[alt]')].map((image) => ({ image, ja: image.alt }));
const altEnglish = {
  'kapri-hero.png': 'Dining room at Godawari Shin-Koenji',
  'indonan-exterior.png': 'Indian Naan House exterior in Asakusabashi',
  'godawari-exterior.png': 'Godawari exterior in Shin-Koenji',
  'indonan-interior.png': 'Dining area at Indian Naan House',
  'indonan-interior-2.png': 'Tables inside Indian Naan House',
  'godawari-interior-1.png': 'Tables inside Godawari',
  'godawari-interior-2.png': 'Dining area at Godawari',
  'godawari-interior-3.png': 'Dining room at Godawari',
  'ceo-portrait.png': 'Portrait of Kamala Kapri',
  'indonan-logo.png': 'Indian Naan House logo',
  'godawari-logo.png': 'Godawari logo'
};
const japaneseText = /[\u3040-\u30ff\u3400-\u9fff\uff66-\uff9f々〆]/;
function applyJapaneseLineBreaks() {
  const parser = window.ranzanaBudoux;
  if (!parser) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.parentElement?.closest('script, style, noscript, textarea, svg, code, pre, [contenteditable="true"]')) continue;
    if (japaneseText.test(node.nodeValue)) nodes.push(node);
  }
  nodes.forEach((node) => {
    const source = node.nodeValue.replace(/\u200b/g, '');
    const segmented = parser.parse(source).join('\u200b');
    if (node.nodeValue !== segmented) node.nodeValue = segmented;
  });
  document.documentElement.classList.add('budoux-ready');
}
function applyLanguage(nextLanguage) {
  language = nextLanguage;
  translations.forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = language === 'en' ? (english[key] ?? element.dataset.jaHtml) : element.dataset.jaHtml;
  });
  document.documentElement.lang = language;
  const page = document.body.dataset.page;
  if (pageNames[page]) document.title = pageNames[page][language];
  if (metaDescription) metaDescription.content = language === 'en' ? (englishDescriptions[page] || originalDescription) : originalDescription;
  if (languageButton) {
    languageButton.textContent = language === 'en' ? '日本語' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? '日本語に切り替える' : 'Switch to English');
  }
  imageAlts.forEach(({ image, ja }) => {
    const filename = image.getAttribute('src')?.split('/').pop();
    image.alt = language === 'en' ? (altEnglish[filename] ?? ja) : ja;
  });
  const menuButton = document.querySelector('.menu-toggle');
  if (menuButton) menuButton.setAttribute('aria-label', language === 'en' ? 'Open menu' : 'メニューを開く');
  document.querySelector('.site-nav')?.setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'メインナビゲーション');
  document.querySelector('.footer-nav')?.setAttribute('aria-label', language === 'en' ? 'Footer navigation' : 'フッターナビゲーション');
  document.querySelector('.reservation-deck')?.setAttribute('aria-label', language === 'en' ? 'Reservations and delivery by shop' : '店舗別のご予約とデリバリー');
  document.querySelectorAll('.deck-peek').forEach((button, index) => button.setAttribute('aria-label', language === 'en' ? `Show ${index === 0 ? 'Asakusabashi' : 'Shin-Koenji'} shop` : `${index === 0 ? '浅草橋店' : '新高円寺店'}を前に表示`));
  document.querySelectorAll('.access-map iframe').forEach((frame, index) => { frame.title = language === 'en' ? `Map to the ${index === 0 ? 'Asakusabashi' : 'Shin-Koenji'} shop` : `${index === 0 ? '浅草橋店' : '新高円寺店'}の地図`; });
  document.querySelectorAll('.access-shop-logo').forEach((logo, index) => { logo.alt = language === 'en' ? `${index === 0 ? 'Asakusabashi' : 'Shin-Koenji'} shop logo` : `${index === 0 ? '浅草橋店' : '新高円寺店'}のロゴ`; });
  document.querySelector('.line-button')?.setAttribute('aria-label', language === 'en' ? 'Official LINE account for Indian Naan House' : 'インド ナンハウスのLINE公式アカウント');
  document.querySelector('.ceo-section')?.setAttribute('aria-label', language === 'en' ? 'Message from the representative' : '代表者メッセージ');
  document.querySelectorAll('.instagram-button').forEach((link, index) => { const store = index === 0 ? 'Indian Naan House, Asakusabashi' : 'Godawari, Shin-Koenji'; const storeJa = index === 0 ? 'インド ナンハウス 浅草橋店' : 'ゴダワリ 新高円寺'; link.setAttribute('aria-label', language === 'en' ? `Instagram for ${store}` : `${storeJa}の公式Instagram`); });
  document.querySelectorAll('[data-shop-slideshow]').forEach((gallery) => { const hino = gallery.dataset.shopSlideshow === 'hino'; const shopJa = hino ? 'インド ナンハウス 浅草橋店' : 'ゴダワリ 新高円寺店'; const shopEn = hino ? 'Indian Naan House, Asakusabashi' : 'Godawari, Shin-Koenji'; gallery.setAttribute('aria-label', language === 'en' ? `Photo slideshow for ${shopEn}` : `${shopJa}の写真スライド`); gallery.querySelector('.godawari-slide-controls')?.setAttribute('aria-label', language === 'en' ? 'Photo slideshow controls' : 'スライド操作'); gallery.querySelectorAll('[data-slideshow-direction]').forEach((button) => button.setAttribute('aria-label', language === 'en' ? (button.dataset.slideshowDirection === '-1' ? 'Previous photo' : 'Next photo') : (button.dataset.slideshowDirection === '-1' ? '前の写真' : '次の写真'))); gallery.querySelectorAll('[data-slideshow-index]').forEach((button, index) => button.setAttribute('aria-label', language === 'en' ? `Show photo ${index + 1}` : `写真 ${index + 1}`)); });
  document.querySelectorAll('.delivery-method').forEach((link) => {
    const brand = link.querySelector('span')?.textContent || '';
    link.setAttribute('aria-label', language === 'en' ? `Order from ${brand}` : `${brand}で注文`);
  });
  applyJapaneseLineBreaks();
}
applyLanguage(language);
languageButton?.addEventListener('click', () => {
  const next = language === 'ja' ? 'en' : 'ja';
  try { localStorage.setItem('kapri-language', next); } catch { /* Keep the switch active in this page. */ }
  applyLanguage(next);
  const url = new URL(location.href);
  if (next === 'en') url.searchParams.set('lang', 'en');
  else url.searchParams.delete('lang');
  history.replaceState(null, '', url.href);
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const updateHeader = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', language === 'en' ? (open ? 'Open menu' : 'Close menu') : (open ? 'メニューを開く' : 'メニューを閉じる'));
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
}


const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sectionIds = ['home', 'about', 'access', 'reservation'];
function updateActiveSection() {
  let activeSection = 'home';
  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) activeSection = id;
  }
  sectionLinks.forEach((link) => {
    if (link.getAttribute('href') === `#${activeSection}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('hashchange', updateActiveSection);
updateActiveSection();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-shop-slideshow]').forEach((gallery) => {
  const slides = [...gallery.querySelectorAll('.godawari-slide')];
  const dots = [...gallery.querySelectorAll('[data-slideshow-index]')];
  if (!slides.length) return;
  let active = 0;
  let timer = null;
  const show = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const current = i === active;
      slide.classList.toggle('is-active', current);
      slide.setAttribute('aria-hidden', String(!current));
    });
    dots.forEach((dot) => dot.setAttribute('aria-current', String(Number(dot.dataset.slideshowIndex) === active)));
  };
  const stop = () => { if (timer) window.clearInterval(timer); timer = null; };
  const start = () => {
    stop();
    if (slides.length > 1 && !reducedMotion.matches && !document.hidden && !gallery.contains(document.activeElement)) timer = window.setInterval(() => show(active + 1), 6000);
  };
  gallery.querySelectorAll('[data-slideshow-direction]').forEach((button) => button.addEventListener('click', () => { show(active + Number(button.dataset.slideshowDirection)); start(); }));
  dots.forEach((dot) => dot.addEventListener('click', () => { show(Number(dot.dataset.slideshowIndex)); start(); }));
  gallery.addEventListener('pointerenter', stop);
  gallery.addEventListener('pointerleave', start);
  gallery.addEventListener('focusin', stop);
  gallery.addEventListener('focusout', (event) => { if (!gallery.contains(event.relatedTarget)) start(); });
  document.addEventListener('visibilitychange', start);
  reducedMotion.addEventListener?.('change', start);
  show(0);
  start();
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());



