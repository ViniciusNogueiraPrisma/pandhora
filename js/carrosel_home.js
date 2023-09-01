// function adicionarClasseComEfeitoHover() {
//   const imagens = document.querySelectorAll(".img-carrosel-home");
//   let index = 0;

//   setInterval(() => {
//     imagens.forEach((imagem) => {
//       imagem.classList.remove("hover-effect");
//     });

//     imagens[index].classList.add("hover-effect");
//     index = (index + 1) % imagens.length;
//   }, 2000); // Troca de imagem a cada 2 segundos
// }

// adicionarClasseComEfeitoHover();

// function adicionarClasseComEfeitoHover() {
//   const imagens = document.querySelectorAll(".img-carrosel-home");
//   let index = 0;

//   setInterval(() => {
//     imagens.forEach((imagem) => {
//       imagem.classList.remove("hover-effect");
//       // Encontre as divs text-carrosel-home e text-carrosel-hover dentro de cada imagem
//       const textCarroselHome = imagem.querySelector(".text-carrosel-home");
//       const textCarroselHover = imagem.querySelector(".text-carrosel-hover");
//       // Alternar a visibilidade com base na classe hover-effect
//       if (imagem.classList.contains("hover-effect")) {
//         textCarroselHome.style.display = "none";
//         textCarroselHover.style.display = "flex";
//       } else {
//         textCarroselHome.style.display = "flex";
//         textCarroselHover.style.display = "none";
//       }
//     });

//     imagens[index].classList.add("hover-effect");
//     index = (index + 1) % imagens.length;
//   }, 2000); // Troca de imagem a cada 2 segundos
// }

// adicionarClasseComEfeitoHover();

// function adicionarClasseComEfeitoHover() {
//   const imagens = document.querySelectorAll(".img-carrosel-home");
//   let index = 0;

//   setInterval(() => {
//     imagens.forEach((imagem) => {
//       imagem.classList.remove("hover-effect");

//       // Encontre as divs text-carrosel-home e text-carrosel-hover dentro de cada imagem
//       const textCarroselHome = imagem.querySelector(".text-carrosel-home");
//       const textCarroselHover = imagem.querySelector(".text-carrosel-hover");

//       // Alternar as classes CSS para mostrar e ocultar o conteúdo corretamente
//       if (imagem.classList.contains("hover-effect")) {
//         textCarroselHome.classList.remove("show");
//         textCarroselHover.classList.add("show");
//       } else {
//         textCarroselHome.classList.add("show");
//         textCarroselHover.classList.remove("show");
//       }
//     });

//     imagens[index].classList.add("hover-effect");
//     index = (index + 1) % imagens.length;
//   }, 2000); // Troca de imagem a cada 2 segundos
// }

// adicionarClasseComEfeitoHover();

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

      // Encontre as divs text-carrosel-home e text-carrosel-hover dentro de cada imagem
      const textCarroselHome = imagem.querySelector(".text-carrosel-home");
      const textCarroselHover = imagem.querySelector(".text-carrosel-hover");

      // Alterar a visibilidade com base na classe hover-effect
      if (imagem.classList.contains("hover-effect")) {
        textCarroselHome.style.display = "none";
        textCarroselHover.style.display = "flex";
      } else {
        textCarroselHome.style.display = "flex";
        textCarroselHover.style.display = "none";
      }
    });

    index = (index + 1) % imagens.length;
  }, 2000); // Troca de imagem a cada 2 segundos
}

adicionarClasseComEfeitoHover();
