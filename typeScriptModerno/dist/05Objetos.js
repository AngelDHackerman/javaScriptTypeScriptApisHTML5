"use strict";
// ? Creando objetos en TS
let empresa = {
    nombre: 'MICROSOFT INC',
    sector: 'Informatica',
    servicios: ['sistemas operativos', 'ofimatica', 'consolas'],
    facturacion: 55000000000000
};
let empresa2 = {
    nombre: 'MICROSOFT INC',
    sector: 'Informatica',
    servicios: ['sistemas operativos', 'ofimatica', 'consolas'],
    facturacion: 55000000000000,
    mostrar() {
        return `${this.nombre} ${this.sector}`;
    }
};
console.log(empresa2.mostrar());
