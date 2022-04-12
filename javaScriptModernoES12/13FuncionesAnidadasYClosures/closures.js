      // ? Closures, lo que antes se hacia para simular clases.

// const coche = (function(){}());

// * Las propiedades privadas no se puede utilizar fuera del closure. 

const coche = (function(){
  let  _marca, _velocidad = 0, _puertas; // * _marca, el guion bajo indica que es una propiedad privada

  function setMarca(marca) { 
    _marca = marca;

    return _marca;
  }

  function getMarca () { 
    return _marca;
  }

  function acelerar () {
    _velocidad++; 

    return _velocidad;
  }

  function frenar () { 
    _velocidad--;

    return _velocidad;
  }

  return {    // ? Esto es para que podamos usar estas fuciones fuera de aqui.
    setMarca,
    getMarca, 
    acelerar, 
    frenar
  }
}());

coche.setMarca('Renault');

coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log(`Marca: ${coche.getMarca()}, Velocidad: ${coche.acelerar()}`)




