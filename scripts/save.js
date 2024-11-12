// Seleciona o botão de menu "hambúrguer" no documento HTML
const hamburguer = document.querySelector(".hamburguer")

// Seleciona o elemento de navegação que contém a lista de links
const nav = document.querySelector(".nav")

// uma arrow function para quando clicar no botão hamburguer e for verdadeiro ele vai sumir e quando for falso ele vai permanecer lá
hamburguer.addEventListener("click", () => nav.classList.toggle("active"))
// Alterna a classe "active" no elemento de navegação ao clicar no botão
