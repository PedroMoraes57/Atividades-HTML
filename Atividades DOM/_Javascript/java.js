function mudarTexto(){
    var p = document.getElementById("meuParagrafo");
    p.textContent = "Olá, esse é o novo texto!";
}
function mostrarValor(){
    var input = document.getElementsByName("meuInput")[0];
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Valor do input: " + input.value;
}
function adicionarParagrafo(){
    var p = document.createElement("p");
    p.textContent = "Este é um parágrafo!";
    document.body.appendChild(p);
}
function adicionarTexto(){
    var text = document.createTextNode("Este é um novo texto!");
    document.body.appendChild(text);
}
function darkMode(){
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Cor Mudada";
}
function lightMode(){
    var element = document.body
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Cor Padrão"
}