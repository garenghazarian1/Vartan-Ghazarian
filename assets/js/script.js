import { initializeCarousel } from "./carousel.js";
// import { loadVideoSection } from "./youtube.js";
import { setupAudioPlayers } from "./audioManager.js";

initializeCarousel();

// document.addEventListener("DOMContentLoaded", () => {
//   loadVideoSection();
// });

document.addEventListener("DOMContentLoaded", () => {
  // Setup the audio players once the DOM is fully loaded
  setupAudioPlayers();
});
