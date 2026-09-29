
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + visible.target.id
    );
  });
}, {
  rootMargin: "-25% 0px -60% 0px",
  threshold: [0.1, 0.25, 0.5]
});

sections.forEach(section => observer.observe(section));
