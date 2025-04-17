const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

let menuOpen = false;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
  menuOpen = !menuOpen;
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("is-open");
    menuOpen = false;
  }
});
