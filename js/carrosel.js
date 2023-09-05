var swiperVertical = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

var swiper = new Swiper(".mySwiper-fundos", {
  slidesPerView: "auto",
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

var swiperCosmos = new Swiper(".mySwiper-cosmos", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination-cosmos",
  },
});

var swiper = new Swiper(".mySwiper-equipe", {
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination-equipe",
  },
});

const paginationItems = document.querySelectorAll(".pagination-home-main li");
let activeIndex = 0;

function updatePagination() {
  // Remove a classe 'active' de todos os dots
  paginationItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Define a classe 'active' para o próximo dot
  paginationItems[activeIndex].classList.add("active");

  // Incrementa activeIndex e redefine para 0 quando ultrapassa o número de items
  activeIndex = (activeIndex + 1) % paginationItems.length;
}

// Inicializa a paginação após 3 segundos
setTimeout(() => {
  updatePagination();
  // Atualiza a paginação a cada 3 segundos
  setInterval(updatePagination, 3000);
}, 3000);
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

let currentIndexFundos = 0;
const divsFilhasFundos = document.querySelectorAll(
  ".itens-fundo-home .card-carrosel-home"
);

function adicionarClasseAtiva() {
  divsFilhasFundos.forEach((divFilha, index) => {
    divFilha.classList.remove("active-fundos");
  });

  divsFilhasFundos[currentIndexFundos].classList.add("active-fundos");
  currentIndexFundos = (currentIndexFundos + 1) % divsFilhasFundos.length;
}

setInterval(adicionarClasseAtiva, 2000);
