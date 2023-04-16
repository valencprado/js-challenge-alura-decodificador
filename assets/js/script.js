const textoInput = document.getElementById("texto");
const resultado = document.querySelector(".resultado");
const btnDescripto = document.querySelector(".btn-descriptografa");
const btnCripto = document.querySelector(".btn-criptografa");

function criptografa() {
  const criptografos = ["ai", "enter", "imes", "ober", "ufat"];
  let texto = textoInput.value;
  texto.toLowerCase();
  texto = texto.replace(/e/g, criptografos[1]);
  texto = texto.replace(/o/g, criptografos[3]);
  texto = texto.replace(/i/g, criptografos[2]);
  texto = texto.replace(/a/g, criptografos[0]);
  texto = texto.replace(/u/g, criptografos[4]);
  
  
  return resultado.innerHTML = texto;
}

function descriptografa() {
  const vogais = ["a", "e", "i", "o", "u"];
  let texto = textoInput.value;
  texto.toLowerCase();
  texto = texto.replace(/ai/g, vogais[0]);
  texto = texto.replace(/enter/g, vogais[1]);
  texto = texto.replace(/imes/g, vogais[2]);
  texto = texto.replace(/ober/g, vogais[3]);
  texto = texto.replace(/ufat/g, vogais[4]);
  return resultado.innerHTML = texto;

}

     btnCripto.onclick = criptografa;
     btnDescripto.onclick = descriptografa;

