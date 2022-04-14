let persona = { 
  nombre: 'Angel',
  apellidos: 'Hernandez',
  domicilio: { 
    pais: 'Guatemala',
    ciudad: { 
      nombre: 'Ciudad de Guatemala',
      municipio: 'Capital'
    }
  }
}

// ? persona?.domicilio?.ciudad?.municipio, esto es el ENCADENAMIENTO OPCIONAL, si todo da true, pues nos devolvera el valor en la variable.

let comprobarMunicipio = persona?.domicilio?.ciudad?.municipio == undefined ? false : true;

console.log(comprobarMunicipio);










// console.group();



// console.groupEnd();