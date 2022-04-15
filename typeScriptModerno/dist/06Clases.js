"use strict";
class Carro {
    constructor() {
        this.marca = 'Renault';
        this.modelo = 'Clio';
        this.year = 2000;
        this.color = 'rojo';
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
let miCarro = new Carro();
miCarro.encender();
miCarro.acelerar();
miCarro.acelerar();
miCarro.acelerar();
console.log(miCarro);
console.log(typeof miCarro);
