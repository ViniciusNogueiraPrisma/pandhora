function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

$(".titulosCentral").each(function () {
  $("#resultsTitle").append($(this));
});

$(document).ready(function () {
  $("#voltar-ao-topo").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});

// observes the input's :focus and :focusout event inside the search box and styles its parent element.

$(".searchbox input").focus(function () {
  $(".searchbox .input-group").addClass("focused-border");
});

$(".searchbox input").focusout(function () {
  $(".searchbox .input-group").removeClass("focused-border");
});

// opens and closes the search box.

$(".open-searchbox, .close-searchbox").click(function () {
  $(".searchbox").toggleClass("active");
  $("body").toggleClass("open-menu");
});

// manages the status of the mobile menu.

$(".toggle-mobile-menu").click(function () {
  $(".mobile-menu-div").toggleClass("active");
  $(".header").toggleClass("open-menu");
  $("body").toggleClass("open-menu");
});

$(".button-mapa-site").click((e) => {
  $(".button-mapa-site").toggleClass("active");
});

$(document).ready(function () {
  if (window.matchMedia("(min-width: 992px").matches) {
    document.querySelector("#collapseMapSite").classList.add("show");
  }

  if (window.matchMedia("(max-width: 991px").matches) {
    document
      .querySelectorAll("#collapseMapSite .list-menu-footer > div .collapse")
      .forEach((item) => {
        item.classList.add("show");
      });
  }
});

// Código responsável por fazer o collapse das tables.

//$('.table:not(.table-not-break)').basictable({
//  breakpoint: 767
//});

// Animações para aparecer o elemento
AOS.init({
  once: true,
});

window.addEventListener(
  "scroll",
  debounce(() => {
    AOS.refresh();
  }, 200)
);

// Tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Contraste

function accessApplyTheme(theme) {
  localStorage.setItem("access_theme", theme);

  if (theme == "dark") {
    $("body").attr("data-theme", "dark");
  } else {
    $("body").attr("data-theme", "light");
  }
}

var access_theme = "light";

if (localStorage.getItem("access_theme")) {
  access_theme = localStorage.getItem("access_theme");
  accessApplyTheme(access_theme);
}

$("#contrast-toggle").on("click", function (e) {
  if (access_theme == "light") {
    access_theme = "dark";
  } else {
    access_theme = "light";
  }
  accessApplyTheme(access_theme);
});

/* Hover do menu */

$(
  ".header .nav-menu-header .header-navigation-item > .dropdown-toggle"
).removeAttr("data-bs-toggle");

document
  .querySelectorAll(".header .nav-menu-header .header-navigation-item")
  .forEach((i) => {
    const dropdown = i.querySelector(".dropdown-menu");
    const toggle = i.querySelector(".dropdown-toggle");

    i.addEventListener("mouseover", () => {
      dropdown.classList.add("show");
      toggle.classList.add("active");
      setTimeout(() => {
        dropdown.style.opacity = "1";
      }, 10);
    });

    i.addEventListener("mouseleave", () => {
      dropdown.style.opacity = "0";
      toggle.classList.remove("active");
      dropdown.classList.remove("show");
    });
  });

/* Carousels */

$(document).ready(function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // Slick Banner Home
    $("#destaques-home .box-destaques").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      fade: false,
      responsive: [
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    // Slick Banner Home
    $(".destaques-carousel-home").slick({
      slide: ".item-destaque-home:not(.ignoreMe)",
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      fade: false,
      responsive: [
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  $(".list-valores-organizacionais").slick({
    slidesToShow: 3,
    slidesToScroll: 1,

    dots: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".nav-central-result-destaque").slick({
    slidesToScroll: 1,
    asNavFor: ".list-central-result-home",
    dots: false,
    arrows: true,
    slidesToShow: 1,
    infinite: false,
    focusOnSelect: true,
  });

  $(".list-central-result-home").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    infinite: false,
    asNavFor: ".nav-central-result-destaque",
  });

  $(".list-nav-glossario").slick({
    slidesToShow: 26,
    slidesToScroll: 1,
    asNavFor: ".for-glossario-conteudo",
    dots: false,
    focusOnSelect: true,
    infinite: false,
    centerMode: false,
    arrows: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 16,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 10,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          centerMode: false,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
    ],
  });

  $(".for-glossario-conteudo").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    infinite: false,
    fade: true,
    asNavFor: ".list-nav-glossario",
    waitForAnimate: false,
  });

  $(".carousel-timeline-content").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,

    arrows: false,
    asNavFor: ".carousel-timeline-nav",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".carousel-timeline-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,

    dots: false,
    centerMode: false,
    focusOnSelect: true,

    asNavFor: ".carousel-timeline-content",
  });

  $(".carousel-timeline-nav .slick-next").on("click", () => {
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".slick-next.slick-disabled").attr("disabled", "disabled");
    }
  });

  $(".carousel-timeline-nav .slick-prev").on("click", () => {
    $(".slick-next").removeAttr("disabled");
  });
});

/* Focus no input */

function activeInputsFocus() {
  const inputs = document.querySelectorAll(
    ".div-input input, .div-input select, .div-input textarea"
  );

  inputs.forEach((input) => {
    if (input.value != "") {
      input.parentNode.classList.add("focus");
    }
    input.addEventListener("focus", (e) => {
      input.parentNode.classList.add("focus");
    });
    input.addEventListener("blur", (e) => {
      if (input.value == "") {
        input.parentNode.classList.remove("focus");
      }
    });
  });
}

activeInputsFocus();

/* Parar o vídeo quando fechar o modal */

function stopVideo() {
  let leg = $("#modalVideo iframe").attr("src");
  $("#modalVideo iframe").attr("src", leg);
}
if ($("modalVideo")) {
  $("#modalVideo").on("click", () => {
    setTimeout(() => {
      if (!$("#modalVideo").hasClass("show")) {
        stopVideo();
      }
    }, 200);
  });
}

/* Scroll to accordion */
$(document).ready(function () {
  let buttonAccordions = document.querySelectorAll(
    ".accordion:not(#accordionMenuMobile) button.accordion-button"
  );
  buttonAccordions.forEach((i) => {
    i.addEventListener("click", () => {
      setTimeout(() => {
        if (!i.classList.contains("collapsed")) {
          const id = i.getAttribute("data-bs-target");
          const section = $(id);
          const topo = section.offset().top;
          window.scrollTo({
            top: topo - 230,
            behavior: "smooth",
          });
        }
      }, 410);
    });
  });
});

const storys = new PrismaStories("slide", "#openStorys", "#closeStorys");
storys.init();
