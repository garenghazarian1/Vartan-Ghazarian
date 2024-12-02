import { initializeCarousel } from "./carousel.js";
import { loadVideoSection } from "./youtubeHtml.js";
import { loadMusicSection } from "./musicHtml.js";
import { setupAudioPlayers } from "./audioManager.js";
import { toggleSidebar, closeSidebar, setupSidebarLinks } from "./sideBar.js";
import { loadContactSection } from "./contactHtml.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    initializeCarousel();
    loadVideoSection();
    loadMusicSection();
    setupAudioPlayers();
    setupSidebarLinks();
    loadContactSection();
    const hamburger = document.querySelector(".hamburger");

    // Toggle sidebar on hamburger click
    hamburger.addEventListener("click", toggleSidebar);

    // Close sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
      const sidebar = document.querySelector(".sidebar");
      if (
        !sidebar.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        closeSidebar();
      }
    });
  } catch (error) {
    console.error("Error initializing modules:", error);
  }
});
