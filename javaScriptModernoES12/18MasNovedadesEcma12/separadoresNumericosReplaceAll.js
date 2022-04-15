      // ? Separadores numericos 

console.group('Separadores numericos: ');

let numero = 4_000_000_000; // * Esto solo ayuda a la legibilidad.
console.log(typeof numero, numero);

console.groupEnd();

      // ? Replace and ReplaceAll
console.group('Replace and ReplaceAll: ');

let frase = 'voy en mi carro contento por la carretera y veo otro carro';
let nuevaFrase = frase.replaceAll('carro', 'moto');

console.log(nuevaFrase);

console.groupEnd();

      // ? Asignadores logicos

console.group('Asignadores logicos: ');

let nombre = 'Angel';
let id = 80;

nombre ||= id; // ? Si nombre existe, entonces la variable tendra el valor de 'nombre', si NO exite entonces entra el valor de 'id'.

console.log(nombre)

console.groupEnd();











// console.group();



// console.groupEnd();