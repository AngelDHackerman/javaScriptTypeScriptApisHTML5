let productos = [
  {
    nombre: 'Ordenador Gaming',
    marca: 'Asus',
    precio: 1200
  },
  {
    nombre: 'Tablet',
    marca: 'Samsung',
    precio: 300
  },
  {
    nombre: 'Camara Reflex',
    marca: 'Canon',
    precio: 650
  }
];


const conseguirProductos = () => {

  return new Promise ((resolve, reject) => { 

    console.log('Cargando...')
    setTimeout(() => { 
      resolve(productos); // ? El metodo resolve recoje los datos despues que el setTimeOut termine, y luego pasarselo al metodo .then
    }, 3000)
  });
}

conseguirProductos().then((items) => { // ? El metodo .then espera a que el resolve este listo para poder enviar la respuesta.
  console.log(items);
})















