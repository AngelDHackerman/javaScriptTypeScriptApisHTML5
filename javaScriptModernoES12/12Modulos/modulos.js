// ! Se debe poner: type="module" en el HTML para que esto funcione, igual tiene que estar corriendo en un servidor local

// import imprimirArray from './miModulo.js';       // * Asi se importan funciones individuales
// import utilidades from './miModulo.js'           // * Asi se importan VARIAS funciones.

import {imprimirArray, saludo} from './miModulo.js' // * Asi se importan funciones especificas.



let nombres = ['Angel', 'Victor', 'Paco', 'Pepe'];

// utilidades.imprimirArray(nombres)
// utilidades.saludo('Ximena');

imprimirArray(nombres);
saludo('Ximena')





