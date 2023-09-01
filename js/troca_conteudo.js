// Aguarde o carregamento completo do documento
document.addEventListener("DOMContentLoaded", function () {
  // Capturando todos os links das abas
  const tabLinks = document.querySelectorAll(".tab-link");

  // Capturando todos os conteúdos das abas
  const tabContents = document.querySelectorAll(".tab-content");

  // Mostrar a aba com data-tab="1" por padrão
  const defaultTabId = "tab1"; // Defina o ID da aba padrão
  const defaultTabLink = document.querySelector(`[data-tab="${defaultTabId}"]`);

  // Adicione a classe "active" à aba padrão
  defaultTabLink.classList.add("active");

  // Adicione a classe "active" ao conteúdo da aba padrão
  const defaultTabContent = document.getElementById(defaultTabId);
  defaultTabContent.classList.add("active");

  // Adicionando um ouvinte de evento de clique a cada link da aba
  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita a atualização da página

      // Remove a classe "active" de todos os links de aba
      tabLinks.forEach((tabLink) => {
        tabLink.classList.remove("active");
      });

      // Adiciona a classe "active" apenas ao link de aba clicado
      link.classList.add("active");

      // Obtém o ID da aba que foi clicada a partir do atributo data-tab
      const tabId = link.getAttribute("data-tab");

      // Oculta todos os conteúdos das abas
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Mostra o conteúdo da aba correspondente
      const tabContent = document.getElementById(tabId);
      tabContent.classList.add("active");
    });
  });
});
