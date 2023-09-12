// function adicionarClasseComEfeitoHover() {
//   const imagens = document.querySelectorAll(".img-carrosel-home");
//   let index = 0;

//   setInterval(() => {
//     imagens.forEach((imagem, i) => {
//       if (i === index) {
//         imagem.classList.add("hover-effect");
//       } else {
//         imagem.classList.remove("hover-effect");
//       }

//       // Encontra as divs text-carrosel-home e text-carrosel-hover dentro de cada imagem
//       const textCarroselHome = imagem.querySelector(".text-carrosel-home");
//       const textCarroselHover = imagem.querySelector(".text-carrosel-hover");

//       // Alterar a visibilidade com base na classe hover-effect
//       if (imagem.classList.contains("hover-effect")) {
//         textCarroselHome.style.display = "none";
//         textCarroselHover.style.display = "flex";
//         textCarroselHover.style.display = "transition: 0.7s;";
//       } else {
//         textCarroselHome.style.display = "flex";
//         textCarroselHover.style.display = "none";
//       }
//     });

//     index = (index + 1) % imagens.length;
//   }, 3000);
// }

// adicionarClasseComEfeitoHover();

// function adicionarClasseComEfeitoHover() {
//   const imagens = document.querySelectorAll(".img-carrosel-home");
//   let index = 0;
//   let isPaused = false; // Variável para controlar a pausa

//   // Função para pausar ou retomar a execução
//   function togglePause() {
//     isPaused = !isPaused;
//   }

//   imagens.forEach((imagem) => {
//     imagem.addEventListener("mouseenter", togglePause);
//     imagem.addEventListener("mouseleave", togglePause);
//   });

//   function nextImage() {
//     if (!isPaused) {
//       imagens.forEach((imagem, i) => {
//         if (i === index) {
//           imagem.classList.add("hover-effect");
//         } else {
//           imagem.classList.remove("hover-effect");
//         }

//         const textCarroselHome = imagem.querySelector(".text-carrosel-home");
//         const textCarroselHover = imagem.querySelector(".text-carrosel-hover");

//         if (imagem.classList.contains("hover-effect")) {
//           textCarroselHome.style.display = "none";
//           textCarroselHover.style.display = "flex";
//           textCarroselHover.style.transition = "0.7s"; // Corrigido o erro aqui
//         } else {
//           textCarroselHome.style.display = "flex";
//           textCarroselHover.style.display = "none";
//         }
//       });

//       index = (index + 1) % imagens.length;
//     }
//   }

//   setInterval(nextImage, 3000);
// }

// adicionarClasseComEfeitoHover();

//remoção do hover-effect ok
// function adicionarClasseComEfeitoHover() {
//   const imagens = document.querySelectorAll(".img-carrosel-home");
//   const wrapperCosmos = document.querySelector(".wrapper-cosmos"); // Substitua pelo seletor correto

//   let index = 0;
//   let isPaused = false; // Variável para controlar a pausa

//   // Função para pausar a execução
//   function pause() {
//     isPaused = true;
//     imagens.forEach((imagem) => {
//       imagem.classList.remove("hover-effect");
//     });
//   }

//   // Função para retomar a execução
//   function resume() {
//     isPaused = false;
//   }

//   imagens.forEach((imagem) => {
//     // Event listener para quando o mouse entra na imagem
//     imagem.addEventListener("mouseenter", pause);

//     // Event listener para quando o mouse sai da imagem
//     imagem.addEventListener("mouseleave", resume);
//   });

//   function nextImage() {
//     if (!isPaused) {
//       imagens.forEach((imagem, i) => {
//         if (i === index) {
//           imagem.classList.add("hover-effect");
//         } else {
//           imagem.classList.remove("hover-effect");
//         }

//         const textCarroselHome = imagem.querySelector(".text-carrosel-home");
//         const textCarroselHover = imagem.querySelector(".text-carrosel-hover");

//         if (imagem.classList.contains("hover-effect")) {
//           textCarroselHome.style.display = "none";
//           textCarroselHover.style.display = "flex";
//           textCarroselHover.style.transition = "0.7s";
//         } else {
//           textCarroselHome.style.display = "flex";
//           textCarroselHover.style.display = "none";
//         }
//       });

//       index = (index + 1) % imagens.length;
//     }
//   }

//   setInterval(nextImage, 3000);

//   // Event listener para quando o mouse entra na div pai
//   wrapperCosmos.addEventListener("mouseenter", pause);

//   // Event listener para quando o mouse sai da div pai
//   wrapperCosmos.addEventListener("mouseleave", resume);
// }

// adicionarClasseComEfeitoHover();

function adicionarClasseComEfeitoHover() {
  const imagens = document.querySelectorAll(".img-carrosel-home");
  const wrapperCosmos = document.querySelector(".wrapper-cosmos"); // Substitua pelo seletor correto

  let index = 0;
  let isPaused = false; // Variável para controlar a pausa

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
    // Event listener para quando o mouse entra na imagem
    imagem.addEventListener("mouseenter", pause);

    // Event listener para quando o mouse sai da imagem
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

  // Event listener para quando o mouse entra na div pai
  wrapperCosmos.addEventListener("mouseenter", pause);

  // Event listener para quando o mouse sai da div pai
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
