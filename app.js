
// Selecciono el form
const form = document.querySelector('.form');

// Boton para convertir el texto
const convertButton = document.querySelector('.buttonConvert');

// Nodos para poner en la página
const nodoPadre = document.querySelector('.newText');
let nodoHijo = document.querySelector('.new-text');

// Mensajes de validación para inputs
const textValidation = document.querySelector('.validationText');
const numberValidation = document.querySelector('.validationNumber');

// Inputs para validar
const formText = document.querySelector('.formText');
const numberInput = document.querySelector('.number');

// Cuando se envie el formulario, quiero que se
// ejecute la función
form.addEventListener('submit', function(event){
  // Función que cancela el evento de recargar la página
  event.preventDefault();

  // Tomo los valores del texto a convertir y la cantidad
  // de caracteres
  const oldText = document.querySelector('.oldText').value;
  const numCharacters = document.querySelector('.number').value;

  // Añado el parrafo en el div
  nodoPadre.appendChild(nodoHijo);

  // Si oldText y numCharacters es igual a nada
  if (oldText == "" && numCharacters == "") {
    // Evento que cancela el comportamiento
    // por defecto del navegador
    event.preventDefault();

    // Le elimino la clase que oculta el mensaje
    // de que rellene los inputs
    textValidation.classList.remove('visually-hidden');
    numberValidation.classList.remove('visually-hidden');

    // Elimino el margin del oldText
    // y se lo doy al texto de validacion
    formText.classList.remove('mt-5');
    textValidation.classList.add('mt-5');

    // Le agrego los bordes a los inputs
    // que falten rellenar
    formText.classList.add('borderValidation');
    numberInput.classList.add('border-danger');

    // Si oldText es igual a vacio
  } else if(oldText == ""){
    // Elimino la clase que oculta
    // el mensaje de validación del texto
    textValidation.classList.remove('visually-hidden');

    // Elimino el margin del oldText
    // y se lo doy al texto de validacion
    formText.classList.remove('mt-5');
    textValidation.classList.add('mt-5');

    // Le añado el borde al input de texto
    formText.classList.add('borderValidation');

    // Elimino la clase que le da el borde rojo y oculto
    // el texto de validación
    numberInput.classList.remove('border-danger');
    numberValidation.classList.add('visually-hidden');
    // Si numCharacters es igual a vacio
  } else if (numCharacters == "") {
    // Elimino la clase que oculta el mensaje
    // de validación del input de numeros
    numberValidation.classList.remove('visually-hidden');

    // Le doy borde rojo al input de numeros
    numberInput.classList.add('border-danger');

    // Elimino el borde del input del texto, oculto
    // el texto y le doy margin al oldText
    formText.classList.remove('borderValidation');
    textValidation.classList.add('visually-hidden');
    formText.classList.add('mt-5');

    // Si ninguna de las anteriores se cumple
  }else {
    // Le agrego una clase que oculta
    // los mensajes de validación
    textValidation.classList.add('visually-hidden');
    numberValidation.classList.add('visually-hidden');

    // Elimino los bordes de los inputs
    formText.classList.remove('borderValidation');
    numberValidation.classList.remove('border-danger');

    // Agrego margin top al oldText
    formText.classList.add('mt-5');
  };

  // Funcion que convierte el oldText a newText
  let newText = oldText.slice(0, numCharacters);
  let nodoTexto = document.createTextNode(newText);
  nodoHijo.appendChild(nodoTexto);


  const buttonReset = document.querySelector('.buttonReset');

  buttonReset.addEventListener('click', resetInputs);

  function resetInputs() {
    form.reset();
    nodoHijo.innerHTML = "";

  };

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
const textCompleted = document.querySelector('.text-completed');
const textNothingToCopy = document.querySelector('.textNothingToCopy');

 // Funcion que hace el modo noche
function nightMode(){
  if (moon) {
    moon.style.display = 'none';
    sun.style.display = 'block';
    body.classList.add('bg-dark');
    oldTextStyles.classList.add('bg-transparent');
    oldTextStyles.classList.add('text-white');
    totallyOfCharacters.classList.add('bg-transparent');
    totallyOfCharacters.classList.add('text-white');
    newTextStyles.classList.add('bg-transparent');
    nodoHijo.classList.add('text-white');
    textCompleted.classList.add('text-white');
    textNothingToCopy.classList.add('text-white');
  };
};

 // Funcion que convierte el modo dia
function lightMode(){
  if (sun) {
    sun.style.display = 'none';
    moon.style.display = 'block';
    body.classList.remove('bg-dark');
    body.classList.add('bg-light');
    oldTextStyles.classList.add('text-dark');
    oldTextStyles.classList.remove('text-white');
    totallyOfCharacters.classList.add('text-dark');
    totallyOfCharacters.classList.remove('text-white');
    convertButton.classList.add('bg-transparent');
    nodoHijo.classList.add('text-dark');
    nodoHijo.classList.remove('text-white');
    textCompleted.classList.add('text-dark');
    textCompleted.classList.remove('text-white');
    textNothingToCopy.classList.add('text-dark');
    textNothingToCopy.classList.remove('text-white');
  };
};

// Botón para copiar el texto
const buttonCopy = document.querySelector('.buttonCopy');

// Evento que le doy al botón para que ejecute
// la función
buttonCopy.addEventListener('click', copyToClipboard);

// Función para copiar el texto
// al portapapel
function copyToClipboard(){
  if (nodoHijo.innerHTML == ""){
    textNothingToCopy.classList.remove('visually-hidden');
    textCompleted.classList.add('visually-hidden');
  }else {
    let seleccion = document.createRange();
    seleccion.selectNodeContents(nodoHijo);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    let res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    textCompleted.classList.remove('visually-hidden');
    textNothingToCopy.classList.add('visually-hidden');

    function eliminarTextoCompletado() {
      textCompleted.classList.add('visually-hidden');
    };

    let timeoutTextoCompletado = window.setTimeout(eliminarTextoCompletado, 10000);
  };
};
