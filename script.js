const ingreseTexto = document.getElementById("ingreseTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const textoFinal = document.getElementById("textoFinal");
const gif = document.getElementById("gif");
const info2 = document.getElementById("info2");
const seccion2 = document.getElementById("seccion2");

let remplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
];

const remplace = (nuevovalor) => {
  textoFinal.innerHTML = nuevovalor;
  gif.classList.add("oculto");
  ingreseTexto.value = "";
  info2.style.display = "none";
  botonCopiar.style.display = "block";
  seccion2.classList.add("ajustar");
  textoFinal.classList.add("ajustar");
};

botonEncriptar.addEventListener("click", () => {
  const texto = ingreseTexto.value.toLowerCase();

  function encriptar(newText) {
    for (let i = 0; i < remplazar.length; i++) {
      if (newText.includes(remplazar[i][0])) {
        newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
      }
    }
    return newText;
  }

  remplace(encriptar(texto));
});

botonDesencriptar.addEventListener("click", () => {
  const texto = ingreseTexto.value.toLowerCase();

  function desencriptar(newText) {
    for (let i = 0; i < remplazar.length; i++) {
      if (newText.includes(remplazar[i][1])) {
        newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
      }
    }
    return newText;
  }

  remplace(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
  let texto = textoFinal;
  texto.select();
  document.execCommand("copy");
  alert("Texto Copiado");

  textoFinal.innerHTML = "";

  gif.classList.remove("oculto");
  info2.style.display = "block";
  botonCopiar.style.display = "none";
  seccion2.classList.remove("ajustar");
  textoFinal.classList.remove("ajustar");
  ingreseTexto.focus();
});
