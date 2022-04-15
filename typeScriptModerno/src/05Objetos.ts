      // ? Creando objetos en TS

let empresa = { 
  nombre: 'MICROSOFT INC',
  sector: 'Informatica',
  servicios: ['sistemas operativos', 'ofimatica', 'consolas'],
  facturacion: 55_000_000_000_000
}

// empresa = {        
//   nombre: 1234,      // todo: Esto no se puede hacer porque 1, no se respetal el tipo de valor y 2 no se respeta el 'key' del segundo valor
//   categoria: 'hola'
// }



      // ? Declarando tipos de datos en Objectos:

// type empresas es el alias para los tipos de valores.
type empresas = {
  nombre: string,
  sector: string,
  servicios: string[], // (array de strings)
  facturacion: number,

  mostrar: () => string  // Asi se declara las variables que retornaran un valor de tipo string.
}

let empresa2: empresas = { // Aqui se introducen los valores
  nombre: 'MICROSOFT INC',
  sector: 'Informatica',
  servicios: ['sistemas operativos', 'ofimatica', 'consolas'],
  facturacion: 55_000_000_000_000,

  mostrar() { 
    return `${this.nombre} ${this.sector}`;
  }
}

console.log(empresa2.mostrar());