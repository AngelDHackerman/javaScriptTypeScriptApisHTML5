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

  // * con esto de abajo nos ahorramos todo el codigo de arriba:

  encendido: boolean = false;
  velocidad: number = 0;

  constructor (
    public marca: string, 
    public modelo: string, 
    public year: number, 
    public color: string,
    ) {
      this.encendido = false;
      this.velocidad = 0;
    }

  encender ():void {     // :void porque no va a regresar nada, y asi se crean los metodos en TS
    this.encendido = true;
  }

  apagar ():void { 
    this.encendido = false;
  }

  acelerar ():void { 
    this.velocidad += 5;
  }

}

let miCarro:Carro = new Carro('Renault', 'Clio', 2000, 'rojo');

miCarro.encender();
miCarro.acelerar();
miCarro.acelerar();


console.log(miCarro);
console.log(typeof miCarro);