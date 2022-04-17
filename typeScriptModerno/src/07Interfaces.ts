      // ? Interfaces, es un tipo de restricciones para crear un objeto o una clase.

interface Videojuego { 
  titulo: string;
  categoria: string;
  edad: number;
  duracion?: number;    // * duracion?: el '?' significa que es una propiedad opcional
  lanzado?: boolean;
  mostrar(): void;
  actualizar(consola: string): string;
}

      // ? Interfaces aplicadas a Clases: 

class Fifa implements Videojuego { 

  constructor (
    public titulo: string,    // * importante siempre poner la visibilidad
    public categoria: string,
    public edad: number,
    public duracion?: number,
    public lanzado?: boolean,
  ) { }

  mostrar():void { 
    console.log(this.titulo, this.categoria, this.edad);
  }
  actualizar(consola: string) { 
    console.log('Buscando actualizaciones...');

    return 'Actualizado';
  }

}

let fifa23:Videojuego = new Fifa ('fifa 23', 'Futbol', 16, 26, true);

console.log(fifa23.mostrar());


      // ? interfaces aplicadas a Objetos literales:

let gta: Videojuego = { 
  titulo: 'GTA 5',
  categoria: 'Accion',
  edad: 18,
  mostrar() { 
    console.log(this.titulo, this.categoria, this.edad);
  },
  actualizar(consola) { 
    console.log('Buscando actualizaciones...');

    return 'Actualizado';
  }
}