let personas = ['victor', 'paco', 'pepe', 'juan', 'antonio'];

let paises = [{ 
  nombre: 'España',
  continente: 'Europa'
},
{ 
  nombre: 'Francia',
  continente: 'Europa'
},
{ 
  nombre: 'Italia',
  continente: 'Europa'
}];
      
      
      // ? Some, verifica si en el array hay algun valor del que buscamos.

console.group('Some: ');

let existeAlguno = personas.some(nombre => nombre === 'victor');
console.log(existeAlguno);

let existeAlguno2 = personas.some(nombre => nombre === 'Ignacio');
console.log(existeAlguno2)

console.groupEnd();


      // ? Every, comprueba si hay 

console.group('Every: ');

let esIgualEnTodos = paises.every(pais => pais.continente === 'Europa');
console.log(esIgualEnTodos);      // true

console.groupEnd();


      // ? Map, sive para recorrer arrays, es lo MISMO que hacer un forEach.
      // ? La DIFERENCIA es que forEach NO devuelve nada y Map regresa un array.

console.group('Map: ');

personas.map(persona => console.log(persona));

console.groupEnd();


      // ? Reduce, 

console.group('Reduce: ');

console.log(personas.reduce((acumulador, actual) => { 
  let valorActual = ', '+actual;
  return acumulador + valorActual;
}))

console.groupEnd()










// console.group();



// console.groupEnd()