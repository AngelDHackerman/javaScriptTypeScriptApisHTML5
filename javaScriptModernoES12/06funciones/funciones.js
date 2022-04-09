        // ? Funciones con parametros por defecto.

function saludo (persona = 'Angel Hernandez', year = 2022) { // ? = 'Angel Hernandez' es un parametro opcional por si no se los pasan cuando se llama la funcion
  console.log(`Hola, te mando un saludo ${persona} estamos a ${year}`)
}

saludo('Pepillo', 2030);



      // ? Funciones flecha.

let saludo2 = nombre => `Hola te mando un saludo ${nombre}!`;

console.log(saludo2('Jorge'))


const edad = (nombre, edad) => { 
  
  if (edad >= 18) { 
    console.log(`${nombre} SI es mayor de edad`);
  } else { 
    console.log(`${nombre} NO es mayor de edad`)
  }
}

edad('angel', 26)



      // ? Arrow funcion y JSON 

let tienda = { 
  nombre: 'Game',
  videojuegos: ['GTA', 'WWE', 'FIFA'],
  mostrar: function() { 
    console.log(this.nombre);
  },
  mostrar2() { 
    this.videojuegos.forEach(juego => console.log(juego));
    
  },
  mostrar3: () => { 
    console.log(this.nombre); // ! this. eso no es aconsejable, NO se debe usar como metodo.
  }
}

tienda.mostrar();
tienda.mostrar2();
tienda.mostrar3(); // ! Aqui da undefined porque en arrow functions NO existe el objeto this.
