// * Set es una nueva estructura donde se puede almacenar varoles unicos de cualquier tipo
// * Guarda el orden en el que agregamos esos valores y ademas NO puede haber valores duplicados.

      // ? Crear el set

let gadgets = new Set (['movil', 'tablet', 'portatil']);

console.log(gadgets);

      // ? Agregar elementos al Set

gadgets.add(12);
gadgets.add(['hola1', 'hola2']);
gadgets.add('maquina de afeitar');
gadgets.add('Pc sobremesa');
gadgets.add('tv');
gadgets.add('tv'); // esto NO va a funcionar porque seria un elemento repetido.
gadgets.add('tv');
gadgets.add('chromecast');


      // ? Sacar el tamaño del Set  .size

console.group('Size del Set: ')
console.log(gadgets.size); // * aqui no funciona el .lenght, en cambio se usa .size
console.groupEnd();

      // ? Recorrer el Set

console.group('Recorriendo el Set: ')

// for (let item of gadgets) { 
//   console.log(item);
// }

gadgets.forEach(item => console.log(item))

console.groupEnd();

      // ? Eliminar elementos .delete

console.group('Eliminando elementos: ');

gadgets.delete('tv');
gadgets.delete(12)

console.log(`Tamaño actual : ${gadgets.size}`)
gadgets.forEach(item => console.log(item));

console.groupEnd();


      // ? Comprobar existencia .has

console.group('Comprobar existencia: ');

console.log(`Existe tv? : ${gadgets.has('tv')}`)
console.log(`Existe chromecast? : ${gadgets.has('chromecast')}`)


console.groupEnd();


      // ? Eliminar todo el Set .clear 

console.group();

gadgets.clear();
console.log(gadgets)

console.groupEnd();

