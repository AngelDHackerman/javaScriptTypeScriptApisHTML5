export const imprimirArray = (datos) => {     // * export const imprimirArray, asi se exportan funciones especificas
  datos.forEach(element => {
    console.log(element)
  });

  return datos;
}

export const saludo = (nombre) => { 
  console.log(`Hola! Como estas ${nombre}?`);

  return nombre;
}

      // ? Asi se exportan las funciones de este modulo:

// export default imprimirArray; // * asi se exporta solo 1 funcion.

// export default {    // *Asi se exportan varias funciones (dentro de un objeto).
//   imprimirArray,
//   saludo
// }




