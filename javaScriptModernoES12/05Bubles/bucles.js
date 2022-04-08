let nombres = [
  'Victor',
  'Paco',
  'Pepe',
  'Juan',
  'Angel'
];

console.group('Bucles');

      // Bucle clasico: 

console.group('Bucle clasico:')

for (let i = 0; i < nombres.length; i++ ) { 
  console.log(nombres[i]);
}

console.groupEnd()


      // ? For of, este saca los VALORES del array. 

console.group('For of:')

for (let nombre of nombres) { 
  console.log(nombre);
}

console.groupEnd();


      // ? For if, este saca los INDICES del array, tambien podemos 'RECORRER' los Json.

console.group('For if:');

for (let indice in nombres) { 
  console.log(indice, nombres[indice]); // * nombres[indice] Asi se saca el valor del array.
}

console.groupEnd();


      // ? For each, usa un call back en los parametros dara: (elementoActual, indice, arregloCompleto) => {}

console.group('For each:');

nombres.forEach(function(elementoActual, indice, arreglo) { 
  console.log(elementoActual, indice, arreglo)
})

console.groupEnd();
console.groupEnd();