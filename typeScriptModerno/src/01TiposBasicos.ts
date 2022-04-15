// Tipos de datos basicos 

      // String

let texto:string = 'Hola que tal!';


      // Number

let numero:number = 10;
numero = 11.25

console.log(numero)


      // boolean

let verdadero:boolean = true;

 
      // Any, el NO recomendado.

let normal:any = 'Cualquier cosa';
normal = true;
normal = 17;

console.log(normal);


      // Null y undefined, esto se puede obviar cambiando la configuracion en tsconfig.json

let indefinido:undefined = undefined;
let nulo:null = null;

console.log(indefinido, nulo);


      // Unknown, similar a any PERO! Este no es asignable a otras valibles

let desconocido:unknown = 'Soy un texto desconocido';

desconocido = 1; 
desconocido = false;

// verdadero = desconocido; // ? Desconocido NO se puede asignar a verdadero, porque verdadero esta declarado como un boolean.

console.log(desconocido);

