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

    console.log('Cargando productos...')
    setTimeout(() => { 
      resolve(productos); // * Recordar el que el resolve le pasara la info al .then
      // reject(Error('A ocurrido un error!!'));
    }, 3000)
  });
}

const productoComprado = () => { 
  return new Promise ((resolve, reject) => { 

    console.log('Haciendo la compra...');
    setTimeout(() => {
      resolve({
        producto: 'Ordenador Gaming',
        cliente: 'Angel Hernandez WEB'
      });
    }, 3000);
  })
}

conseguirProductos()
  .then((items) => {
      console.log('Productos disponibles: ', items);
      return productoComprado(); // ! Asi es como se encadenan las promesas 
    })
    .then(venta => { // ? Recordar el que el resolve le pasara la info al .then
      console.log('Producto comprado: ', venta)

      productos = productos.filter((producto) => {
        return producto.nombre != venta.producto // ! Esto nos devuelve los productos que NO sean iguales a la venta que acabamos de hacer
      })
    })
  .catch(error => console.error(error.message) )  
  .finally(() => { 
    console.log('PROMESA FINALIZADA!!!')
    console.log('Productos aun disponibles: ' ,productos)
  }); 















