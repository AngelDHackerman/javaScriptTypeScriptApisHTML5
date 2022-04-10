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
      // resolve(productos); 
      reject(Error('A ocurrido un error!!'));
    }, 3000)
  });
}

conseguirProductos()
  .then((items) => {console.log(items)})
  .catch(error => console.error(error.message) )  // ? Catch sirve para atrapar a los errores que nos arrojen las promesas
  .finally(() => console.log('PROMESA FINALIZADA!!!')); // ? finally se ejecuta cuando la promesa sea por completo finalizada.















