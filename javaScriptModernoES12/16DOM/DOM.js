      // ? Seleccionar elementos con ID 

          // Haciendolo de manera clasica 

let contenedor = document.getElementById('contenedor');

contenedor.innerHTML = "Hola soy un div seleccionado a la antigua";
contenedor.style.background = '#eee';
contenedor.style.border = '1px solid black'


          // Haciendolo de la manera MODERNA

let contenedorModerno = document.querySelectorAll('.contenedor2')

contenedorModerno.forEach((elemento, indice) => { 

  elemento.innerHTML = `Hola soy un div N. ${indice + 1} seleccionado a la MODERNA !!!`;
  elemento.style.background = '#eee';
  elemento.style.border = '1px solid black'
  elemento.style.margin = '20px 0';

  if (indice === 2 - 1) {
    elemento.style.background = 'orange'
  }

})



      // ? Seleccionar elementos con una CLASE