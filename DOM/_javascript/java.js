function myFunction() {
  document.getElementById("scrollBox").innerHTML =
    "Posição de rolagem horizontal: " +
    window.scrollX +
    "<br><br>Posição de rolagem vertical: " +
    window.scrollY;
    document.getElementById("demo").innerHTML =
  "Largura interna da janela: " +
  window.innerWidth +
  "<br><br>Altura interna da janela: " +
  window.innerHeight;
}

