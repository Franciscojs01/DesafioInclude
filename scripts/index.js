var menuItem = document.querySelectorAll(".item-menu") // guarda todos elementos de item menu.

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"))

  this.classList.add("ativo")
}

menuItem.forEach((item) => item.addEventListener("click", selectLink))

//Expandi o menu

var btnExp = document.querySelector("#btn-exp")
var menuSide = document.querySelector(".menu-lateral")

// utilizando o evento para quando for clicado
btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir")
})
