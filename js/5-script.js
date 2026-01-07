const caja = document.getElementById('caja');
const btn = document.getElementById('btn-switch');

// apagado: gray
// encendido: yellow
btn.addEventListener('click', () => {
  if(caja.style.background === 'gray') {
    caja.style.background = 'yellow';
    console.log('Luz encendida');
  } else {
    caja.style.background = 'gray';
    console.log('Luz apagada');
  }
});