let personas = ['victor', 'paco', 'pepe', 'juan', 'antonio'];


      // ? Buscar en un array - .find devuelve el valor de lo que buscamos

let busquedaFind = personas.find(persona => persona === 'paco');
console.log(busquedaFind);

busquedaFind = personas.find(persona => persona === 'francisco');
console.log(busquedaFind);      // undefined, porque no existe en el array


      // ? Buscar en un array - .findIndex devuelve el indice de lo que buscamos

let busquedaFindIndex = personas.findIndex(persona => persona === 'juan');
console.log(busquedaFindIndex) // 3, porque ese es el indice de juan.

busquedaFindIndex = personas.findIndex(persona => persona === 'Angel');
console.log(busquedaFindIndex) // -1, porque Angel no existe en el array.


      // ? Crear un array basandome en un objeto iterable

let arrayDeLetras = Array.from('angeldariaux.com');
console.log(arrayDeLetras)

let arrayDeNumerosCuadrado = Array.from([1,2,3,4,5,6], numeros => Math.pow(numeros, 2)); // * Math.pow(numeros, 2), hace que los numeros se eleven al cuadrado
console.log(arrayDeNumerosCuadrado)


      // ? Comprobar si existe un elemento dentro de un array .includes






