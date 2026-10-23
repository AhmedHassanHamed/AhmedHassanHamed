"use strict";

const $ = (s) => document.querySelector(s);
const root = document.documentElement;
const EMAIL = "ahmed.hassan.dev77@gmail.com";
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const get = (k, d) => {
  try {
    return localStorage.getItem(k) || d;
  } catch (e) {
    return d;
  }
};
const set = (k, v) => {
  try {
    localStorage.setItem(k, v);
  } catch (e) {}
};

/* ---------- Translations ---------- */
const T = {
  en: {
    title: "Ahmed Hassan | Front-End Developer",
    skip: "Skip to content",
    brand: "Ahmed Hassan",
    nav1: "Services",
    nav2: "Work",
    nav3: "About",
    nav4: "Contact",
    switch: "العربية",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    badge: "Available for freelance work",
    h1: "I build fast websites that work in Arabic and English.",
    sub: "Front-end developer. Landing pages, stores, and web tools made with HTML, CSS, and JavaScript.",
    cta1: "See my work",
    cta2: "Hire me on WhatsApp",
    f1: "Live projects",
    f2: "Languages in every project",
    f3: "Coding since",
    sTitle: "What I can build for you",
    sLead: "Clear, fast, and easy to use on any screen.",
    s1t: "Landing pages",
    s1d: "One focused page that explains your offer and makes it easy to contact you.",
    s2t: "Business websites",
    s2d: "Multi-page sites that look right on phones, tablets, and desktops.",
    s3t: "Store front-ends",
    s3d: "Products, cart, wishlist, and checkout that sends the order to WhatsApp.",
    s4t: "Design to code",
    s4d: "Your Figma or PSD design turned into clean HTML and CSS.",
    wTitle: "Selected work",
    wLead: "Real projects with live demos you can open and try.",
    live: "Live demo",
    buy: "Buy on Khamsat",
    aTitle: "About me",
    aText:
      "I started coding in 2026 and publish everything I build. Next I'm learning React and back-end development, so I can build full web apps.",
    aTools: "Tools I use",
    cTitle: "Let's work together",
    cText: "Tell me about your project and I'll get back to you.",
    email: "Email",
    khamsat: "Khamsat",
    mostaql: "Mostaql",
    also: "Also find me on",
    copy: "Copy email address",
    copied: "Email copied.",
    copyFail: "Could not copy. The address is ",
    foot: "Ahmed Hassan. All rights reserved.",
  },
  ar: {
    title: "أحمد حسن | مطوّر واجهات أمامية",
    skip: "تخطي إلى المحتوى",
    brand: "أحمد حسن",
    nav1: "الخدمات",
    nav2: "الأعمال",
    nav3: "نبذة",
    nav4: "تواصل",
    switch: "English",
    themeLight: "التبديل إلى الوضع النهاري",
    themeDark: "التبديل إلى الوضع الليلي",
    badge: "متاح لمشاريع العمل الحر",
    h1: "أبني مواقع سريعة تعمل بالعربية والإنجليزية.",
    sub: "مطوّر واجهات أمامية. صفحات هبوط ومتاجر وأدوات ويب بـ HTML وCSS وJavaScript.",
    cta1: "شاهد أعمالي",
    cta2: "تواصل معي على واتساب",
    f1: "مشاريع منشورة",
    f2: "لغتان في كل مشروع",
    f3: "أبرمج منذ",
    sTitle: "ماذا أستطيع أن أبني لك",
    sLead: "مواقع واضحة وسريعة وسهلة الاستخدام على أي شاشة.",
    s1t: "صفحات الهبوط",
    s1d: "صفحة واحدة مركّزة تشرح عرضك وتسهّل التواصل معك.",
    s2t: "مواقع الشركات",
    s2d: "مواقع متعددة الصفحات تظهر بشكل سليم على الموبايل والتابلت والكمبيوتر.",
    s3t: "واجهات المتاجر",
    s3d: "منتجات وسلة ومفضلة وإتمام طلب يرسل الطلب إلى واتساب.",
    s4t: "من التصميم إلى الكود",
    s4d: "تصميمك من Figma أو PSD يتحول إلى HTML وCSS نظيف.",
    wTitle: "أعمال مختارة",
    wLead: "مشاريع حقيقية بنسخ تجريبية يمكنك فتحها وتجربتها.",
    live: "النسخة التجريبية",
    buy: "اشترِ من خمسات",
    aTitle: "نبذة عني",
    aText:
      "بدأت البرمجة في 2026 وأنشر كل ما أبنيه. أتعلّم الآن React وتطوير الخلفية لأبني تطبيقات ويب كاملة.",
    aTools: "الأدوات التي أستخدمها",
    cTitle: "لنعمل معاً",
    cText: "أخبرني عن مشروعك وسأرد عليك.",
    email: "البريد",
    khamsat: "خمسات",
    mostaql: "مستقل",
    also: "تجدني أيضاً على",
    copy: "نسخ البريد الإلكتروني",
    copied: "تم نسخ البريد.",
    copyFail: "تعذّر النسخ. العنوان هو ",
    foot: "أحمد حسن. جميع الحقوق محفوظة.",
  },
};

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    img: "imgs1/store.png",
    live: "https://ahmedhassanhamed.github.io/Shamaet-Nour-Store/",
    tech: ["HTML", "CSS", "JavaScript", "RTL / LTR", "localStorage"],
    en: [
      "Shamaet Nour Store",
      "A bilingual storefront for candles, perfumes, and home decor with search and filters, cart, wishlist, dark mode, and WhatsApp checkout.",
    ],
    ar: [
      "متجر شمعة نور",
      "واجهة متجر ثنائية اللغة للشموع والعطور وديكور المنزل، مع بحث وفلاتر وسلة ومفضلة ووضع ليلي وإتمام الطلب عبر واتساب.",
    ],
  },
  {
    img: "imgs1/CV.png",
    live: "https://ahmedhassanhamed.github.io/CV_Builder/",
    buy: "https://khamsat.com/programming/scripting/4473545-%D8%A3%D8%AF%D8%A7%D8%A9-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D9%84%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%D8%B3%D9%8A%D8%B1%D8%A9-%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A-%D9%88%D8%A7%D9%84%D8%A5%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "docx.js",
      "qrcode-generator",
    ],
    en: [
      "CV Builder (AR/EN)",
      "A bilingual CV builder with 7 templates, live preview, PDF and Word (.docx) export, a cover letter generator, an ATS checklist, and drag-and-drop sections. Data is saved in the browser.",
    ],
    ar: [
      "منشئ السيرة الذاتية (عربي/إنجليزي)",
      "منشئ سير ذاتية ثنائي اللغة بـ 7 قوالب ومعاينة مباشرة وتصدير PDF وWord، مع مولّد خطاب تقديم وقائمة ATS وسحب وإفلات للأقسام. البيانات تُحفظ في المتصفح.",
    ],
  },
  {
    img: "imgs1/cover.png",
    live: "https://ahmedhassanhamed.github.io/Invoice_Generator/",
    buy: "https://khamsat.com/programming/custom-website-development/4472031-%D9%86%D8%B8%D8%A7%D9%85-%D9%81%D9%88%D8%A7%D8%AA%D9%8A%D8%B1-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A-%D8%B9%D8%B1%D8%A8%D9%8A-%D9%88%D8%A5%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A-%D9%85%D8%B9-%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A9-%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8-%D9%88%D9%88%D8%B6%D8%B9-%D9%84%D9%8A%D9%84%D9%8A",
    tech: ["HTML", "CSS", "JavaScript", "localStorage", "html2pdf.js"],
    en: [
      "Invoice Generator (AR/EN)",
      "A bilingual invoice generator with PDF and PNG export, WhatsApp sharing, dark mode, a deposit calculator, client autocomplete, and backup/restore. Data is saved in the browser.",
    ],
    ar: [
      "نظام الفواتير (عربي/إنجليزي)",
      "نظام فواتير ثنائي اللغة مع تصدير PDF وPNG ومشاركة واتساب ووضع ليلي وحاسبة عربون واقتراح العملاء ونسخ احتياطي واستعادة. البيانات تُحفظ في المتصفح.",
    ],
  },
  {
    img: "imgs1/expense.png",
    live: "https://ahmedhassanhamed.github.io/expense-tracker/",
    buy: "https://khamsat.com/programming/custom-website-development/4477123-%D9%85%D9%88%D9%82%D8%B9-%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84-%D9%88%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%88%D9%81%D8%A7%D8%AA-%D8%A8%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    en: [
      "Expense Tracker",
      "A responsive tracker to record daily spending, organize it by category, and see the running total at a glance, with a category breakdown shown as progress bars. Data stays private in your browser.",
    ],
    ar: [
      "متتبّع المصروفات",
      "متتبّع متجاوب لتسجيل مصروفاتك اليومية وتصنيفها ومعرفة الإجمالي بنظرة، مع توزيع الفئات بأشرطة تقدّم. بياناتك تبقى خاصة في متصفحك.",
    ],
  },
];

/* ---------- Language ---------- */
let lang = get("lang", navigator.language.startsWith("ar") ? "ar" : "en");

function renderProjects() {
  const t = T[lang];
  $("#cases").innerHTML = PROJECTS.map((p) => {
    const [name, desc] = p[lang];
    return `<article class="case">
      <div class="frame">
        <div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>${new URL(p.live).host}</span></div>
        <img src="${p.img}" alt="${name}" width="640" height="400" loading="lazy" decoding="async" onerror="this.remove()" />
      </div>
      <div>
        <h3>${name}</h3>
        <p>${desc}</p>
        <ul class="tech">${p.tech.map((x) => `<li>${x}</li>`).join("")}</ul>
        <div class="actions">
          <a class="btn" href="${p.live}" target="_blank" rel="noopener">${t.live}</a>
          ${p.buy ? `<a class="btn ghost" href="${p.buy}" target="_blank" rel="noopener">${t.buy}</a>` : ""}
        </div>
      </div>
    </article>`;
  }).join("");
}

function setTheme(theme) {
  root.dataset.theme = theme;
  $("#themeBtn").textContent = theme === "dark" ? "☾" : "☀";
  $("#themeBtn").setAttribute(
    "aria-label",
    theme === "dark" ? T[lang].themeLight : T[lang].themeDark,
  );
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.content = theme === "dark" ? "#0c1222" : "#f6f7fb";
}

function setLang(l) {
  lang = l;
  set("lang", l);
  root.lang = l;
  root.dir = l === "ar" ? "rtl" : "ltr";
  document.title = T[l].title;
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.textContent = T[l][el.dataset.i18n]));
  $("#langBtn").textContent = T[l].switch;
  setTheme(root.dataset.theme);
  renderProjects();
}

/* ---------- Init ---------- */
root.dataset.theme = get("theme", "dark");
$("#nProjects").textContent = PROJECTS.length;
$("#year").textContent = new Date().getFullYear();
setLang(lang);

$("#langBtn").addEventListener("click", () =>
  setLang(lang === "en" ? "ar" : "en"),
);
$("#themeBtn").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  set("theme", next);
  setTheme(next);
});

const menuBtn = $("#menuBtn");
const links = $("#links");
const setMenu = (open) => {
  links.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
};
menuBtn.addEventListener("click", () =>
  setMenu(menuBtn.getAttribute("aria-expanded") !== "true"),
);
links.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
document.addEventListener(
  "keydown",
  (e) => e.key === "Escape" && setMenu(false),
);

$("#copyBtn").addEventListener("click", async () => {
  const status = $("#status");
  try {
    await navigator.clipboard.writeText(EMAIL);
    status.textContent = T[lang].copied;
  } catch (e) {
    status.textContent = T[lang].copyFail + EMAIL;
  }
  setTimeout(() => (status.textContent = ""), 3000);
});
