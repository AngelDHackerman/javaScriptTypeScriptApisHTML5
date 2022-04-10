
// ? La desestructuracion en javaScript nos permite extraer datos de objetos, arrays de strings.
// ? y convertirlos a variables cada uno de esos datos, hace que esto sea mas facil que de manera clasica.

let frutas = ['manzana', 'pera', 'naranja', 'sandia'];

      // * clasico

// let manzana = frutas[0];
// let pera = frutas[1];

// console.log(manzana, pera);



      // * Desestructuracion

let [manzana, pera, naranja, sandia] = frutas;

console.log(manzana, pera, naranja);


      // * Desestructurar objetos

let persona = { 
      nombre: 'Angel',
      edad: 26,
      altura: 175,
      peso: 220,
      pais: 'Guatemala'
};

let {nombre, edad, altura, pais} = persona;

console.log(nombre, edad, altura, pais); // ? A diferencia de los arrays aqui se pueden OMITIR ciertos valores.


      // * Desestructurar Strings

let usuario1 = 'Angel Hernandez WEB 9999gggg 20/11/1995 Guatemala';

let [nombre1, apellido1 , arte, codigo, DOB, pais1] = usuario1.split(' '); // ? Con el split le decimos que el string debe estar separado por los espacios.

console.log(nombre1, apellido1, arte, pais1)




