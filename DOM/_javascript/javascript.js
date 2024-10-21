function darkMode(){
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Tema escuro ATIVADO";
}
function lightMode(){
    var element = document.body
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Tema escuro DESATIVADO"
}