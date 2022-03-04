"use strict";

let svgLogo = document.querySelector("svg");

svgLogo.addEventListener("mouseenter", (event) => {
  event.preventDefault;

  // -> removing the class
  svgLogo.classList.remove("run-animation");

  // -> repaints and reflows
  svgLogo.getClientRects();

  // -> and re-adding the class
  svgLogo.classList.add("run-animation");
});
