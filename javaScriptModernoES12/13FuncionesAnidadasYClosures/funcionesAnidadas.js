let nombre = 'Angel';

const mostrarNombre = () => { 

  let apellidos = 'Hernandez';

  const mostrarApellidos = () => { 
    
    let profesion = 'Desarrollador web';

    const mostrarProfesion = () => { 
      return `${nombre} ${apellidos} es un: ${profesion}`;
    }

    return mostrarProfesion;
  }

  return mostrarApellidos;
}

console.log(mostrarNombre()()()); // ? mostrarNombre()()(), asi es como llegamos a las funciones anidadas.





 