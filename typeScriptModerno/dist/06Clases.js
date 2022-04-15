"use strict";
class Carro {
    constructor(marca, modelo, year, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
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
        this.encendido = false;
        this.velocidad = 0;
        this.encendido = false;
        this.velocidad = 0;
    }
    encender() {
        this.encendido = true;
    }
    apagar() {
        this.encendido = false;
    }
    acelerar() {
        this.velocidad += 5;
    }
}
let miCarro = new Carro('Renault', 'Clio', 2000, 'rojo');
miCarro.encender();
miCarro.acelerar();
miCarro.acelerar();
console.log(miCarro);
console.log(typeof miCarro);
