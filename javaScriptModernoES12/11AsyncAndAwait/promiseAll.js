window.addEventListener('DOMContentLoaded', event => { 

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

    setTimeout(() => { 
      resolve(productos); // * Recordar el que el resolve le pasara la info al .then
      // reject(Error('A ocurrido un error!!'));
    }, 3000)
  });
}

const conseguirNombre = () => {

  return new Promise ((resolve, reject) => { 

    setTimeout(() => { 
      resolve('Angel Hernandez WEB'); // * Recordar el que el resolve le pasara la info al .then
    }, 3000)
  });
}

const getMyProducts = async () => {

  try {
    console.log('Cargando informacion...');

    // ? await Promise.all Hace que las 2 promesas se ejecuten al mismo tiempo y reducir el tiempo de espera en lugar de encadenarlas una a la otra
    let informacion = await Promise.all([conseguirProductos(), conseguirNombre()]);
    
    console.log(informacion[0], informacion[1])
  } catch (error) {
    console.error(error.message)
  }
}

getMyProducts();


})