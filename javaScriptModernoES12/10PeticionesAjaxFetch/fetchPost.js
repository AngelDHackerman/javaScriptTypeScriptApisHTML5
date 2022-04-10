// ? Haciendo peticiones por post, aqui vamos a mandar nuestro post a la API

window.addEventListener("DOMContentLoaded", event => { 

let nuevo_post = JSON.stringify({ 
  title: 'El nuevo post de Angel',
  body: 'Contenido del post',
  userId: 28
});

fetch('https://jsonplaceholder.typicode.com/posts', { 
  method: 'POST',
  body: nuevo_post,
  headers: { 
    'Content-type': "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(datos => console.log(datos)); // * Aqui recibimos la respuesta si nuestro post fue guardado.



})