/* ===========================
   TRANSITION PAGE DE GARDE → PORTFOLIO
=========================== */
const enterBtn = document.getElementById("enter-portfolio");
const cover = document.getElementById("page-de-garde");

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    cover.classList.add("hide");

    setTimeout(() => {
      const infos = document.getElementById("infos");
      if (infos) {
        window.scrollTo({
          top: infos.offsetTop - 60,
          behavior: "smooth"
        });
      }
    }, 800);
  });
}

/* ===========================
   SMOOTH SCROLL + ACTIVE NAV
=========================== */
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

function updateActiveNav() {
  let fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (!section) return;
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* ===========================
   SCROLL REVEAL
=========================== */
function revealOnScroll() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", () => {
  updateActiveNav();
  revealOnScroll();
});

updateActiveNav();
revealOnScroll();

/* ===========================
   GLITCH EFFECT (léger)
=========================== */
setInterval(() => {
  document.querySelectorAll(".glitch").forEach(el => {
    el.style.opacity = "0.9";
    setTimeout(() => el.style.opacity = "1", 120);
  });
}, 2000);

/* ===========================
   SCANLINE PULSE
=========================== */
setInterval(() => {
  const scan = document.querySelector(".cover-scanline");
  if (scan) {
    scan.style.opacity = "0.18";
    setTimeout(() => scan.style.opacity = "0.15", 400);
  }
}, 3000);
