
 // Variables basicas del DOM
const oldText = document.querySelector('.oldText').value;
const numCharacters = document.querySelector('.number').value;
const convertButton = document.querySelector('.btn');

 // Creando y añadiendo nodos
const nodoPadre = document.querySelector('.newText');
const nodoHijo = document.querySelector('.new-text');
nodoPadre.appendChild(nodoHijo);

 // Funcion que convierte el oldText a newText
function convert(e){
  let newText = oldText.slice(0, numCharacters);
  let nodoTexto = document.createTextNode(newText);
  nodoHijo.appendChild(nodoTexto);
};

 // Botón para copiar todo (en proceso)
// document.querySelector('.buttonCopy').addEventListener('click', copy);
//
// function copy() {
//   const prueba = document.querySelector('.prueba');
//   const seleccion = document.createRange();
//   seleccion.selectNodeContents(prueba);
//   window.getSelection().removeAllRanges();
//   window.getSelection().addRange(seleccion);
//   try {
//     const res = document.execCommand('copy');
//   } catch (e) {
//     window.getSelection().removeRange(seleccion);
//   } finally {
//
//   };
// };
//

 // Variables de modo noche y día
const moon = document.querySelector('.bi-moon-fill');
const sun = document.querySelector('.bi-brightness-high');

 // Evento que llama el modo dia y modo noche
sun.addEventListener('click', lightMode, true);
moon.addEventListener('click', nightMode, true);

 // DOM básico que me faltaba de tener
const body = document.querySelector('.body');
const oldTextStyles = document.querySelector('.oldText');
const totallyOfCharacters = document.querySelector('.number');
const newTextStyles = document.querySelector('.newTextStyles');

 // Funcion que hace el modo noche
function nightMode(){
  if (moon) {
    body.style.backgroundColor = '#060111';
    moon.style.display = 'none';
    sun.style.display = 'block';
    convertButton.style.background = 'linear-gradient(to right, #ad5389, #3c1053)';
    convertButton.style.borderColor = '#ffffff';
    convertButton.style.color = '#ffffff';
    oldTextStyles.style.backgroundColor = 'transparent';
    oldTextStyles.style.color = '#ffffff';
    totallyOfCharacters.style.backgroundColor = 'transparent';
    totallyOfCharacters.style.color = '#ffffff';
    newTextStyles.style.backgroundColor = 'transparent';
    nodoHijo.style.color = '#ffffff';
  };
};

 // Funcion que convierte el modo dia
function lightMode(){
  if (sun) {
    body.style.backgroundColor = '#ffffff';
    sun.style.display = 'none';
    moon.style.display = 'block';
    oldTextStyles.style.color = '#000000';
    totallyOfCharacters.style.color = '#000000';
    nodoHijo.style.color = '#000000';
    convertButton.style.background = 'transparent';
    convertButton.style.color = '#747d84';
    convertButton.style.borderColor = '#747d84';
  };
};
