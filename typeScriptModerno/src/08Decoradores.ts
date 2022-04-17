// const proyectar = (constructor: Function) => {    // * asi se crean los decoradores.
//   console.log('Proyectando la pelicula');
// }

function proyectar (constructor:Function) { 

  constructor.prototype.hacerPoryeccion = function(activar: boolean):void { 
    if (activar) { 
      console.log('Proyectando la pelicula: ', this.titulo);
    } else { 
      console.log('Cine cerrado X');
    }
  }
}

@proyectar    // * esto es el Decorador

class Pelicula { 

  constructor (
    public titulo: string,
    public genero: string,
    public proyectando: boolean

  ) {}
}

let batman = new Pelicula ('Batman Begins', 'Accion', false);
(<any>batman).hacerPoryeccion(true);    // ? (<any>batman), esto es hacer un casteo de tipo de dato.