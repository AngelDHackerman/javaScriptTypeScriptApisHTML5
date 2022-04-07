let nombre = 'Angel hernandez';
let altura = 175;

let concatenacion = `${nombre} mide: ${altura}cm de altura`;

let datos = document.getElementById("datos");

/* datos.innerHTML = `
  <h1>Soy la caja de datos</h1>
  <h2>Mi nombre es: ${nombre}</h2>
  <h3>Mido: ${altura}cm</h3>
`;

if (altura >= 180 ) {
  datos.innerHTML += '<h1>Eres una persona alta</h1>';
}else { 
  datos.innerHTML += '<h1>Eres una persona bajita</h1>';
}

for (let i = 2015; i <= 2022; i ++) { 
  datos.innerHTML += `<h2>Estamos en el año: ${i} </h2>`
} */

const muestraMiNombre = (nombre, altura) => { 
  let datos = document.getElementById('datos');
  datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}cm</h3>
  `;
}

muestraMiNombre('Angel Hernandez', 175);

