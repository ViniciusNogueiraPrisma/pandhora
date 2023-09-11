function adicionarClasseComEfeitoHover() {
  const imagens = document.querySelectorAll(".img-carrosel-home");
  let index = 0;

  setInterval(() => {
    imagens.forEach((imagem, i) => {
      if (i === index) {
        imagem.classList.add("hover-effect");
      } else {
        imagem.classList.remove("hover-effect");
      }

      // Encontra as divs text-carrosel-home e text-carrosel-hover dentro de cada imagem
      const textCarroselHome = imagem.querySelector(".text-carrosel-home");
      const textCarroselHover = imagem.querySelector(".text-carrosel-hover");

      // Alterar a visibilidade com base na classe hover-effect
      if (imagem.classList.contains("hover-effect")) {
        textCarroselHome.style.display = "none";
        textCarroselHover.style.display = "flex";
        textCarroselHover.style.display = "transition: 0.7s;";
      } else {
        textCarroselHome.style.display = "flex";
        textCarroselHover.style.display = "none";
      }
    });

    index = (index + 1) % imagens.length;
  }, 31000);
}

adicionarClasseComEfeitoHover();

var swiperCosmos = new Swiper(".mySwiper-cosmos-last", {
  slidesPerView: 1,
  // spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-cosmos-last",
  },
});



$(document).ready(function () {
  var timeout;
  $(".nav-item.dropdown").hover(
    function () {
      clearTimeout(timeout); // Limpa o temporizador para evitar a ocultação
      $(".dropdown-menu", this).stop(true, true).slideDown("fast");
    },
    function () {
      var $dropdown = $(".dropdown-menu", this);
      timeout = setTimeout(function () {
        $dropdown.stop(true, true).slideUp("fast");
      }, 10); // Atraso de 200 milissegundos antes da ocultação
    }
  );
});
