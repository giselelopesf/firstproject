function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // Se estiver no modo light, usar a imagem clara
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // Se estiver no modo dark, usar a imagem escura
    img.setAttribute("src", "./assets/avatar-light.png")
  }
}




    
    
    
