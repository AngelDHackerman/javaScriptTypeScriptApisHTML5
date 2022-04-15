"use strict";
// Tipos de datos basicos 
// String
let texto = 'Hola que tal!';
// Number
let numero = 10;
numero = 11.25;
console.log(numero);
// boolean
let verdadero = true;
// Any, el NO recomendado.
let normal = 'Cualquier cosa';
normal = true;
normal = 17;
console.log(normal);
// Null y undefined, esto se puede obviar cambiando la configuracion en tsconfig.json
let indefinido = undefined;
let nulo = null;
console.log(indefinido, nulo);
// Unknown, similar a any PERO! Este no es asignable a otras valibles
let desconocido = 'Soy un texto desconocido';
desconocido = 1;
desconocido = false;
// verdadero = desconocido; // ? Desconocido NO se puede asignar a verdadero, porque verdadero esta declarado como un boolean.
console.log(desconocido);
