
const oldText = document.querySelector('.oldText').value;
const numCharacters = document.querySelector('.number').value;
const convertButton = document.querySelector('.btn');


const nodoPadre = document.querySelector('.newText');
const nodoHijo = document.createElement('p');
nodoPadre.appendChild(nodoHijo);

function convert(e){
  let newText = oldText.slice(0, numCharacters);
  let nodoTexto = document.createTextNode(newText);
  nodoHijo.appendChild(nodoTexto);
};
