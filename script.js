"use strict";

const root = document.documentElement;
root.classList.add("js");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* ---------- Theme (saved in the browser) ---------- */
const themeBtn = document.getElementById("themeToggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "☾" : "☀";
  themeBtn.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
  if (themeMeta) themeMeta.content = theme === "dark" ? "#0b1120" : "#f8fafc";
}

let savedTheme = "dark";
try {
  savedTheme = localStorage.getItem("theme") || savedTheme;
} catch (e) {
  /* storage blocked: keep default */
}
applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuBtn.addEventListener("click", () =>
  setMenu(menuBtn.getAttribute("aria-expanded") !== "true"),
);
navLinks
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

/* ---------- Typing effect ---------- */
const typed = document.getElementById("typed");
const roles = ["Front-End Developer", "Web Tools Builder", "Freelancer"];

if (typed && !reduceMotion) {
  let r = 0;
  let c = 0;
  let deleting = false;

  (function tick() {
    const word = roles[r];
    c += deleting ? -1 : 1;
    typed.textContent = word.slice(0, c);

    let delay = deleting ? 40 : 90;
    if (!deleting && c === word.length) {
      deleting = true;
      delay = 1600;
    } else if (deleting && c === 0) {
      deleting = false;
      r = (r + 1) % roles.length;
      delay = 400;
    }
    setTimeout(tick, delay);
  })();
}

/* ---------- Auto stats ---------- */
const projectStat = document.querySelector('[data-stat="projects"]');
if (projectStat)
  projectStat.dataset.count = document.querySelectorAll(".cards .card").length;

const skillStat = document.querySelector('[data-stat="skills"]');
if (skillStat)
  skillStat.dataset.count = document.querySelectorAll(".skills li").length;

/* ---------- Scroll reveal + stat counters ---------- */
function countUp(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion) {
    el.textContent = target;
    return;
  }
  let n = 0;
  const step = setInterval(() => {
    n += 1;
    el.textContent = n;
    if (n >= target) clearInterval(step);
  }, 250);
}

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        entry.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => {
    el.classList.add("visible");
    el.querySelectorAll("[data-count]").forEach(countUp);
  });
}

/* ---------- Active link on scroll ---------- */
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll('.nav-links a[href^="#"]');

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + entry.target.id,
          ),
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Back to top ---------- */
const toTop = document.getElementById("toTop");

window.addEventListener(
  "scroll",
  () => toTop.classList.toggle("show", window.scrollY > 600),
  { passive: true },
);
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }),
);

/* ---------- Copy email ---------- */
const copyBtn = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
const EMAIL = "ahmed.hassan.dev77@gmail.com";

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyStatus.textContent = "Email copied to clipboard.";
  } catch (e) {
    copyStatus.textContent = "Could not copy. The address is " + EMAIL;
  }
  setTimeout(() => (copyStatus.textContent = ""), 3000);
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Project modal ---------- */
const modal = document.getElementById("projectModal");
const mImg = document.getElementById("modalImg");
const mTitle = document.getElementById("modalTitle");
const mDesc = document.getElementById("modalDesc");
const mTech = document.getElementById("modalTech");
const mLinks = document.getElementById("modalLinks");
const mClose = document.getElementById("modalClose");
let lastFocus = null;

function openModal(card) {
  const img = card.querySelector("img");
  mImg.src = img.src;
  mImg.alt = img.alt;
  mTitle.textContent = card.querySelector("h3").textContent;
  mDesc.textContent = card.querySelector(
    ".card-body > p:not(.tech)",
  ).textContent;
  mTech.textContent = card.querySelector(".tech").textContent;
  mLinks.innerHTML = "";
  card
    .querySelectorAll(".links a")
    .forEach((a) => mLinks.appendChild(a.cloneNode(true)));
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  mClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

const isAr = document.documentElement.lang === "ar";
document.querySelectorAll(".cards .card").forEach((card) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "details-btn";
  btn.textContent = isAr ? "التفاصيل" : "Details";
  card.querySelector(".links").prepend(btn);
  btn.addEventListener("click", () => openModal(card));
  card.querySelector("img").addEventListener("click", () => openModal(card));
});

mClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});
