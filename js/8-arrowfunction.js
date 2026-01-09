function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

// arrow functiones de flecha 
const sumarArrow = (numero1, numero2) => {
  let resultado = numero1 + numero2;
  return resultado;
}

// function restar(numero1, numero2) {
//   let resultado = numero1 - numero2;
//   return resultado;
// }

function restar(numero1, numero2) {
  return numero1 - numero2;
}

// const restarArrow = (numero1, numero2) => {
//   let resultado = numero1 - numero2;
//   return resultado;
// }

const restarArrow = (numero1, numero2) => {
  return numero1 - numero2;
}

// const restarArrow = (numero1, numero2) => numero1 - numero2;

// const saludar = (nombre) => {
//   return `Welcome: ${nombre}`; 
// }

// const saludar = (nombre) => `Welcome: ${nombre}`; 
const saludar = nombre => `Welcome: ${nombre}`; 


//* Funciones Anonimas

( ()=>{
  console.log('Soy una funcion anonima - autoinvocada');
} ) ();

(()=>{
  console.log('Soy la funcion autoinvocada 2');
})()
