class Carro { 

/*   marca: string;
  modelo: string;
  year: number;
  color: string;
  encendido: boolean;
  velocidad: number;

  constructor (marca: string, modelo: string, year: number, color: string) { 
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.color = color;
    this.encendido = false;
    this.velocidad = 0;
  } */

  // * public: Es accesible desde cualquier parte

  // * protected: Accesible solo desde dentro de la clase y clases hijas.

  // * privadas: Solo desde dentro de esta clase

  // ! aun asi este en public, protected or private, el codigo va a compilar igual manera, esto es mas azucar sintactico.

  // ? con esto de abajo nos ahorramos todo el codigo de arriba:

  constructor (
    public marca: string, 
    public modelo: string, 
    public year: number, 
    public color: string,
    protected encendido: boolean = false,
    protected velocidad: number = 0
    ) {}

  public encender ():void {     // :void porque no va a regresar nada, y asi se crean los metodos en TS
    this.encendido = true;
  }

  public apagar ():void { 
    this.encendido = false;
  }

  public acelerar ():void { 
    this.velocidad += 5;
  }

  private mostrarCarro():string { // ! NO es accesible desde fuera 

    return `${this.marca} ${this.modelo}`;
  }

  private mostrarCualidades():string { 

    return `${this.year} ${this.color}`;
  }

  public mostrarTodo():string { // ! pero con eso podemos acceder a las privadas desde fuera.
    
    return `${this.mostrarCarro()} ${this.mostrarCualidades()}`
  }

      // ? Setters y Getters, son como usar funciones pero con sintaxis mas limpia, azucar sintactico

  public set darColor(color:string) { 
    this.color = color
  }

  public get getColor ():string { 

    return this.color;
  }

      // ? Metodos y propiedades estaticos, no hay necesidad de instanciar el objeto!

  static saludar ():string { 

    return "hola que tal!";
  }

}

      // ? Herencia: 

class Camioneta extends Carro { 
  constructor (
    public marca: string, 
    public modelo: string, 
    public year: number, 
    public color: string,
    ) { 
      super(marca, modelo, year, color);   // ! super nos permite acceder a las propiedades de la clase padre, sino no podriamos usar estas propiedades
    }

    public arrancar ():void { 
      this.velocidad = 200;
      this.encendido = true;
    }

    public mostrar () { 
      this.encender();

      return this.encendido;
    }
}

let miCamioneta = new Camioneta('Jeep', 'wrangler', 2014, 'verde militar');





console.group('Visibilidad, metodos estaticos, getters y setters:')

let miCarro:Carro = new Carro('Renault', 'Clio', 2000, 'rojo');

miCarro.encender();
miCarro.acelerar();
miCarro.darColor = 'Blanco';    // Invocando al setter
console.log(miCarro.getColor);    // Invoicando al getter

console.log(miCarro);
console.log(miCarro.mostrarTodo()); // ! aqui si estamos accediendo a las privadas desde un metodo publico

console.log(Carro.saludar());   // ? Invocando al metodo estatico sin instanciar la clase.

console.groupEnd();




console.group('Herencia: ')

console.log(miCamioneta.mostrar());
miCamioneta.arrancar();
console.log(miCamioneta);

console.groupEnd();