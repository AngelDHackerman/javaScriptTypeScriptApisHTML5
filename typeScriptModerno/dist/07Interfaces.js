"use strict";
// ? Interfaces, es un tipo de restricciones para crear un objeto o una clase.
// ? Interfaces aplicadas a Clases: 
class Fifa {
    constructor(titulo, // * importante siempre poner la visibilidad
    categoria, edad, duracion, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    }
    actualizar(consola) {
        console.log('Buscando actualizaciones...');
        return 'Actualizado';
    }
}
let fifa23 = new Fifa('fifa 23', 'Futbol', 16, 26, true);
console.log(fifa23.mostrar());
// ? interfaces aplicadas a Objetos literales:
let gta = {
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
};
