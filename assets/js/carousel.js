export function initializeCarousel() {
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    let counter = 0;

    // Function to change to the next background image
    const changeImage = () => {
      // Remove the "active" class from all items
      items.forEach((item) => {
        item.classList.remove("active");
      });

      // Increment counter and reset if it reaches the end
      counter = (counter + 1) % items.length;

      // Add the "active" class to the current item
      items[counter].classList.add("active");
    };

    // Move to the previous background image when "Prev" button is clicked
    document.getElementById("prev").addEventListener("click", () => {
      items[counter].classList.remove("active");
      counter = (counter - 1 + items.length) % items.length; // Move backwards
      items[counter].classList.add("active");
    });

    // Move to the next background image when "Next" button is clicked
    document.getElementById("next").addEventListener("click", changeImage);

    // Automatically change images every 3 seconds
    setInterval(changeImage, 5000);
  });
}
