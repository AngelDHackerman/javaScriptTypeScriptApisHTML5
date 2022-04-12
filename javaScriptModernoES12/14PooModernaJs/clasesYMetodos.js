// * una clase es un MOLDE para crear un objeto. 

class Coche { 

  // Metodo que se ejecuta primero, el constructor

  constructor ( marca = 'Mercedes', 
                modelo = 'Clase A', 
                color = 'Negro', 
                velocidad = 0, 
                year = 2020) {
    
    // Propiedades o atributos

    this.marca = marca; // ? this.marca = 'Mercedes', inicializa por defecto esta propiedad con el valor "Mercedes"
    this.modelo = modelo;
    this.color = color;
    this.velocidad = velocidad;
    this.year = year;

  }

  // Metodos / acciones o las funcionalidades del objeto

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

console.log(miCoche.devolverMarca);
miCoche.guardarMarca = "Toyota"; // Usando el metodo set ya no tenemos que usar parentesis.


miCoche.subirVelocidad();
miCoche.subirVelocidad();
miCoche.subirVelocidad();
console.log(miCoche.marca, miCoche.modelo, miCoche.velocidad + 'km/h');


miCoche.bajarVelocidad();
console.log(miCoche.marca, miCoche.modelo, miCoche.velocidad + 'km/h');




