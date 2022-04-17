      // ? Comprobar si el navegador es compatible 

if (typeof(Storage) !== 'undefined') { 
  console.log('LocalStorage disponible');
} else { 
  console.log('LocalStorage NO DISPONIBLE')
}

if (typeof(Storage) == 'undefined') {     // * Si no esta disponible el LocalStorage lo mandamos a otra pagina.
  window.location.href = 'https.google.com';
}

      // ? Guardar datos en el navegador, en el navegador > devTools > application > Local Storage

localStorage.setItem('nombre1', 'Angel Hernandez');
localStorage.setItem('nombre2', 'Paco Rodriguez');



      // ? Recuperar datos del LocalStorage 

let datos = document.querySelector('#datos');

datos.innerHTML = `<p id='nombre1'> Nombre 1: ${localStorage.getItem('nombre1')} <button>Borrar</button> </p> <br>`;
datos.innerHTML += `<p id='nombre2'> Nombre 2: ${localStorage.getItem('nombre2')} <button>Borrar</button> </p>`



      // ? Remove item

document.querySelector('#nombre1 button').addEventListener('click', () => { 

  localStorage.removeItem('nombre1');   // ! Aqui eliminamos el localStorage.
  document.querySelector('#nombre1').remove();    // ! Aqui eliminamos el Parrafo del DOM, importante usar el metodo remove();
});

document.querySelector('#nombre2 button').addEventListener('click', () => { 

  localStorage.removeItem('nombre2');
  document.querySelector('#nombre2').remove();
});

document.querySelector('#deleteAll').addEventListener('click', (event) => { 

  event.target.remove();    // ! Aqui eliminamos el propio boton, por eso es el target del evento.
  localStorage.clear();   // ! Aqui se limpia todo el localStorage.
  document.querySelector('#nombre1').remove();
  document.querySelector('#nombre2').remove();
})

