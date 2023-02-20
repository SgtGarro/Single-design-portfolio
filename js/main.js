"use strict";

// Responsive skill image

const [...skillCards] = document.querySelectorAll(".skill__card");
const fullSkillCards = skillCards.slice(0, -3);
const midSkillCards = skillCards.slice(3);

const responsiveSkillCards = () => {
  fullSkillCards.forEach(
    (card) => (card.style.height = getComputedStyle(card).width)
  );
  midSkillCards.forEach(
    (card) => (card.style.height = getComputedStyle(card).width / 2)
  );
};

window.addEventListener("load", responsiveSkillCards);
window.addEventListener("resize", responsiveSkillCards);
