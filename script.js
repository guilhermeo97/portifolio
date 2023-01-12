var entrada = document.getElementById("entrada")
var enviar = document.getElementById("enviar")
var saida = document.getElementById("saida")

function copiarEntrada() {
    saida.innerHTML = entrada.value;
}

enviar.addEventListener("click", copiarEntrada)