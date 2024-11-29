export async function loadMusicSection() {
  try {
    const response = await fetch("./pages/music.html");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const content = await response.text();
    document.getElementById("audio").innerHTML = content;
  } catch (error) {
    console.error("Error loading the video section:", error);
    document.getElementById("videoSection").innerHTML =
      "<p>Failed to load content.</p>";
  }
}
