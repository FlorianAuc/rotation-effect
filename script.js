// beta = haut en bas
// gamma = gauche a droite

const sections = document.querySelectorAll(".section");
let activeIndex = 0;

window.addEventListener("deviceorientation", (e) => {
  e.preventDefault();
  const roll = e.gamma;
  const pitch = e.beta;
  // console.log(activeIndex);

  if (Math.abs(pitch - 40) < 5 || Math.abs(pitch - 160) < 5) {
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    activeIndex = activeIndex >= sections.length - 1 ? 0 : activeIndex + 1;
    sections[activeIndex].classList.add("active");
  }
});
