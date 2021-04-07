
const oldText = document.querySelector('.oldText').value;
const numCharacters = document.querySelector('.number').value;
const convertButton = document.querySelector('.btn');


const nodoPadre = document.querySelector('.newText');
const nodoHijo = document.createElement('p');

function convert(e){
  nodoHijo.innerHTML = oldText;
  nodoPadre.appendChild(nodoHijo);
}
