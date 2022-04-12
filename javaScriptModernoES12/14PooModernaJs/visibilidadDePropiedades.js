class Coche { 

  // * Las propiedades publicas se pueden acceder desde fuera de la clase
  // nPuertas = 4;

  // * Las propiedades PRIVADAS solo pueden ser accedidas atravez de un metodo dentro de esta clase.

   // #nPuertas, el # es lo que crea una propiedad privada.
  #nPlazas = 2;
  #nPuertas = 3;

  // _nLlanrtas, el _ la hace por convencion una propiedad protejida.

  _nLlantas = 4;

  constructor ( marca = 'Mercedes', 
                modelo = 'Clase A', 
                color = 'Negro', 
                velocidad = 0, 
                year = 2020) {
    
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

  // * Metodos estaticos. Un metodo estatico se puede llamar SIN NECESIDAD de instanciar la clase o bien crear el objeto
  // * Los metodos estaticos son usados para crear pequeñas utilidades.

  static saludar (nombre) { 
    return `Hola ${nombre}!!! \n`;
  }

}

// * invocando metodos estaticos

console.log(Coche.saludar('Angel'));


// * Crear objetos

let miCoche = new Coche('Audi', 'C4', 'Rojo', 100, 2023); // Asi se crean los objetos.


// * Llamando propiedades privadas y protegidas.

console.log(miCoche.numeroPlazas)
console.log(miCoche.numeroPuertas)

console.log(miCoche._nLlantas);