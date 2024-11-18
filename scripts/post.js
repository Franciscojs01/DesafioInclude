function createPost() {
  // Obter os valores dos campos de entrada
  const description = document.getElementById("description").value.trim()
  const imageUrl = document.getElementById("imageUrl").value.trim()
  const author = document.getElementById("author").value.trim()

  // Validar se todos os campos foram preenchidos
  if (!description || !imageUrl || !author) {
    alert("Por favor, preencha todos os campos.")
    return
  }

  // Criar o container do post
  const postContainer = document.createElement("div")
  postContainer.classList.add("post-container")

  // Adicionar o conteúdo ao container do post
  postContainer.innerHTML = `
    <p><strong>Descrição:</strong> ${description}</p>
    <p><strong>Imagem:</strong> <img src="${imageUrl}" alt="Imagem do post" style="max-width: 100%; height: auto;"></p>
    <p><strong>Autor:</strong> ${author}</p>
  `

  // Adicionar o post ao elemento de lista de posts
  const postList = document.getElementById("postList")
  postList.appendChild(postContainer)

  // Limpar os campos de entrada
  document.getElementById("description").value = ""
  document.getElementById("imageUrl").value = ""
  document.getElementById("author").value = ""
}
