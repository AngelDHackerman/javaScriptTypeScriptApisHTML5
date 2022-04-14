      // ? Nullish coalescing operator 

      // ! Es mas facil usar parametros opcionales en las funciones

console.group('Nullish coalescing operator: ');

const multiplicacion = (numero1, numero2) => { 
  // numero1 = (numero1 == null ? 1 : numero1);
  // numero2 = (numero2 == null ? 1 : numero2);

  // * lo de abajo resume lo de arriaba: 

  numero1 = numero1 ?? 1; // ? Si numero1 es == null, entonces tomara el valor de 1, Si numero1 != null, tomara el valor que le pasamos.
  numero2 = numero2 ?? 2;

  return numero1 * numero2;

}

console.log(multiplicacion(null, 12));


const mostrarUsuario = (id, nombre) => { 
  id = id ?? 0;      // ? Si id es null, entonces le dara por defecto 0.
  nombre = nombre ?? 'Usuario desconocido';     // ? si nombre es null, entronces le pasa el string: Usuario desconocido.

  return id + ' ' + nombre;
}

console.log(mostrarUsuario(2, 'Angel'));
console.log(mostrarUsuario());

console.groupEnd();


















// console.group();



// console.groupEnd();