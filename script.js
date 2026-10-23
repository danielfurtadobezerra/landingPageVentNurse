// URL do app (simulador). Todos os links com [data-app] apontam para cá.
const APP_URL = "https://ventnurseacademy.vercel.app";

document.querySelectorAll("[data-app]").forEach((a) => {
  a.href = APP_URL + a.getAttribute("href");
});

document.getElementById("year").textContent = new Date().getFullYear();

// Borda do header ao rolar
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Animação de entrada
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.documentElement.classList.add("no-js");
}
