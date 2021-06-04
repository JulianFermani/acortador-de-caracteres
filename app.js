

const form = document.querySelector('.form');

// Boton para convertir el texto
const convertButton = document.querySelector('.buttonConvert');

// Nodos para poner en la página
const nodoPadre = document.querySelector('.newText');
let nodoHijo = document.querySelector('.new-text');


form.addEventListener('submit', function(event){
  // Función que cancela el evento de recargar la página
  event.preventDefault();

  // Tomo los valores del texto a convertir y la cantidad
  // de caracteres
  const oldText = document.querySelector('.oldText').value;
  const numCharacters = document.querySelector('.number').value;

  // Añado el parrafo en el div
  nodoPadre.appendChild(nodoHijo);

  // Funcion que convierte el oldText a newText
  let newText = oldText.slice(0, numCharacters);
  let nodoTexto = document.createTextNode(newText);
  nodoHijo.appendChild(nodoTexto);

});

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
    body.classList.add('bg-dark');
    moon.style.display = 'none';
    sun.style.display = 'block';
    oldTextStyles.classList.add('bg-transparent');
    oldTextStyles.classList.add('text-white');
    totallyOfCharacters.classList.add('bg-transparent');
    totallyOfCharacters.classList.add('text-white');
    newTextStyles.classList.add('bg-transparent');
    nodoHijo.classList.add('text-white');
  };
};

 // Funcion que convierte el modo dia
function lightMode(){
  if (sun) {
    body.classList.remove('bg-dark');
    body.classList.add('bg-light');
    sun.style.display = 'none';
    moon.style.display = 'block';
    oldTextStyles.classList.add('text-dark');
    oldTextStyles.classList.remove('text-white');
    totallyOfCharacters.classList.add('text-dark');
    totallyOfCharacters.classList.remove('text-white');
    convertButton.classList.add('bg-transparent');
    nodoHijo.classList.add('text-dark');
    nodoHijo.classList.remove('text-white');
  };
};

const buttonCopy = document.querySelector('.buttonCopy');

buttonCopy.addEventListener('click', copyToClipboard);

function copyToClipboard(){
  console.log('copiado ashee');
  nodoHijo.select();
  document.execComand('copy');
};
