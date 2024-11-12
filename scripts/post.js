function createPost() {
  const description = document.getElementById("description").value
  const imageUrl = document.getElementById("imageUrl").value
  const author = document.getElementById("author").value

  if (!description || !imageUrl || !author) {
    alert("Por favor, preencha todos os campos.")
    return undefined;
  }

  const postContainer = document.createElement("div")
  postContainer.classList.add("post-container")

  postContainer.innerHTML = `
        <p><strong>Descrição:</strong> ${description}</p>
        <p><strong>Imagem:</strong> <img src="${imageUrl}" alt="Imagem do post" style="max-width: 100%; height: auto;"></p>
        <p><strong>Autor:</strong> ${author}</p>
      `

  document.getElementById("postList").appendChild(postContainer)

  // Limpar os campos
  document.getElementById("description").value = ""
  document.getElementById("imageUrl").value = ""
  document.getElementById("author").value = ""
}
