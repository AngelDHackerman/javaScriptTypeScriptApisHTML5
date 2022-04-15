"use strict";
// ? Funciones normales
console.group('Funciones uso normal: ');
// (nombre:string) el parametro tiene que ser de valor string
// (nombre:string):string, Lo que tiene que devolver tiene que ser un string, o un number, etc.
const saludo = (nombre) => {
    return `Un saludo para ${nombre}`;
};
console.log(saludo('Angel'));
console.groupEnd();
// ? Funciones del tipo: Void, no retornan NADA.
console.group('Funciones del tipo void: ');
const mostrarFecha = () => {
    console.log('20-05-2025');
};
mostrarFecha();
console.groupEnd();
// ? Funciones tipo Never, tipo de dato never significa que es el fin de la aplicacion.
console.group('Funciones tipo never: ');
const finApp = () => {
    throw new Error('La applicacion se ha cerrado');
};
// finApp();
console.groupEnd();
console.group();
console.groupEnd();
