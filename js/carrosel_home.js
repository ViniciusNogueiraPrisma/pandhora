// $(document).ready(function () {
//   var timeout;
//   $(".nav-item.dropdown").hover(
//     function () {
//       clearTimeout(timeout); // limpa o temporizador para evitar a ocultação
//       $(".dropdown-menu", this).stop(true, true).slideDown("fast");
//     },
//     function () {
//       var $dropdown = $(".dropdown-menu", this);
//       timeout = setTimeout(function () {
//         $dropdown.stop(true, true).slideUp("fast");
//       }, 0);
//     }
//   );
// });

$(document).ready(function () {
  var timeout;
  $(".nav-item.dropdown").hover(
    function () {
      clearTimeout(timeout);
      $(".dropdown-menu", this).stop(true, true).slideDown("fast");
      $(this).find(".nav-link").addClass("dropdown-ativo");
    },
    function () {
      var $dropdown = $(".dropdown-menu", this);
      timeout = setTimeout(() => {
        $dropdown.stop(true, true).slideUp("fast");
        $(this).find(".nav-link").removeClass("dropdown-ativo");
      }, 0);
    }
  );
});

function adicionarClasseComEfeitoHover() {
  const imagens = document.querySelectorAll(".img-carrosel-home");
  const wrapperCosmos = document.querySelector(".wrapper-cosmos");

  let index = 0;
  let isPaused = false;

  // Função para pausar a execução
  function pause() {
    isPaused = true;
    imagens.forEach((imagem) => {
      imagem.classList.remove("hover-effect");
      const textCarroselHover = imagem.querySelector(".text-carrosel-hover");
      textCarroselHover.style.display = "none"; // Oculta o text-carrosel-hover

      const textCarroselHome = imagem.querySelector(".text-carrosel-home");
      textCarroselHome.style.display = "flex"; // Exibe o text-carrosel-home
    });
  }

  // Função para retomar a execução
  function resume() {
    isPaused = false;
  }

  imagens.forEach((imagem) => {
    imagem.addEventListener("mouseenter", pause);

    imagem.addEventListener("mouseleave", resume);
  });

  function nextImage() {
    if (!isPaused) {
      imagens.forEach((imagem, i) => {
        if (i === index) {
          imagem.classList.add("hover-effect");
        } else {
          imagem.classList.remove("hover-effect");
        }

        const textCarroselHome = imagem.querySelector(".text-carrosel-home");
        const textCarroselHover = imagem.querySelector(".text-carrosel-hover");

        if (imagem.classList.contains("hover-effect")) {
          textCarroselHome.style.display = "none";
          textCarroselHover.style.display = "flex";
          textCarroselHover.style.transition = "0.7s";
        } else {
          textCarroselHome.style.display = "flex";
          textCarroselHover.style.display = "none";
        }
      });

      index = (index + 1) % imagens.length;
    }
  }

  setInterval(nextImage, 3000);

  wrapperCosmos.addEventListener("mouseenter", pause);
  wrapperCosmos.addEventListener("mouseleave", resume);
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
