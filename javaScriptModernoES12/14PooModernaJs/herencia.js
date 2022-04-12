class Coche { 

  #nPlazas = 2;
  #nPuertas = 3;

  _nLlantas = 4;

  constructor ( marca, 
                modelo, 
                color, 
                velocidad, 
                year) {
    
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidad = velocidad;
    this.year = year;

  }

  subirVelocidad () {
    this.velocidad += 1;
  }

  bajarVelocidad () { 
    this.velocidad -= 1;
  }

  // ? Metodos SET y GET (setters y getters) setters: asignan propiedades a mi objeto y getters recojen las pripiedades del objeto.
  
  set guardarMarca (marca) { 
    this.marca = marca;
  }

  get devolverMarca () { 
    return this.marca;
  }

  // ! Accediendo a propiedades privadas y protegidas: 

  get numeroPuertas () { 
    return this.#nPuertas;
  }

  get numeroPlazas () { 
    return this.#nPlazas;
  }

  get numeroLlantas () {
    return this._nLlantas;
  }

  static saludar (nombre) { 
    return `Hola ${nombre}!!! \n`;
  }

}

let miCoche = new Coche('Audi', 'C4', 'Rojo', 100, 2023); // Asi se crean los objetos.

console.log(miCoche.numeroPlazas)
console.log(miCoche.numeroPuertas)

console.log(miCoche._nLlantas);


      // * Herencia

class cuatriMoto extends Coche {
  constructor (
    marca, 
    modelo, 
    color, 
    velocidad, 
    year,
    cilindrada) {  // ! El metodo SUPER me permite tener DISPONIBLES las propiedades de la clase padre
    super(  marca, 
            modelo, 
            color, 
            velocidad, 
            year)
    this.cilindros = cilindrada;
  }

  saltar () { 
    return "Has saltado la rampa";
  }
}

let miCuatriMoto = new cuatriMoto('Suzuki', 'loQueSea', 'amarillo', 200, 300, 2022);
miCuatriMoto.subirVelocidad();
miCuatriMoto.subirVelocidad();
miCuatriMoto.subirVelocidad();


console.log(miCuatriMoto); // Aqui si heredo la clase protegida pero NO las privadas.
console.log(miCuatriMoto.saltar());







