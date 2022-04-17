const modMensaje = (mostrar: boolean) => { 
  return function info (target: Object, propertyKey: string, descriptor: any) { 
          console.log(target);
          console.log(propertyKey);
          console.log(descriptor);
        }

}


class Ordenador { 

  @modMensaje(true)
  encender (mensaje: string) { 
    console.log('Encendiendo...')
    console.log(mensaje);
  }
}

let pc = new Ordenador();
pc.encender('Iniciando sesion en el Pc de Angel');



