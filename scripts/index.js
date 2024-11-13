var menuItem = document.querySelectorAll(".item-menu") // guarda todos elementos de item menu.

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"))

  this.classList.add("ativo")
}

menuItem.forEach((item) => item.addEventListener("click", selectLink))
