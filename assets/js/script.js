import { initializeCarousel } from "./carousel.js";
import { loadVideoSection } from "./youtubeHtml.js";
import { loadMusicSection } from "./musicHtml.js";
import { setupAudioPlayers } from "./audioManager.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    initializeCarousel();
    loadVideoSection();
    loadMusicSection();
    setupAudioPlayers();
  } catch (error) {
    console.error("Error initializing modules:", error);
  }
});
