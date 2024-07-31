document.addEventListener("DOMContentLoaded", function () {
  gsap.from("h1", { duration: 1, y: -50, opacity: 0 });
  gsap.from("h2", { duration: 1, x: -50, opacity: 0, delay: 0.5 });
  gsap.from("p", { duration: 1, y: 50, opacity: 0, delay: 1 });
});
