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
const finApp = () => {
    throw new Error('La applicacion se ha cerrado');
};
// finApp();
// ? Parametros funciones
// * parametros NO obligatorios se escribe junto con el ?
console.group('Parametros funciones:');
const mostrarPais = (pais, continente) => {
    return `${pais} ${continente}`;
};
console.log(mostrarPais('Guatemala'));
console.groupEnd();
// ? Tipo funcion, esto no es lo mas comun a usar.
console.group('Tipo funcion:');
let grupos;
// .toString(), convierte el objeto o variable en un string.
grupos = (datos) => {
    return 'Mis grupos favoritos son: ' + datos.toString();
};
console.log(grupos(['GG Allin', 'Ska-p', 'Kiddie Gang']));
console.groupEnd();
console.group();
console.groupEnd();
