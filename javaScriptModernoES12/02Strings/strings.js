      // ? Strings clasicos 

let nombre = 'Angel';
let apellidos = 'Hernandez';
let profesion = 'Desarrollador web';
let NyA = nombre + ' ' + apellidos + '\n' + profesion;


      // ? Template strings

let plantilla = `${nombre} ${apellidos} ${profesion} `;


console.log(NyA)
console.log(plantilla)

const ficha = (nombre, apellido, profesion) => { 
  let fichaTecnica = ` 
    <div class="ficha">
    <h2>${nombre} ${apellido}</h2>
    <h3>${profesion}</h3>
    <p>Forma parte del equipo de victorroblesweb.es</p>
    </div>
  `;
  return fichaTecnica
}

let cajaFicha = document.createElement("section");


cajaFicha.innerHTML = ficha('Angel', 'Hernandez', 'Programador') + 
                      ficha('Carlos', 'Rodriguez', 'Arquitecto');

document.body.appendChild(cajaFicha)