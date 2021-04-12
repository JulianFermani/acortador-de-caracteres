
// variables basicas del DOM
const oldText = document.querySelector('.oldText').value;
const numCharacters = document.querySelector('.number').value;
const convertButton = document.querySelector('.btn');

 // Creando y añadiendo nodos
const nodoPadre = document.querySelector('.newText');
const nodoHijo = document.querySelector('.new-text')
nodoPadre.appendChild(nodoHijo);

 // Funcion que convierte el oldText a newText
function convert(e){
  let newText = oldText.slice(0, numCharacters);
  let nodoTexto = document.createTextNode(newText);
  nodoHijo.appendChild(nodoTexto);
};

const moon = document.querySelector('.bi-moon-fill');
const sun = document.querySelector('.bi-brightness-high');

moon.addEventListener('click', nightMode, true);
sun.addEventListener('click', normalMode, true);

const body = document.querySelector('.body');

function nightMode(){
  if (moon) {
    body.style.backgroundColor = 'black';
    moon.style.display = 'none';
    sun.style.display = 'block';
  };
};

function normalMode(){
  if (sun) {
    body.style.backgroundColor = 'white';
    sun.style.display = 'none';
    moon.style.display = 'block'
  };
}
