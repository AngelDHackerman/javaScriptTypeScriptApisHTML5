"use strict";
// ? Arrays 
// * Array de solo strings
console.group('Array de solo strings: ');
let personas = ['Vicotr', 'Paco', 'Ange'];
personas.push('Oscar');
console.log(personas);
console.groupEnd();
// * Array de solo numeros
console.group('Array de solo numeros: ');
let years = [2000, 1998, 1996, 2022];
years.push(2025);
console.log(years);
console.groupEnd();
// ? Tuplas, son arryas con tipos ya definidos y una longitud ya definida
//  No puede haber ni mas ni menos elementos de los ya definidos.
console.group('Tuplas: ');
let pelicula = ['Bartamen begins', true, 1990];
console.log(typeof pelicula);
console.groupEnd();
// ? enum - enumeracion, dentro del enum NO se puede declara el tipo de dato.
console.group('Enum - enumeracion: ');
var datosPersonales;
(function (datosPersonales) {
    datosPersonales["nombre"] = "Angel";
    datosPersonales[datosPersonales["dpi"] = 22299338380128] = "dpi";
    datosPersonales["direccion"] = "Calle de las fatasias";
    datosPersonales["ciudad"] = "Xelaju";
})(datosPersonales || (datosPersonales = {}));
// datosPersonales.nombre = 'Carlos';        // * Esto no funciona, NO se pueden cambiar los valores
console.log(datosPersonales.nombre, datosPersonales.dpi, datosPersonales.direccion, datosPersonales.ciudad);
console.groupEnd();
// ? Cast o convertir a otro tipo
console.group('Cast o convertir a otro tipo: ');
// * <number>valorDesconocido; eso es el cast, fuerza el cambio de tipo texto a number
let valorDesconocido = '5242';
let fraseFinal = valorDesconocido;
console.log(fraseFinal);
console.groupEnd();
console.group();
console.groupEnd();
