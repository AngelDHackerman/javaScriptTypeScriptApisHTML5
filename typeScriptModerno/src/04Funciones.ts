      // ? Funciones normales

console.group('Funciones uso normal: ');

// (nombre:string) el parametro tiene que ser de valor string
// (nombre:string):string, Lo que tiene que devolver tiene que ser un string, o un number, etc.
const saludo = (nombre:string):string => { 
  
  return `Un saludo para ${nombre}`;
}

console.log(saludo('Angel'));

console.groupEnd();



      // ? Funciones del tipo: Void, no retornan NADA.

console.group('Funciones del tipo void: ');

const mostrarFecha = ():void => { 

  console.log('20-05-2025');
}

mostrarFecha();

console.groupEnd();



      // ? Funciones tipo Never, tipo de dato never significa que es el fin de la aplicacion.

const finApp = ():never => { 

  throw new Error('La applicacion se ha cerrado');
}

// finApp();



      // ? Parametros funciones
        // * parametros NO obligatorios se escribe junto con el ?

console.group('Parametros funciones:');

const mostrarPais = (pais:string, continente?:string) => { 
  
  return `${pais} ${continente}`;
}

console.log(mostrarPais('Guatemala'))

console.groupEnd();














console.group();



console.groupEnd();