// * EcmaScript 2021 / ES12 / ES.NEXT

        // ? Var 

console.group('Var:')

var nombre = 'Angel Hernandez Web';

const monstrarNombre = () => {
  var nombre = 'pepito';
  var apellido = 'botica';
  console.log('dentro:', nombre)
  console.log('dentro:', apellido)


}
monstrarNombre();
console.log('fuera:', nombre)

console.groupEnd();


      // ? let 

console.group('Let:')

let pais = 'Guatemala';

const mostrarPais = () => {
  console.log(pais)
}
mostrarPais();

if (pais == 'Guatemala') { 
  let continente = 'America';
  console.log(continente)
}

for (let contador = 1; contador <= 4; contador++) {
  console.log(contador)
}

console.groupEnd();


      // ? Const 

console.group('Const:')

const edad = 18; 
console.log(edad);

const ciudad = 'Guatemala';
const fechaNacimiento = 1995;
console.log(ciudad, fechaNacimiento);

console.groupEnd();