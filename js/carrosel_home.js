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
  }, 3000);
}

adicionarClasseComEfeitoHover();
