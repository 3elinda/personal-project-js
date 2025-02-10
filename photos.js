const slideContainer = document.getElementById("slide-container");
const slideImages = document.querySelector(".images");
const prevButton = document.getElementById("arrow-prev");
const nextButton = document.getElementById("arrow-next");

nextButton.addEventListener("click", function () {
  const imageWidth = slideImages.clientWidth;
  slideContainer.scrollLeft += imageWidth;
});

prevButton.addEventListener("click", function () {
  const imageWidth = slideImages.clientWidth;
  slideContainer.scrollLeft -= imageWidth;
});
