export async function loadContactSection() {
  try {
    const response = await fetch("./pages/contact.html");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const content = await response.text();
    document.getElementById("contactSection").innerHTML = content;
  } catch (error) {
    console.error("Error loading the video section:", error);
    document.getElementById("contactSection").innerHTML =
      "<p>Failed to load content.</p>";
  }
}
