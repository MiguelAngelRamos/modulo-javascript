// Una peli
const edadMinima = 18;
let edadUsuario = 17;
edadUsuario = 18;

if(edadUsuario >= edadMinima) {
  // SI
  console.log(edadUsuario >= edadMinima);
  console.log('Acceso concedido a ver la  pelicula');
} else {
  // NO
  console.log(edadUsuario >= edadMinima);
  console.log('Acceso restringido: debes ser mayor de edad');
}

