"use strict";
// const proyectar = (constructor: Function) => {    // * asi se crean los decoradores.
//   console.log('Proyectando la pelicula');
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function proyectar(constructor) {
    constructor.prototype.hacerPoryeccion = function (activar) {
        if (activar) {
            console.log('Proyectando la pelicula: ', this.titulo);
        }
        else {
            console.log('Cine cerrado X');
        }
    };
}
let Pelicula = class Pelicula {
    constructor(titulo, genero, proyectando) {
        this.titulo = titulo;
        this.genero = genero;
        this.proyectando = proyectando;
    }
};
Pelicula = __decorate([
    proyectar // * esto es el Decorador
    ,
    __metadata("design:paramtypes", [String, String, Boolean])
], Pelicula);
let batman = new Pelicula('Batman Begins', 'Accion', false);
batman.hacerPoryeccion(true); // ? (<any>batman), esto es hacer un casteo de tipo de dato.
