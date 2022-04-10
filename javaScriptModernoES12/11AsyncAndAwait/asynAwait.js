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

    console.log('Cargando productos...')
    setTimeout(() => { 
      resolve(productos); // * Recordar el que el resolve le pasara la info al .then
      // reject(Error('A ocurrido un error!!'));
    }, 3000)
  });
}

/* 
conseguirProductos()
  .then((items) => {
      console.log('Productos disponibles: ', items);
  }    
*/

const getMyProducts = async () => {  // ! Asi se crear el async/await, y tambien usando arrow functions

  let misProductos = await conseguirProductos(); // ? await va a esperar el resolve de la promesa de conseguirProductos
  console.log(misProductos);
}

getMyProducts();






























})