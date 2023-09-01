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

const divImagem = document.querySelector(".img-fundo-home");
const imagens = [
  "../images/Person/buka.png",
  "../images/Person/person2.png",
  "../images/Person/person3.png",
];
let currentIndexImg = 0;

function alterarImagem() {
  divImagem.innerHTML = `<img src="${imagens[currentIndexImg]}" alt="Imagem">`;

  currentIndexImg = (currentIndexImg + 1) % imagens.length;
}

// Chame a função alternarClasseAtiva usando setInterval para alternar a classe a cada 2 segundos
setInterval(alternarClasseAtiva, 2000);

// Adicione um ouvinte de evento para o evento de rolagem no documento
document.addEventListener("scroll", () => {
  // Chame a função alternarClasseAtiva quando ocorrer um evento de rolagem
  alternarClasseAtiva();
});

// Chame a função alterarImagem usando setInterval como você fez anteriormente
setInterval(alterarImagem, 2000);
