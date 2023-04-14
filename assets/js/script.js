const textoInput = document.getElementById("texto");
const resultado = document.querySelector(".resultado");
const btnDescripto = document.querySelector(".descriptografa");
const btnCripto = document.querySelector(".criptografa");

function criptografa() {
  let texto = textoInput.value;
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/u/g, "ufat");

  
  return resultado.innerHTML = texto;
}

function descriptografa() {
  let texto = textoInput.value;
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return resultado.innerHTML = texto;

}

    btnCripto.onclick = criptografa;
    btnDescripto.onclick = descriptografa;


