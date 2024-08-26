function encriptar() {
    let texto = document.getElementById("texto").value;
    if(texto !== ""){
        document.querySelector(".resultado img").style.display = "none";
        document.querySelector(".resultado h2").style.display = "none";
        document.querySelector(".resultado p").style.display = "none";
    }
    let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    console.log(textoEncriptado);
    document.getElementById("texto").value = textoEncriptado;
    document.getElementById("texto-copia").innerHTML = textoEncriptado;
    document.querySelector(".copiar").style.display = "block";
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    console.log(textoDesencriptado);
    document.getElementById("texto").value = textoDesencriptado;
    document.getElementById("texto-copia").innerHTML = textoDesencriptado;
}

function copiar(){
    let texto = document.getElementById("texto").value;
    navigator.clipboard.writeText(texto);
}