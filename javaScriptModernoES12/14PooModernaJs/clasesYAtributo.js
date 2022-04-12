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
  
}

      // * Crear objetos

let miCoche = new Coche();
console.log(miCoche.marca, miCoche.modelo);


let segundoCoche = new Coche('Renault', 'Clio');
console.log('Segundo coche: ' ,segundoCoche);
console.log(segundoCoche.marca, segundoCoche.modelo)
