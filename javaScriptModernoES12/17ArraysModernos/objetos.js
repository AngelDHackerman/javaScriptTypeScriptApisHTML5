let titulo = 'El señor de los anillos';
let genero = 'Accion';
let duracion = '2 horas';

const pelicula = { 
  titulo,     // => titulo: titulo
  genero,     // => genero: genero
  duracion,     // => duracion: duracion
  [genero + 2022]: 'Hoolaaa',     // ? Esto es una propiedad compuesta
  mostrar() { 
    return `${this.titulo} ${this.genero}`;   // ? Asi se crean los metodos de forma moderna
  }
};

console.log(pelicula); 
console.log(pelicula.mostrar());

console.log(Object.values(pelicula));     // ? Esto extrae solo los valores y los mete en un array.





