export function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  // Toggle the 'open' class on the sidebar
  sidebar.classList.toggle("open");

  // Check if the sidebar is now open and adjust styles accordingly
  if (sidebar.classList.contains("open")) {
    sidebar.style.left = "0px"; // Move sidebar into view
    hamburger.style.opacity = "0"; // Hide hamburger icon
    hamburger.style.pointerEvents = "none"; // Disable interactions
  } else {
    sidebar.style.left = "-250px"; // Move sidebar out of view
    hamburger.style.opacity = "1"; // Make hamburger icon visible
    hamburger.style.pointerEvents = "auto"; // Enable interactions
  }
}

// Function to explicitly close the sidebar
export function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.remove("open");
  sidebar.style.left = "-250px"; // Ensure the sidebar is moved out of view
  hamburger.style.opacity = "1"; // Ensure hamburger is visible when sidebar is closed
  hamburger.style.pointerEvents = "auto"; // Ensure interactions are enabled
}
