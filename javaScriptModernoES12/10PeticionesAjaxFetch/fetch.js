window.addEventListener("DOMContentLoaded", event => { // ! Este evento nos sirve para ejecutar el codigo solo cuando el DOM este por completo cargado
  
let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = "Cargando...";

// ? para hacer las peticiones AJAX usaremos json placeholder.

      // ? Peticion AJAX moderna

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // ? .json() convierte la peticion en un objeto json.
  .then(items => {  // ? Este segundo .then es para si ya poder recoger los datos que pedimos.
    // console.log(datos[82].title) //  Muestra el titulo del objeto N. 82
    console.log(items);
    contenedor.innerHTML = ''; // * Esto hace que se ELIMINE el cargando...
    mostrar(contenedor ,items)
  })
  .catch(error => {
    console.error('La peticion AJAX a fallado')
  }); // * Esto es en caso la pagina o la API falla.



      // ? DOM 

const mostrar = (contenedor ,elementos) => { 

  elementos.forEach(elemento => {
    let muestrame = `
      <article>
        <h2> ${elemento.title} </h2> 
        <span> ${elemento.id} </span>
        <p> ${elemento.body} </p>
      </article>
      <hr/>
    `;
    contenedor.innerHTML += muestrame;
  });

  return elementos;
}  
}) 
