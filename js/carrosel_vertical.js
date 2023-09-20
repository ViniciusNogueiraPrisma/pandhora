var swiper = new Swiper(".swiper-slides-fundos", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperContainer = document.querySelector(".mySwiper");

swiperContainer.addEventListener("mouseover", function () {
  swiper.mousewheel.enable();
});

swiperContainer.addEventListener("mouseout", function () {
  swiper.mousewheel.disable();
});
