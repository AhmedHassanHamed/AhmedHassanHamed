/* Loads after script.js. Edit SERVICES (prices, texts, images) and REVIEWS. */
(function () {
  const WA = "201147729020";
  const SERVICES = [
    {
      id: "store",
      img: "imgs1/svc-store.svg",
      prices: [120, 220, 380],
      days: ["5-7", "8-12", "14-20"],
      en: [
        "Custom online store",
        "Your products are great but hard to show online? I build a store around your brand, your products, and the way you sell. Front-end store: orders arrive on WhatsApp (no online payment or admin dashboard).",
        [
          [
            "Up to 12 products",
            "Cart + WhatsApp checkout",
            "Mobile-friendly design",
          ],
          [
            "Up to 40 products with search and filters",
            "Wishlist + Arabic/English",
            "Design matched to your colors",
          ],
          [
            "Fully custom look built from your brand",
            "Product pages + discount code field",
            "30 days support",
          ],
        ],
      ],
      ar: [
        "متجر إلكتروني مفصّل عليك",
        "منتجاتك ممتازة لكن لا تعرف كيف تعرضها؟ أبني لك متجراً حول علامتك ومنتجاتك وطريقة بيعك. متجر واجهة أمامية: الطلبات تصل عبر واتساب (بدون دفع إلكتروني أو لوحة تحكم).",
        [
          [
            "حتى 12 منتجاً",
            "سلة وإتمام طلب عبر واتساب",
            "تصميم متجاوب مع الموبايل",
          ],
          [
            "حتى 40 منتجاً مع بحث وفلاتر",
            "مفضلة + عربي/إنجليزي",
            "تصميم بألوان علامتك",
          ],
          [
            "شكل مفصّل بالكامل من هويتك",
            "صفحات منتجات + خانة كود خصم",
            "دعم 30 يوماً",
          ],
        ],
      ],
    },
    {
      id: "landing",
      img: "imgs1/svc-landing.svg",
      prices: [40, 70, 110],
      days: ["2", "3-4", "5-7"],
      en: [
        "Landing page",
        "One focused page that explains your offer and makes it easy to contact you.",
        [
          [
            "One mobile-friendly page",
            "Your text and images",
            "WhatsApp button",
          ],
          ["Arabic + English", "Contact form to WhatsApp", "Light animations"],
          [
            "Custom design from your brand",
            "Speed and basic SEO",
            "30 days support",
          ],
        ],
      ],
      ar: [
        "صفحة هبوط",
        "صفحة واحدة مركّزة تشرح عرضك وتسهّل التواصل معك.",
        [
          ["صفحة واحدة متجاوبة", "نصوصك وصورك", "زر واتساب"],
          ["عربي + إنجليزي", "نموذج تواصل إلى واتساب", "حركات خفيفة"],
          ["تصميم مفصّل من هويتك", "سرعة وSEO أساسي", "دعم 30 يوماً"],
        ],
      ],
    },
    {
      id: "business",
      img: "imgs1/svc-business.svg",
      prices: [90, 160, 260],
      days: ["5-7", "7-10", "12-16"],
      en: [
        "Business website",
        "A multi-page site that presents your company clearly on any screen.",
        [
          ["3 pages", "Mobile-friendly", "Contact section"],
          ["Up to 5 pages", "Arabic + English", "Gallery section"],
          [
            "Up to 8 pages, custom design",
            "Basic SEO + fast loading",
            "30 days support",
          ],
        ],
      ],
      ar: [
        "موقع شركة",
        "موقع متعدد الصفحات يعرض شركتك بوضوح على أي شاشة.",
        [
          ["3 صفحات", "متجاوب مع الموبايل", "قسم تواصل"],
          ["حتى 5 صفحات", "عربي + إنجليزي", "قسم معرض صور"],
          ["حتى 8 صفحات بتصميم مفصّل", "SEO أساسي وتحميل سريع", "دعم 30 يوماً"],
        ],
      ],
    },
    {
      id: "design",
      img: "imgs1/svc-design.svg",
      per: true,
      prices: [20, 30, 45],
      days: ["1-2", "2-3", "3-5"],
      en: [
        "Design to code",
        "Your Figma or PSD design turned into clean HTML and CSS. Price per page.",
        [
          ["Simple page", "Clean HTML/CSS", "Responsive"],
          ["Menus and interactions", "Arabic RTL support", "Pixel-accurate"],
          [
            "Complex layouts and animation",
            "RTL and LTR",
            "Priority revisions",
          ],
        ],
      ],
      ar: [
        "من التصميم إلى الكود",
        "تصميمك من Figma أو PSD يتحول إلى HTML وCSS نظيف. السعر للصفحة.",
        [
          ["صفحة بسيطة", "HTML/CSS نظيف", "متجاوب"],
          ["قوائم وتفاعلات", "دعم RTL للعربي", "مطابق للتصميم"],
          ["تخطيطات معقدة وحركة", "RTL وLTR", "أولوية في التعديلات"],
        ],
      ],
    },
  ];
  /* Add real clients here: { name: "Mona", stars: 5, text: "Great work", service: "Store" } */
  const REVIEWS = [];

  Object.assign(T.en, {
    nav1: "Services & prices",
    cta1: "Get a quote",
    cta3: "See my work",
    f2: "Reply time",
    f4: "Free revision rounds",
    sTitle: "Services and prices",
    sLead:
      "Pick a service, then pick the package that fits your budget. Fixed prices in USD, agreed in writing. Every package includes 2 revision rounds.",
    from: "From",
    usd: "$",
    perPage: "/ page",
    days: "days",
    order: "Choose this package",
    all1: "Everything in Basic",
    all2: "Everything in Standard",
    tn: ["Basic", "Standard", "Premium"],
    pop: "Most chosen",
    ptTitle: "You built something good. Now it should look like you.",
    ptLead:
      "Many owners sell well but struggle to show their products online. I design your store around your brand, your customers, and the way you sell, so it feels like yours and not like a template.",
    pt1: "Built around you: your colors, your products, your voice.",
    pt2: "No two clients get the same store. Each one is designed from scratch.",
    pt3: "Easy for your customers: browse, choose, and order on WhatsApp in a few taps.",
    ptCta: "Tell me about your business",
    rvTitle: "Ratings and client reviews",
    rateQ: "How do you rate this portfolio?",
    rateThanks: (n) => `Thank you! You rated it ${n} out of 5.`,
    noRev: "Client reviews will appear here after my first projects.",
    of5: "out of 5",
    hourly:
      "Small fixes and edits to an existing site: $12 per hour, minimum 1 hour.",
    fSvc: "Package",
    pTitle: "How it works",
    p1: "1. You send the details. I reply within 24 hours.",
    p2: "2. I send a fixed quote with the price and delivery date.",
    p3: "3. You pay 50% to start. The rest is due on delivery.",
    p4: "4. I deliver, apply 2 revision rounds, and fix bugs for 7 days after delivery (30 days in Premium).",
    tr1: "Prefer a safety net? Order through my Khamsat or Mostaql profile and pay through their escrow.",
    tr2: "You own all the code and files once the job is paid.",
    tr3: "Every project in my portfolio has a live demo you can test first.",
    oTitle: "Tell me about your project",
    oLead: "Send the details and I'll reply on WhatsApp with a fixed quote.",
    fName: "Your name",
    fMsg: "What do you need?",
    fSend: "Send on WhatsApp",
    other: "Something else",
    wa: (n, s, m) => `Hi Ahmed, I'm ${n}. I'm interested in: ${s}.\n${m}`,
  });
  Object.assign(T.ar, {
    nav1: "الخدمات والأسعار",
    cta1: "اطلب عرض سعر",
    cta3: "شاهد أعمالي",
    f2: "زمن الرد",
    f4: "جولتا تعديل مجانيتان",
    sTitle: "الخدمات والأسعار",
    sLead:
      "اختر الخدمة ثم الباقة التي تناسب ميزانيتك. أسعار ثابتة بالدولار نتفق عليها كتابةً، وكل باقة تشمل جولتين تعديل.",
    from: "تبدأ من",
    usd: "$",
    perPage: "/ للصفحة",
    days: "أيام",
    order: "اختر هذه الباقة",
    all1: "كل ما في الأساسية",
    all2: "كل ما في المتوسطة",
    tn: ["الأساسية", "المتوسطة", "المتكاملة"],
    pop: "الأكثر اختياراً",
    ptTitle: "بنيت شيئاً جيداً. الآن يجب أن يظهر بشكل يشبهك.",
    ptLead:
      "كثير من أصحاب الأعمال يبيعون جيداً لكن لا يعرفون كيف يعرضون منتجاتهم على الإنترنت. أصمم متجرك حول علامتك وعملائك وطريقة بيعك، ليكون متجرك أنت وليس قالباً جاهزاً.",
    pt1: "مبني حولك: ألوانك ومنتجاتك وأسلوبك.",
    pt2: "لا يوجد عميلان بنفس المتجر. كل تجربة تُصمَّم من الصفر.",
    pt3: "سهل على عملائك: يتصفحون ويختارون ويطلبون عبر واتساب بضغطات قليلة.",
    ptCta: "أخبرني عن عملك",
    rvTitle: "التقييم وآراء العملاء",
    rateQ: "كيف تقيّم هذا المعرض؟",
    rateThanks: (n) => `شكراً! قيّمته ${n} من 5.`,
    noRev: "ستظهر آراء العملاء هنا بعد أولى مشاريعي.",
    of5: "من 5",
    hourly:
      "التعديلات الصغيرة على موقع موجود: 12 دولاراً للساعة، بحد أدنى ساعة.",
    fSvc: "الباقة",
    pTitle: "كيف نعمل",
    p1: "1. ترسل لي التفاصيل وأرد خلال 24 ساعة.",
    p2: "2. أرسل لك عرضاً ثابتاً بالسعر وموعد التسليم.",
    p3: "3. تدفع 50% للبدء، والباقي عند التسليم.",
    p4: "4. أسلّم، وأنفّذ جولتي تعديل، وأصلح أي أخطاء لمدة 7 أيام بعد التسليم (30 يوماً في المتكاملة).",
    tr1: "تفضّل ضماناً أكثر؟ اطلب عبر ملفي على خمسات أو مستقل وادفع من خلال نظام الضمان عندهم.",
    tr2: "تملك كل الكود والملفات بعد دفع المشروع.",
    tr3: "كل مشروع في أعمالي له نسخة تجريبية تقدر تجربها أولاً.",
    oTitle: "أخبرني عن مشروعك",
    oLead: "أرسل التفاصيل وسأرد عليك على واتساب بعرض سعر ثابت.",
    fName: "اسمك",
    fMsg: "ماذا تحتاج؟",
    fSend: "أرسل على واتساب",
    other: "شيء آخر",
    wa: (n, s, m) => `مرحباً أحمد، أنا ${n}. مهتم بـ: ${s}.\n${m}`,
  });

  const q = (s) => document.querySelector(s);
  const store = (k, v) => {
    try {
      return v === undefined
        ? localStorage.getItem(k)
        : localStorage.setItem(k, v);
    } catch (e) {}
  };
  let cur = "store";

  function render() {
    const t = T[lang];
    q("#tabs").innerHTML = SERVICES.map(
      (s) =>
        `<button type="button" role="tab" aria-selected="${s.id === cur}" data-tab="${s.id}">${s[lang][0]}</button>`,
    ).join("");
    const s = SERVICES.find((x) => x.id === cur);
    const [name, pitch, tiers] = s[lang];
    q("#svcPanel").innerHTML =
      `<div class="svc-head"><img src="${s.img}" alt="" loading="lazy" onerror="this.remove()" /><div><h3>${name}</h3><p>${pitch}</p></div></div>
      <div class="pkgs">${tiers
        .map(
          (f, i) => `<article class="pkg${i === 1 ? " pop" : ""}">
        ${i === 1 ? `<span class="tag">${t.pop}</span>` : ""}<h3>${t.tn[i]}</h3>
        <p class="price"><b>${t.usd}${s.prices[i]}</b>${s.per ? `<small>${t.perPage}</small>` : ""}</p>
        <p class="eta">${s.days[i]} ${t.days}</p>
        <ul>${i ? `<li class="all">${t["all" + i]}</li>` : ""}${f.map((x) => `<li>${x}</li>`).join("")}</ul>
        <a class="btn${i === 1 ? "" : " ghost"}" href="#order" data-svc="${s.id}-${i}">${t.order}</a></article>`,
        )
        .join("")}</div>`;
    const sel = q("#fSvc"),
      keep = sel.value;
    sel.innerHTML = "";
    SERVICES.forEach((x) =>
      t.tn.forEach((n, i) =>
        sel.add(new Option(`${x[lang][0]} - ${n}`, `${x.id}-${i}`)),
      ),
    );
    sel.add(new Option(t.other, "other"));
    if (keep) sel.value = keep;
    renderReviews();
    showRate();
  }

  const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
  function renderReviews() {
    const t = T[lang];
    const avg = REVIEWS.length
      ? (REVIEWS.reduce((a, r) => a + r.stars, 0) / REVIEWS.length).toFixed(1)
      : null;
    q("#reviewList").innerHTML = avg
      ? `<p class="avg"><b>${avg}</b> <span aria-hidden="true">★</span> ${t.of5} (${REVIEWS.length})</p><div class="revs">${REVIEWS.map((r) => `<blockquote class="rev"><p class="st" aria-label="${r.stars} / 5">${stars(r.stars)}</p><p>${r.text}</p><footer>${r.name}${r.service ? " · " + r.service : ""}</footer></blockquote>`).join("")}</div>`
      : `<p class="empty">${t.noRev}</p>`;
  }

  function showRate() {
    const n = +store("myRating") || 0;
    q("#stars").innerHTML = [1, 2, 3, 4, 5]
      .map(
        (i) =>
          `<button type="button" data-star="${i}" aria-label="${i} / 5" class="${i <= n ? "on" : ""}">★</button>`,
      )
      .join("");
    q("#rateMsg").textContent = n ? T[lang].rateThanks(n) : "";
  }

  ["store", "cv", "invoice", "expense"].forEach((n, i) => {
    PROJECTS[i].img = `imgs1/proj-${n}.svg`;
  });
  const baseSetLang = setLang;
  setLang = function (l) {
    baseSetLang(l);
    render();
  };
  setLang(lang);

  q("#tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tab]");
    if (b) {
      cur = b.dataset.tab;
      render();
    }
  });
  q("#svcPanel").addEventListener("click", (e) => {
    const a = e.target.closest("[data-svc]");
    if (a) q("#fSvc").value = a.dataset.svc;
  });
  q("#stars").addEventListener("click", (e) => {
    const b = e.target.closest("[data-star]");
    if (b) {
      store("myRating", b.dataset.star);
      showRate();
    }
  });

  q("#orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = T[lang].wa(
      q("#fName").value.trim(),
      q("#fSvc").selectedOptions[0].textContent,
      q("#fMsg").value.trim(),
    );
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  });

  /* gentle pointer parallax for the portrait */
  if (
    !matchMedia("(prefers-reduced-motion: reduce)").matches &&
    matchMedia("(hover: hover)").matches
  ) {
    const por = q(".portrait");
    addEventListener("pointermove", (e) => {
      por.style.setProperty(
        "--px",
        ((e.clientX / innerWidth - 0.5) * 16).toFixed(1) + "px",
      );
      por.style.setProperty(
        "--py",
        ((e.clientY / innerHeight - 0.5) * 12).toFixed(1) + "px",
      );
    });
  }
})();
