export function initializeCarousel() {
  function setupCarousel() {
    const items = document.querySelectorAll(".carousel-item");
    let counter = 0;

    const changeImage = () => {
      items.forEach((item) => item.classList.remove("active"));
      counter = (counter + 1) % items.length;
      items[counter].classList.add("active");
    };

    document.getElementById("prev").addEventListener("click", () => {
      items[counter].classList.remove("active");
      counter = (counter - 1 + items.length) % items.length;
      items[counter].classList.add("active");
    });

    document.getElementById("next").addEventListener("click", changeImage);
    setInterval(changeImage, 5000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupCarousel);
  } else {
    setupCarousel();
  }
}
