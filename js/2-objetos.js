const curso = {
  titulo: 'JavaScript moderno',
  duracion: '20 horas',
  instructor: 'Catalina',
  metadatos: {
    nivel: 'principiante',
    idioma: 'Español'
  }
};

console.log(curso.titulo);
console.log(`Estamos en el curso: ${curso.titulo}`);
console.log(`Lo dicta la instructora: ${curso.instructor}`);
console.log(`Tiene una duración de: ${curso.duracion}`);
console.log(`El curso se dictara en el idioma: ${curso.metadatos.idioma}`);
// clave: valor
// nombre: 'sofia'