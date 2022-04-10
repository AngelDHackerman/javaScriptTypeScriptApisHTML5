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
      // resolve(productos); 
      reject(Error('A ocurrido un error!!'));
    }, 3000)
  });
}


const getMyProducts = async () => {

  try { // ? Aqui le decimos: Pueba este codigo, y si todo funciona sigue ejecutando, sino ve al catch
    let misProductos = await conseguirProductos(); 
    console.log(misProductos);
  } catch (error) { // ? Si hay algun error aqui atrapa el codigo, y sigue ejecutando lo que este abajo.
    console.error(error.message)
  }
  console.log('Seguimos ejecutando despues del try/catch')
}

getMyProducts();

  
  
  
  
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  })