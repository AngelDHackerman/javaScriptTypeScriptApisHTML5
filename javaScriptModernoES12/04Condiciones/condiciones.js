let persona = ['Angel Hernandez', 26]

      // ? Condicion clasica

console.group('Condicionales y ternarios:')

if (persona[1] >= 18) { 
  console.log('Es mayor de edad');
} else { 
  console.log('Es menor de edad');
};

      // ? Operador ternario: condicion ? ifTrue : ifFalse

let edad = (persona[1] >= 18) ? 'Es mayor de edad' : 'Es menor de edad';
console.log(edad);

let exites = persona ? 'Existe' : 'No existe';
console.log(exites)

console.groupEnd();



// ? Diferencia entre == y === y != y !==

console.group('Diferencia entre == y === y != y !== :')






console.groupEnd();