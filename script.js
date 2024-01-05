// beta = haut en bas
// gamma = gauche a droite

const sections = document.querySelectorAll(".section");
let activeIndex = 0;
let previousPitch = null;

window.addEventListener("deviceorientation", (e) => {
  e.preventDefault();
  const roll = e.gamma;
  const pitch = e.beta;
  // console.log(activeIndex);

  if (
    (previousPitch === null || Math.abs(pitch - previousPitch) >= 5) &&
    ((pitch >= 38 && pitch <= 42) || (pitch >= 158 && pitch <= 162))
  ) {
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    activeIndex = activeIndex >= sections.length - 1 ? 0 : activeIndex + 1;
    sections[activeIndex].classList.add("active");
  }
});
