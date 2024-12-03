// Function to toggle the sidebar's visibility
export function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.toggle("open");

  // Adjust the sidebar and hamburger icon based on the sidebar's state
  if (sidebar.classList.contains("open")) {
    sidebar.style.left = "0rem"; // Move sidebar into view
    hamburger.style.opacity = "0"; // Hide hamburger icon
    hamburger.style.pointerEvents = "none"; // Disable interactions
  } else {
    sidebar.style.left = "-15.625rem"; // Move sidebar out of view
    hamburger.style.opacity = "1"; // Make hamburger icon visible
    hamburger.style.pointerEvents = "auto"; // Enable interactions
  }
}

// Function to explicitly close the sidebar
export function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.remove("open");
  sidebar.style.left = "-15.625rem"; // Ensure the sidebar is moved out of view
  hamburger.style.opacity = "1"; // Ensure hamburger is visible when sidebar is closed
  hamburger.style.pointerEvents = "auto"; // Ensure interactions are enabled
}

// Set up event listeners for sidebar links
export function setupSidebarLinks() {
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
}

// Close the sidebar when the window is scrolled
document.addEventListener("scroll", () => {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  }
});
