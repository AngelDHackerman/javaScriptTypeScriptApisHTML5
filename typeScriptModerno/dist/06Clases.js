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
        // * public: Es accesible desde cualquier parte
        // * protected: Accesible solo desde dentro de la clase y clases hijas.
        // * privadas: Solo desde dentro de esta clase
        // ! aun asi este en public, protected or private, el codigo va a compilar igual manera, esto es mas azucar sintactico.
        // ? con esto de abajo nos ahorramos todo el codigo de arriba:
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
    mostrarCarro() {
        return `${this.marca} ${this.modelo}`;
    }
    mostrarCualidades() {
        return `${this.year} ${this.color}`;
    }
    mostrarTodo() {
        return `${this.mostrarCarro()} ${this.mostrarCualidades()}`;
    }
    // ? Setters y Getters, son como usar funciones pero con sintaxis mas limpia, azucar sintactico
    set darColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    // ? Metodos y propiedades estaticos, no hay necesidad de instanciar el objeto!
    static saludar() {
        return "hola que tal!";
    }
}
let miCarro = new Carro('Renault', 'Clio', 2000, 'rojo');
miCarro.encender();
miCarro.acelerar();
miCarro.darColor = 'Blanco'; // Invocando al setter
console.log(miCarro.getColor); // Invoicando al getter
console.log(miCarro);
console.log(miCarro.mostrarTodo()); // ! aqui si estamos accediendo a las privadas desde un metodo publico
console.log(Carro.saludar()); // ? Invocando al metodo estatico sin instanciar la clase.
