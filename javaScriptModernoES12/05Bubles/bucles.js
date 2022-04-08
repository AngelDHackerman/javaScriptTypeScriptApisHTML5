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


      // ? For in, este saca los INDICES del array, tambien podemos 'RECORRER' los Json.

console.group('For in:');

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



      // ? Iterables

console.group('Iterables:');

const miIterable = nombres[Symbol.iterator]();

console.group('Usando el iterable:');

console.log(typeof miIterable, miIterable); // object, Arrya iterator {}

console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next());

console.groupEnd();


console.group('Iterables personalizados:');

// JSON, los json no son objetos iterables.
let fruta = { 
  nombres: 'Manzana',
  color: 'Verde',
  temporada: 'Invierno'
}

// toca convertilo en un objeto iterable: 

/* fruta[Symbol.iterator] = () => { 
  let indice = 0; // * aqui se devuelve el Indice.
  let valores = Object.values(this); // * Object.values: Devuelve un array con los VALORES correspondientes a las propiedades enumerables de un objeto.

  return { 
    next(){
      indice++;

      if (indice >= valores.length) {
        return { 
          document: true,
          value: undefined
        };
      }

      return { 
        done: false,
        value: valores[indice++],
      }
    }
  };
}

for (let propidad of fruta) {
  console.log(propidad);
}

console.groupEnd(); */

// TODO MAL CON ESE CODIGO DE ARRIBA.

console.groupEnd();
