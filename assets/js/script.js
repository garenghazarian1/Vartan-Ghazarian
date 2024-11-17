import { initializeCarousel } from "./carousel.js";
import { loadVideoSection } from "./youtube.js";

initializeCarousel();

document.addEventListener("DOMContentLoaded", () => {
  loadVideoSection();
});
