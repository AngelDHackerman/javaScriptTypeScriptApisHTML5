    // ? Los maps NO PUEDEN estar repedios a nivel de "key" o de valor 
    // ? A DIFERENCIA de los sets es que podemos acceder de manera invidual de los elementos dentro de los maps

    // const nombre = new Map();  Crea un nuevo map
    // const nombre = new Map(Object.entries(objetoJSon)); Agregamos los valores de un JSon al Map
    
    // nombre.set(key, valor)     Agrega un valor al map


const antiguos_gadgets = { 
  seis: 'radiocaset',
  siete: 'telefono sobremesa',
  ocho: 'compact disc'
}



const gadgets = new Map(Object.entries(antiguos_gadgets));

gadgets.set(1, "pc")
        .set(2, "TV")
        .set(2, "TBAA")
        .set(3, "Tablet")
        .set('cuatro', 'Movil')
        .set('cinco', 'Laptop')

console.log(gadgets);
// console.log(typeof gadgets); // ? Es de valor Object

    // * Asi se accede a los elementos individuales: 

console.log(gadgets.get(3));
console.log(gadgets.get('siete'));


    // * Comprobando si el Map tiene un objeto, .has solo evalua las CLAVES.

console.log(gadgets.has('cinco'));




