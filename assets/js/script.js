const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

let counter = 0;
const size = images[0].clientWidth;

document.getElementById("next").addEventListener("click", () => {
  if (counter >= images.length - 1) counter = -1;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

document.getElementById("prev").addEventListener("click", () => {
  if (counter <= 0) counter = images.length;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
