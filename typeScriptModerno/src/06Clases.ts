class Carro { 

  marca: string = 'Renault';
  modelo: string = 'Clio';
  year: number = 2000;
  color: string = 'rojo';
  encendido: boolean = false;
  velocidad: number = 0;

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

let miCarro:Carro = new Carro();

miCarro.encender();

miCarro.acelerar();
miCarro.acelerar();
miCarro.acelerar();

console.log(miCarro);
console.log(typeof miCarro);