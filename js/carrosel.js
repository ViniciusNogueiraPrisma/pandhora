var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    // disableOnInteraction: false,
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
});

// var swiperContainers = document.querySelectorAll(".mySwiper");
// var imageUrls = [
//   // "./images/person/buka.png",
//   // "./images/person/person2.png",
//   // "./images/person/person3.png",
//   // Adicione mais URLs de imagens conforme necessário
// ];

// // Função para alternar a classe "active" e adicionar imagem
// function rotateActiveSlide(swiperContainer) {
//   var slides = swiperContainer.querySelectorAll(".swiper-slide");
//   var activeIndex = Array.from(slides).findIndex((slide) =>
//     slide.classList.contains("active-fundos")
//   );

//   slides.forEach((slide) => {
//     slide.classList.remove("active-fundos");
//     // Remove a imagem anterior se existir
//     var imgElement = slide.querySelector(".slide-image");
//     if (imgElement) {
//       imgElement.remove();
//     }
//   });

//   var nextIndex = (activeIndex + 1) % slides.length;
//   slides[nextIndex].classList.add("active-fundos");

//   var activeSlide = slides[nextIndex];
//   var imgElement = document.createElement("img");
//   var imageUrl = imageUrls[nextIndex % imageUrls.length]; // Cicla pelas URLs de imagens
//   imgElement.src = imageUrl;
//   imgElement.classList.add("slide-image");
//   activeSlide.appendChild(imgElement);
// }

// // Alterna a classe "active" e adiciona imagem a cada 2 segundos para cada contêiner Swiper
// swiperContainers.forEach((swiperContainer) => {
//   setInterval(function () {
//     rotateActiveSlide(swiperContainer);
//   }, 2000); // Alterna a cada 2 segundos
// });
