      // String 

let nombre = 'Angel Hernandez';

      // Number

let numero = 14; 
let decimal = 3.2;

      //  Boolean 

let mayorEdad = true;
let menorEdad = Boolean(0); // * 1 es true, 0 es false

console.group('String, number, boolean:')

  console.log(
    typeof nombre,
    typeof numero,
    typeof decimal,
    typeof mayorEdad,
    typeof menorEdad
  )

console.groupEnd()


      // Array
      
let paises = ['España', 'Mexico', 'Colombia', 'Argentina'];

      // Null

let vacio = null;

      // Undefined

let noDefinido = undefined;


console.group('Array, Null, Undefined:');

  console.log(
    typeof(paises),
    typeof(vacio),
    typeof(noDefinido)
    );
  
console.groupEnd();

  
    // JSON - Javascript object Notation - Objetos literales

let pelicula = {
  titulo: 'Space jam',
  genero: 'Animacion',
  year: '1996',
  director: 'Tarantino', 
  mostrar: function () { // ? Esto de aqui es un Metodo.
    return `
      *** La pelicula de la semana *** \n 
      Titulo: ${this.titulo} \n 
      Genero: ${this.genero} \n
      Año: ${this.year} \n 
      Director: ${this.year} 
    `;
  }
}
pelicula.pais =  'Estados unidos'; // ! asi se agregan propiedades a los objetos Json.

delete pelicula.director; // ! Asi se borran las propiedades en los Json.
delete pelicula.year; 

for (let propiedades in pelicula) { 
  console.log(pelicula[propiedades])
}


console.group('json:')

  console.log(pelicula.titulo, pelicula.director, pelicula.genero, pelicula.year)
  console.log(pelicula.mostrar());
  console.log(`pelicula: ${typeof pelicula}, mostrar: ${typeof pelicula.mostrar} \n`)
  

  console.group('Pelicula:')

    console.log(pelicula)
    console.log(`titulo in pelicula: ${'titulo' in pelicula}`)

  console.groupEnd()

console.groupEnd();


        // ! Symbol, son datos o identificadores unicos, son datos primitivos.

let animal = Symbol('tigre');
let animal2 = Symbol('tigre');

let user  = { 
  id: 1, 
  nombre: 'Angel',
  web: 'angeldariaux.com'
};

let hastaLaVerga = Symbol('id'); // ? Creamos otro 'id' sin que entre en conflicto con el primero.
user[hastaLaVerga] = 7; // ? Asi agregamos el id creado con el Symbol, Symbol tambien esconde el nombre real de la variable

console.group('Symbol:')

  console.log(`animal == animal2: ${animal == animal2}`);
  console.log(user);
  console.log(user.id, user[hastaLaVerga]);

console.groupEnd();








