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

var swiper = new Swiper(".mySwiper-fundos", {
  slidesPerView: 3,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-fundos",
    clickable: true,
  },
});

const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".active");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});

function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach(
    (item) => (item.innerHTML = "<i class='fa-solid fa-plus themas' ></i>")
  );

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "<i class='fa-solid fa-minus themas' ></i>";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}

const divsFilhas = document.querySelectorAll(
  ".cards-fundo-home > .card-carrosel-home"
);
let currentIndex = 0;

function alternarClasseAtiva() {
  divsFilhas.forEach((div) => div.classList.remove("active-fundos"));
  divsFilhas[currentIndex].classList.add("active-fundos");

  currentIndex = (currentIndex + 1) % divsFilhas.length;
}

setInterval(alternarClasseAtiva, 2000);

const divImagem = document.querySelector(".img-fundo-home");
const imagens = [
  "../images/Person/buka.png",
  "../images/Person/person2.png",
  "../images/Person/person3.png",
]; // Substitua pelos URLs das suas imagens
let currentIndexImg = 0;

function alterarImagem() {
  divImagem.innerHTML = `<img src="${imagens[currentIndexImg]}" alt="Imagem">`;

  currentIndexImg = (currentIndexImg + 1) % imagens.length;
}

setInterval(alterarImagem, 2000);

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
