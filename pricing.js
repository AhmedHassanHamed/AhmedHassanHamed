/* =====================================================
   pricing.js: الخدمات والأسعار + عرض الإطلاق + التقييمات + النموذج
   يتحمل بعد script.js ويستخدم متغيراته (T, lang, EMAIL...)
   الأماكن اللي بتعدّلها بنفسك: 1 (الإعدادات) و 2 (الخدمات) و 3 (التقييمات)
   ===================================================== */
(function () {
  /* ===== 1. الإعدادات (عدّل هنا) ===== */
  const WA = "201147729020"; // رقم واتساب بدون + ، وغيّره لرقم الشغل لما تجيبه
  // عرض الإطلاق: left = عدد العملاء المتبقين (اجعله 0 لإيقاف العرض)، pct = نسبة الخصم %
  const OFFER = { left: 5, pct: 25 };
  // disc: يحسب السعر بعد الخصم، offerBox: يرسم شريط العرض فوق الباقات
  const disc = (p) =>
    OFFER.left > 0 ? Math.round((p * (100 - OFFER.pct)) / 100) : p;
  const offerBox = (t) =>
    OFFER.left > 0
      ? `<p class="offer"><b>${t.offerT(OFFER.pct, OFFER.left)}</b>${t.offerD}</p>`
      : "";
  /* ===== 2. الخدمات والباقات (عدّل الأسعار والمدد والمميزات) =====
     prices = أسعار الباقات [أساسية، متوسطة، متكاملة] ، days = مدة التسليم
     per = true لو السعر للصفحة ، en/ar = [الاسم، الوصف، مميزات كل باقة] */
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
      id: "portfolio",
      img: "imgs1/svc-portfolio.svg",
      prices: [30, 55, 90],
      days: ["3-4", "5-7", "7-10"],
      en: [
        "Personal portfolio website",
        "A clean website that shows your work, skills, and contact details, so clients and employers can find you and trust you.",
        [
          [
            "One-page portfolio",
            "Up to 4 projects with links",
            "Mobile-friendly design",
          ],
          [
            "Arabic + English",
            "Dark and light mode",
            "Contact form to WhatsApp",
          ],
          [
            "Custom design from your brand",
            "Free deployment + basic SEO",
            "30 days support",
          ],
        ],
      ],
      ar: [
        "موقع بورتفوليو شخصي",
        "موقع أنيق يعرض أعمالك ومهاراتك وبيانات التواصل، ليجدك العملاء وأصحاب العمل ويثقوا بك.",
        [
          [
            "بورتفوليو من صفحة واحدة",
            "حتى 4 مشاريع بروابطها",
            "تصميم متجاوب مع الموبايل",
          ],
          ["عربي + إنجليزي", "وضع ليلي ونهاري", "نموذج تواصل إلى واتساب"],
          ["تصميم مفصّل من هويتك", "نشر مجاني + SEO أساسي", "دعم 30 يوماً"],
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
        "تصميمك من Figma أو PSD يتحول إلى HTML و CSS نظيف. السعر للصفحة.",
        [
          ["صفحة بسيطة", "HTML/CSS نظيف", "متجاوب"],
          ["قوائم وتفاعلات", "دعم RTL للعربي", "مطابق للتصميم"],
          [
            "تخطيطات معقدة وحركة",
            "دعم الاتجاهين (عربي وإنجليزي)",
            "أولوية في التعديلات",
          ],
        ],
      ],
    },
  ];
  // آراء العملاء
  const REVIEWS = [];

  /* ===== 4. النصوص الإنجليزية الإضافية (تُضاف إلى T.en في script.js) ===== */
  Object.assign(T.en, {
    nav1: "Services & prices",
    cta1: "Get a quote",
    cta3: "See my work",
    f2: "Reply time",
    f4: "Free revision rounds",
    f2v: "24h",
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
    ptTitle: "Your business is good. Your website should show it.",
    ptLead:
      "Many owners sell well but struggle to show their products online. I design your website or store around your brand, your customers, and the way you sell, so it feels like yours and not like a template.",
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
      "Need a small change on a site you already have? Updating text or images, fixing a layout problem, or adding a section is $12 per hour, with a 1-hour minimum. I'll tell you the estimated hours before I start. Bigger work, like new pages or a redesign, gets a fixed quote instead.",
    fSvc: "Package",
    pTitle: "How it works",
    tr1: "Prefer a safety net? Order through my Khamsat or Nafezly profile and pay through the platform.",
    tr2: "You own all the code and files once the job is paid.",
    tr3: "Every project in my portfolio has a live demo you can test first.",
    oTitle: "Tell me about your project",
    oLead: "Send the details and I'll reply on WhatsApp with a fixed quote.",
    fName: "Your name",
    fMsg: "What do you need?",
    fSend: "Send on WhatsApp",
    fMail: "Send by email",
    other: "Something else",
    wa: (n, s, m) => `Hi Ahmed, I'm ${n}. I'm interested in: ${s}.\n${m}`,

    hi: "Welcome! I'm Ahmed, a front-end developer.",
    sub: "I design and build fast, good-looking websites, stores, and landing pages that work on every screen, in Arabic and English.",
    p1: "1. Tell me about your project. I reply within 24 hours.",
    p2: "2. You get a fixed quote with the price and delivery date.",
    p3: "3. You pay 50% to start, and the rest on delivery.",
    p4: "4. I deliver, make 2 free revisions, and fix any bug within 7 days (30 days in Premium).",
    aText:
      "I'm Ahmed Hassan, a front-end developer. I turn your idea or design into a fast, good-looking website that your customers find easy to use, in Arabic, English, or both. You get a clear price, a clear delivery date, and the full code when we finish.",
    aCta: "Start your project",
    ab1t: "Built for Arabic and English",
    ab1d: "Every project I build supports right-to-left and left-to-right layouts properly, so text, fonts, and numbers look right in both languages.",
    ab2t: "Fast on every screen",
    ab2d: "Clean code with no heavy libraries, so pages open quickly and work on phones, tablets, and desktops.",
    ab3t: "Clear and on time",
    ab3d: "A fixed price and a delivery date agreed in writing, a reply within 24 hours, and 2 free revision rounds.",
    ab4t: "See it before you buy",
    ab4d: "Each project in my portfolio has a live demo, so you can test my work yourself before we start.",
    offerT: (p, n) => `Launch offer: ${p}% off for my first ${n} clients`,
    offerD:
      "Includes free deployment of your site and a 15-minute consultation before we start. After delivery, I'd appreciate an honest review.",
    offerWa: "\nI'd like to use the launch offer.",
    sent: "Thank you! WhatsApp is opening with your message. I'll reply within 24 hours.",
    sentMail:
      "Your email app is opening with your message. I'll reply within 24 hours.",
    waChat: "Chat on WhatsApp",
    waHi: "Hi Ahmed, I saw your portfolio and I'd like to ask about a project.",
    fCode: "Client code (optional)",
    returnT: "Returning client?",
    returnD:
      "Enter your client code to get 10% off your second order, and 15% off plus a free hour of edits from your third order.",
    codeWa: (c) => `\nClient code: ${c}`,
    faqT: "Frequently asked questions",
    faq1q: "What does the store include, and what does it not include?",
    faq1a:
      "The store includes a home page, product listing, a cart, and ordering through WhatsApp, in a responsive design. Search, filters, bilingual pages, and extra product pages depend on the package you choose. It does not include online payment, an admin dashboard, or a database, because it is a front-end store.",
    faq2q: "How long does a project take?",
    faq2a:
      "Each package shows its delivery time, from 1 to 2 days for design to code up to 14 to 20 days for the largest store package. I confirm the exact date in writing before I start.",
    faq3q: "How do I pay?",
    faq3a:
      "You pay 50% to start and the rest on delivery. If you prefer extra protection, you can order through my Khamsat or Nafezly profile and pay through the platform.",
    faq4q: "What if I need changes after delivery?",
    faq4a:
      "Every package includes 2 free revision rounds on the agreed work. Small edits to an existing site cost $12 per hour with a 1-hour minimum, and bigger changes get a fixed quote.",
    faq5q: "Do I own the code?",
    faq5a: "Yes. Once the project is paid, all the code and files are yours.",
    faq6q: "Who handles hosting and the domain?",
    faq6a:
      "I can publish your site on free hosting and send you the link. A paid domain name is bought on your own account, and I can help you connect it.",
    payNote:
      "Payment methods: Vodafone Cash and InstaPay (I send you the transfer details when we agree), or through the payment system of Khamsat or Nafezly.",
    revSrc: "View on the platform",
    platT: "Prefer to order through a platform?",
    platD:
      "Start with a starter package on Khamsat or Nafezly, and that platform's own payment and dispute rules apply. Larger packages are in the services section above.",
    pending: "under review",
    trustT: "Why you can trust me",
    tw1t: "Work you can test first",
    tw1d: "Every project in my portfolio has a live demo you can open before we start.",
    tw2t: "Real profiles you can check",
    tw2d: "I have public profiles on freelance platforms, so you can verify who I am.",
    tw3t: "A clear written agreement",
    tw3d: "Price, scope, and delivery date are written before I start, with no hidden costs.",
    tw4t: "You own the work",
    tw4d: "After payment, all the code and files are yours.",
    checkMe: "Check my profiles:",
    cliT: "Already worked with me?",
    cliD: "Thank you for trusting me. This is how I look after clients once the project is delivered.",
    cl1: "I check in 1 to 2 days after delivery to make sure everything works for you.",
    cl2: "Found a problem? Tell me and I'll fix it within the support period.",
    cl3: "Returning clients get a discount, and from the third order a free hour of edits. Referring a friend earns you a discount too.",
    issueB: "Report a problem",
    feedB: "Share feedback",
    issueWa:
      "Hi Ahmed, I'm an existing client and I have a problem with my project: ",
    feedWa: "Hi Ahmed, I'd like to share feedback about my project: ",
    refT: "Refer a friend, get rewarded",
    refD: "Know someone who needs a website or a store? Share your personal link. If they place an order, you get a reward after the project is delivered and paid.",
    rt1: "Orders $15 to $49",
    rt2: "Orders $50 to $149",
    rt3: "Orders $150 to $299",
    rt4: "Orders $300 and above",
    rf1: "Your friend gets 10% off their first order (not combined with the launch offer).",
    rf2: "The reward is paid after the project is paid in full, delivered, and 7 days pass with no dispute or refund. One reward per new client.",
    rf3: "Self-referrals and referrals within the same household do not count. Rewards are paid by Vodafone Cash or InstaPay, or as a discount worth 1.5 times the amount.",
    refB: "Get my referral link",
    refWa: "Hi Ahmed, I'd like a referral code and link, please.",
    refFrom: (c) =>
      `You came through a referral (code ${c}). Your first order gets 10% off.`,
  });
  /* ===== 5. النصوص العربية الإضافية (تُضاف إلى T.ar) ===== */
  Object.assign(T.ar, {
    nav1: "الخدمات والأسعار",
    cta1: "اطلب عرض سعر",
    cta3: "شاهد أعمالي",
    f2: "زمن الرد",
    f4: "جولتا تعديل مجانيتان",
    f2v: "24 ساعة",
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
    ptTitle: "نشاطك ممتاز، ويستحق موقعاً يعبّر عنه.",
    ptLead:
      "كثير من أصحاب الأعمال يبيعون جيداً لكن لا يعرفون كيف يعرضون منتجاتهم على الإنترنت. أصمم موقعك أو متجرك حول علامتك وعملائك وطريقة بيعك، ليكون لك أنت وليس قالباً جاهزاً.",
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
      "تحتاج تعديلاً بسيطاً على موقع موجود عندك؟ تغيير النصوص أو الصور، أو إصلاح مشكلة في الشكل، أو إضافة قسم، تُحسب بـ 12 دولاراً للساعة بحد أدنى ساعة واحدة. أخبرك بعدد الساعات المتوقع قبل أن أبدأ. أما الأعمال الأكبر مثل صفحات جديدة أو إعادة تصميم فلها عرض سعر ثابت.",
    fSvc: "الباقة",
    pTitle: "كيف نعمل",
    tr1: "تفضّل ضماناً أكثر؟ اطلب عبر ملفي على خمسات أو نفذلي وادفع من خلال نظام الدفع في المنصة.",
    tr2: "تملك كل الكود والملفات بعد دفع المشروع.",
    tr3: "كل مشروع في أعمالي له نسخة تجريبية تقدر تجربها أولاً.",
    oTitle: "أخبرني عن مشروعك",
    oLead: "أرسل التفاصيل وسأرد عليك على واتساب بعرض سعر ثابت.",
    fName: "اسمك",
    fMsg: "ماذا تحتاج؟",
    fSend: "أرسل على واتساب",
    fMail: "أرسل بالبريد الإلكتروني",
    other: "شيء آخر",
    wa: (n, s, m) => `مرحباً أحمد، أنا ${n}. مهتم بـ: ${s}.\n${m}`,

    hi: "أهلاً بك! أنا أحمد، مطوّر واجهات أمامية.",
    sub: "أصمّم وأبني مواقع ومتاجر وصفحات هبوط سريعة وأنيقة، تعمل بسلاسة على كل الشاشات وبالعربية والإنجليزية.",
    p1: "1. تحكي لي عن مشروعك، وأرد عليك خلال 24 ساعة.",
    p2: "2. تستلم عرضاً ثابتاً بالسعر وموعد التسليم.",
    p3: "3. تدفع 50% للبدء، والباقي عند التسليم.",
    p4: "4. أسلّم لك العمل، وأنفّذ تعديلين مجانيين، وأصلح أي خطأ خلال 7 أيام (30 يوماً في المتكاملة).",
    aText:
      "أنا أحمد حسن، مطوّر واجهات أمامية. أحوّل فكرتك أو تصميمك إلى موقع سريع وأنيق يسهل على عملائك استخدامه، بالعربية أو الإنجليزية أو الاثنتين. تحصل على سعر واضح وموعد تسليم محدد وكامل الكود عند الانتهاء.",
    aCta: "ابدأ مشروعك",
    ab1t: "مصمَّم للعربية والإنجليزية",
    ab1d: "كل مشروع أبنيه يدعم الكتابة من اليمين لليسار والعكس بشكل سليم، فتظهر النصوص والخطوط والأرقام صحيحة في اللغتين.",
    ab2t: "سريع على كل الشاشات",
    ab2d: "كود نظيف بلا مكتبات ثقيلة، فتفتح الصفحات بسرعة وتعمل على الموبايل والتابلت والكمبيوتر.",
    ab3t: "واضح وفي موعده",
    ab3d: "سعر ثابت وموعد تسليم متفق عليهما كتابةً، ورد خلال 24 ساعة، وجولتا تعديل مجانيتان.",
    ab4t: "شاهد قبل أن تشتري",
    ab4d: "لكل مشروع في أعمالي نسخة تجريبية، تقدر تجرّب شغلي بنفسك قبل أن نبدأ.",
    offerT: (p, n) => `عرض الإطلاق: خصم ${p}% لأول ${n} عملاء`,
    offerD:
      "يشمل نشر موقعك مجاناً واستشارة قصيرة (15 دقيقة) قبل البدء. وبعد التسليم أكون ممتناً لرأيك الصريح.",
    offerWa: "\nأرغب في الاستفادة من عرض الإطلاق.",
    sent: "شكراً لك! سيفتح واتساب برسالتك، وسأرد عليك خلال 24 ساعة.",
    sentMail: "سيفتح تطبيق البريد برسالتك، وسأرد عليك خلال 24 ساعة.",
    waChat: "تحدث معي على واتساب",
    waHi: "مرحباً أحمد، شاهدت معرض أعمالك وأريد الاستفسار عن مشروع.",
    fCode: "كود العميل (اختياري)",
    returnT: "عميل سابق؟",
    returnD:
      "اكتب كود العميل الخاص بك لتحصل على خصم 10% على طلبك الثاني، وخصم 15% مع ساعة تعديلات مجانية من طلبك الثالث.",
    codeWa: (c) => `\nكود العميل: ${c}`,
    faqT: "أسئلة شائعة",
    faq1q: "ماذا يشمل المتجر وماذا لا يشمل؟",
    faq1a:
      "يشمل المتجر صفحة رئيسية وعرضاً للمنتجات وسلة مشتريات وإتمام الطلب عبر واتساب بتصميم متجاوب. أما البحث والفلاتر واللغتان وصفحات المنتجات الإضافية فتختلف حسب الباقة. ولا يشمل الدفع الإلكتروني ولا لوحة تحكم ولا قاعدة بيانات، لأنه متجر واجهة أمامية.",
    faq2q: "كم تستغرق مدة المشروع؟",
    faq2a:
      "كل باقة توضح مدة تسليمها، من يوم أو يومين لتحويل التصميم إلى كود، حتى 14 إلى 20 يوماً لأكبر باقة متجر. وأؤكد لك الموعد الدقيق كتابةً قبل أن أبدأ.",
    faq3q: "كيف أدفع؟",
    faq3a:
      "تدفع 50% للبدء والباقي عند التسليم. وإن فضّلت ضماناً أكثر، يمكنك الطلب عبر ملفي على خمسات أو نفذلي والدفع من خلال نظام الدفع في المنصة.",
    faq4q: "ماذا لو احتجت تعديلات بعد التسليم؟",
    faq4a:
      "كل باقة تشمل جولتي تعديل مجانيتين على العمل المتفق عليه. والتعديلات الصغيرة على موقع موجود بـ 12 دولاراً للساعة بحد أدنى ساعة، والتغييرات الأكبر لها عرض سعر ثابت.",
    faq5q: "هل أملك الكود؟",
    faq5a: "نعم. بعد دفع المشروع، كل الكود والملفات ملكك.",
    faq6q: "من يتولى الاستضافة والدومين؟",
    faq6a:
      "أستطيع نشر موقعك على استضافة مجانية وأرسل لك الرابط. أما اسم النطاق المدفوع فتشتريه على حسابك، ويمكنني مساعدتك في ربطه.",
    payNote:
      "طرق الدفع: فودافون كاش وإنستا باي (أرسل لك بيانات التحويل عند الاتفاق)، أو عبر نظام الدفع في خمسات أو نفذلي.",
    revSrc: "شاهد التقييم على المنصة",
    platT: "تفضّل الطلب عبر منصة؟",
    platD:
      "ابدأ بباقة مبدئية على خمسات أو نفذلي، وتسري عليك قواعد الدفع وحل النزاعات الخاصة بالمنصة. الباقات الأكبر في قسم الخدمات أعلاه.",
    pending: "قيد المراجعة",
    trustT: "لماذا تثق بي",
    tw1t: "عمل تجربه قبل أن تطلب",
    tw1d: "كل مشروع في أعمالي له نسخة تجريبية تفتحها قبل أن نبدأ.",
    tw2t: "حسابات حقيقية تتحقق منها",
    tw2d: "لدي ملفات عامة على منصات العمل الحر، فتتأكد من هويتي بنفسك.",
    tw3t: "اتفاق مكتوب وواضح",
    tw3d: "السعر والنطاق وموعد التسليم مكتوبة قبل أن أبدأ، بلا تكاليف مخفية.",
    tw4t: "العمل ملكك",
    tw4d: "بعد الدفع، كل الكود والملفات ملكك.",
    checkMe: "تحقق من حساباتي:",
    cliT: "سبق وتعاملت معي؟",
    cliD: "شكراً لثقتك. هذه طريقتي في رعاية العملاء بعد تسليم المشروع.",
    cl1: "أتواصل معك بعد التسليم بيوم أو يومين للتأكد أن كل شيء يعمل لديك.",
    cl2: "وجدت مشكلة؟ أخبرني وسأصلحها خلال فترة الدعم.",
    cl3: "العميل العائد يحصل على خصم، ومن الطلب الثالث ساعة تعديلات مجانية. وترشيح صديق يمنحك خصماً أيضاً.",
    issueB: "أبلغ عن مشكلة",
    feedB: "شاركني رأيك",
    issueWa: "مرحباً أحمد، أنا عميل سابق ولدي مشكلة في مشروعي: ",
    feedWa: "مرحباً أحمد، أود مشاركة رأيي عن مشروعي: ",
    refT: "رشّح صديقاً واحصل على مكافأة",
    refD: "تعرف أحداً يحتاج موقعاً أو متجراً؟ شارك رابطك الشخصي. إن طلب خدمة، تحصل على مكافأة بعد تسليم المشروع ودفعه.",
    rt1: "طلبات من 15$ إلى 49$",
    rt2: "طلبات من 50$ إلى 149$",
    rt3: "طلبات من 150$ إلى 299$",
    rt4: "طلبات من 300$ فأكثر",
    rf1: "صديقك يحصل على خصم 10% على أول طلب (لا يجتمع مع عرض الإطلاق).",
    rf2: "تُصرف المكافأة بعد دفع المشروع بالكامل وتسليمه ومرور 7 أيام بدون نزاع أو استرداد. مكافأة واحدة لكل عميل جديد.",
    rf3: "لا يُحتسب ترشيح النفس أو أفراد الأسرة نفسها. تُصرف المكافأة بفودافون كاش أو إنستا باي، أو كخصم بقيمة مرة ونصف المبلغ.",
    refB: "احصل على رابط الترشيح",
    refWa: "مرحباً أحمد، أريد كود ورابط ترشيح من فضلك.",
    refFrom: (c) => `وصلت عبر ترشيح (كود ${c}). طلبك الأول بخصم 10%.`,
  });

  /* ===== 6. أدوات مساعدة ===== */
  const q = (s) => document.querySelector(s);
  const store = (k, v) => {
    try {
      return v === undefined
        ? localStorage.getItem(k)
        : localStorage.setItem(k, v);
    } catch (e) {}
  };
  let cur = "store";

  /* ===== خدمات المنصات: خمسات ونفذلي فقط (مستقل معرض أعمال مش خدمات للشراء) =====
     ضع رابط كل خدمة في links. لو رابط خمسات فاضي وكتبت اسمه في pending بيظهر "قيد المراجعة". */
  const PLATFORMS = [
    { key: "khamsat", ar: "خمسات", en: "Khamsat" },
    { key: "nafezly", ar: "نفذلي", en: "Nafezly" },
  ];
  const PLATFORM_SERVICES = [
    {
      ar: "متجر إلكتروني",
      en: "Online store",
      from: 25,
      links: {
        khamsat: "",
        nafezly:
          "https://nafezly.com/service/99320-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%88%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%A7%D8%AC%D9%87%D8%A9-%D9%85%D8%AA%D8%AC%D8%B1-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A-%D9%88%D8%A7%D9%84%D8%A5%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A",
      },
      pending: ["khamsat"],
    },
    {
      ar: "موقع بورتفوليو شخصي",
      en: "Personal portfolio",
      from: 15,
      links: {
        khamsat:
          "https://khamsat.com/programming/custom-website-development/4478320-%D8%A8%D9%88%D8%B1%D8%AA%D9%81%D9%88%D9%84%D9%8A%D9%88-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A-%D9%8A%D8%A8%D9%87%D8%B1-%D8%B9%D9%85%D9%84%D8%A7%D8%A1%D9%83-%D9%88%D9%8A%D8%A8%D8%B1%D8%B2-%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%83",
        nafezly:
          "https://nafezly.com/service/96879-%D8%A8%D9%88%D8%B1%D8%AA%D9%81%D9%88%D9%84%D9%8A%D9%88-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A-%D9%8A%D8%A8%D9%87%D8%B1-%D8%B9%D9%85%D9%84%D8%A7%D8%A1%D9%83-%D9%88%D9%8A%D8%A8%D8%B1%D8%B2-%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%83",
      },
      pending: [],
    },
    {
      ar: "سيرة ذاتية احترافية",
      en: "Professional CV",
      from: 15,
      links: {
        khamsat:
          "https://khamsat.com/designing/resume-design/4474137-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%B3%D9%8A%D8%B1%D8%A9-%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D9%84%D9%84%D8%A5%D8%B1%D8%B3%D8%A7%D9%84-%D8%A8%D8%B5%D9%8A%D8%BA%D8%A9-pdf",
        nafezly:
          "https://nafezly.com/service/96885-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%B3%D9%8A%D8%B1%D8%A9-%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D9%84%D9%84%D8%A5%D8%B1%D8%B3%D8%A7%D9%84-%D8%A8%D8%B5%D9%8A%D8%BA%D8%A9-PDF",
      },
      pending: [],
    },
  ];
  function renderPlatforms() {
    const t = T[lang],
      grid = q("#platGrid");
    if (!grid) return;
    grid.innerHTML = PLATFORM_SERVICES.map(
      (s) => `<article class="plat">
      <h3>${s[lang]}</h3>
      <p class="from">${t.from} <b>${t.usd}${s.from}</b></p>
      <div class="plat-btns">${PLATFORMS.map((p) => {
        const u = s.links[p.key];
        if (u)
          return `<a class="btn ghost" href="${u}" target="_blank" rel="noopener">${p[lang]}</a>`;
        return s.pending.includes(p.key)
          ? `<span class="btn ghost off">${p[lang]}: ${t.pending}</span>`
          : "";
      }).join("")}</div></article>`,
    ).join("");
  }

  /* ===== رابط الترشيح: ?ref=CODE يملأ خانة الكود تلقائياً ===== */
  const refCode = (new URLSearchParams(location.search).get("ref") || "")
    .replace(/[^\w-]/g, "")
    .slice(0, 24);
  function applyRef() {
    const t = T[lang],
      n = q("#refNote"),
      b = q("#refBtn");
    if (b) b.href = `https://wa.me/${WA}?text=${encodeURIComponent(t.refWa)}`;
    if (!refCode || !n) return;
    if (q("#fCode")) q("#fCode").value = refCode;
    n.hidden = false;
    n.textContent = t.refFrom(refCode);
  }

  /* ===== 7. رسم التبويبات والباقات وخيارات النموذج ===== */
  function render() {
    const t = T[lang];
    applyRef();
    q("#waFloat").href =
      `https://wa.me/${WA}?text=${encodeURIComponent(t.waHi)}`;
    const ib = q("#issueBtn"),
      fb = q("#feedbackBtn");
    if (ib)
      ib.href = `https://wa.me/${WA}?text=${encodeURIComponent(t.issueWa)}`;
    if (fb)
      fb.href = `https://wa.me/${WA}?text=${encodeURIComponent(t.feedWa)}`;
    renderPlatforms();
    q("#tabs").innerHTML = SERVICES.map(
      (s) =>
        `<button type="button" role="tab" aria-controls="svcPanel" aria-selected="${s.id === cur}" data-tab="${s.id}">${s[lang][0]}</button>`,
    ).join("");
    const s = SERVICES.find((x) => x.id === cur);
    const [name, pitch, tiers] = s[lang];
    q("#svcPanel").innerHTML =
      offerBox(t) +
      `<div class="svc-head"><img src="${s.img}" alt="" loading="lazy" onerror="this.remove()" /><div><h3>${name}</h3><p>${pitch}</p></div></div>
      <div class="pkgs">${tiers
        .map(
          (f, i) => `<article class="pkg${i === 1 ? " pop" : ""}">
        ${i === 1 ? `<span class="tag">${t.pop}</span>` : ""}<h3>${t.tn[i]}</h3>
        <p class="price">${OFFER.left > 0 ? `<s>${t.usd}${s.prices[i]}</s>` : ""}<b>${t.usd}${disc(s.prices[i])}</b>${s.per ? `<small>${t.perPage}</small>` : ""}</p>
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
        sel.add(
          new Option(
            `${x[lang][0]} - ${n} (${t.usd}${disc(x.prices[i])}${x.per ? " " + t.perPage : ""})`,
            `${x.id}-${i}`,
          ),
        ),
      ),
    );
    sel.add(new Option(t.other, "other"));
    if (keep) sel.value = keep;
    markZoom();
    renderReviews();
    showRate();
  }

  /* ===== 8. رسم التقييمات (تظهر فقط لو REVIEWS فيها بيانات) ===== */
  const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
  const who = (r, t) =>
    (r.avatar
      ? `<img class="rev-av" src="${r.avatar}" alt="" width="40" height="40" loading="lazy" />`
      : "") +
    `<span><b>${r.name}</b>${r.country ? " · " + r.country[lang] : ""}${r.service ? `<small>${r.service}</small>` : ""}</span>` +
    (r.link
      ? `<a class="rev-link" href="${r.link}" target="_blank" rel="noopener">${t.revSrc}</a>`
      : "");
  function renderReviews() {
    q("#reviews").hidden = !REVIEWS.length;
    const t = T[lang];
    const avg = REVIEWS.length
      ? (REVIEWS.reduce((a, r) => a + r.stars, 0) / REVIEWS.length).toFixed(1)
      : null;
    q("#reviewList").innerHTML = avg
      ? `<p class="avg"><b>${avg}</b> <span aria-hidden="true">★</span> ${t.of5} (${REVIEWS.length})</p><div class="revs">${REVIEWS.map((r) => `<blockquote class="rev"><p class="st" aria-label="${r.stars} / 5">${stars(r.stars)}</p><p>${r.text}</p><footer>${who(r, t)}</footer></blockquote>`).join("")}</div>`
      : `<p class="empty">${t.noRev}</p>`;
  }

  /*
   ====== عند إضافة تقييم العميل ======
  const REVIEWS = [
  {
    name: "Mona",
    country: { ar: "مصر", en: "Egypt" },
    stars: 5,
    text: "نص التقييم زي ما كتبه العميل بالظبط",
    service: "Store",
    avatar: "imgs1/reviews/mona.jpg", // اختياري وبإذنه
    link: "https://رابط-صفحة-التقييم-على-المنصة",
  },
]; */

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

  /* ===== 9. ربط تغيير اللغة بإعادة رسم الخدمات ===== */
  const baseSetLang = setLang;
  setLang = function (l) {
    baseSetLang(l);
    render();
  };
  setLang(lang);

  /* ===== 10. الأحداث: التبويبات، اختيار باقة، النجوم، إرسال الطلب لواتساب ===== */
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

  /* يبني نص الطلب المرسل (واتساب أو بريد): الاسم والباقة والرسالة وعرض الإطلاق وكود العميل */
  const orderText = (svc) => {
    const code = q("#fCode") ? q("#fCode").value.trim() : "";
    return (
      T[lang].wa(q("#fName").value.trim(), svc, q("#fMsg").value.trim()) +
      (OFFER.left > 0 ? T[lang].offerWa : "") +
      (code ? T[lang].codeWa(code) : "")
    );
  };

  q("#orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = orderText(q("#fSvc").selectedOptions[0].textContent);
    T[lang].wa(
      q("#fName").value.trim(),
      q("#fSvc").selectedOptions[0].textContent,
      q("#fMsg").value.trim(),
    ) +
      (OFFER.left > 0 ? T[lang].offerWa : "") +
      (q("#fCode").value.trim()
        ? T[lang].codeWa(q("#fCode").value.trim())
        : "");
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    q("#orderMsg").textContent = T[lang].sent;
    q("#fMsg").value = "";
  });

  /* ===== 11. إرسال الطلب بالبريد (بديل لواتساب) ===== */
  q("#mailBtn").addEventListener("click", () => {
    if (!q("#orderForm").reportValidity()) return;
    const svc = q("#fSvc").selectedOptions[0].textContent;
    const body = orderText(svc);
    T[lang].wa(q("#fName").value.trim(), svc, q("#fMsg").value.trim()) +
      (OFFER.left > 0 ? T[lang].offerWa : "") +
      (q("#fCode").value.trim()
        ? T[lang].codeWa(q("#fCode").value.trim())
        : "");
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(svc)}&body=${encodeURIComponent(body)}`;
    q("#orderMsg").textContent = T[lang].sentMail;
  });

  /* ===== 12. حركة خفيفة لصورتك مع الماوس ===== */
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

  /* ===== 13. تكبير صور المشاريع عند الضغط ===== */
  const lb = document.createElement("dialog");
  lb.className = "lb";
  lb.setAttribute("aria-label", "Project preview");
  lb.innerHTML =
    '<button type="button" class="lb-x" aria-label="Close">×</button><div class="lb-box"><img alt="" /></div>';
  document.body.append(lb);
  const lbImg = lb.querySelector("img");
  const zoom = (im) => {
    lbImg.src = im.src;
    lbImg.alt = im.alt;
    lb.showModal();
  };
  q("#cases").addEventListener("click", (e) => {
    const im = e.target.closest(".frame img");
    if (im) zoom(im);
  });
  q("#cases").addEventListener("keydown", (e) => {
    const im = e.target.closest(".frame img");
    if (im && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      zoom(im);
    }
  });
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest(".lb-x")) lb.close();
  });
  function markZoom() {
    document.querySelectorAll(".frame img").forEach((im) => {
      im.tabIndex = 0;
      im.setAttribute("role", "button");
    });
  }
})();
