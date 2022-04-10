      // * Spread operator

console.group('Spread operator:')
let heroes = ['Batman', 'Spiderman', 'Superman', 'Venom', 'Aquaman'];

console.log(...heroes); // ? Con el spread ... hace console.log de todos los elementos dentro del array.


const monstrarHeroes = (heroe1, heroe2) => { 
  console.log( `
    ***Los 2 super heroes de la semana:***
        -${heroe1}
        -${heroe2}
    fin.
  `);
}

monstrarHeroes(...heroes);


let superHeroes = ['Flash', 'Catwoman', ...heroes];

console.log(...superHeroes)
monstrarHeroes(...superHeroes);

console.groupEnd()

      // * REST 

console.group('Rest:')

const peliculas = (pelicula1, pelicula2, ...restoDePeliculas) => { 
  console.log(pelicula1);
  console.log(pelicula2);
  for (pelicula of restoDePeliculas) { 
    console.log(pelicula)
  }
}

peliculas('El señor de los anillos',
          'Fast and furious',
          'Batman vs Superman',
          'Matrix',
          'Depredador',
          'Terminator'
)



console.groupEnd()
