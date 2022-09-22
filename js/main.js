class producto {
  constructor(id, nombre, precio) {
    this.id = id,
    this.nombre = nombre,
    this.precio = Number(precio);
  }
};

const arrayProductos = [];

const producto1 = new producto(1, 'Bacon & Cheese', 1200);
const producto2 = new producto(2, 'Veggie', 800);
const producto3 = new producto(3, 'Cheeseburguer', 1000);

arrayProductos.push(producto1, producto2, producto3);

const ordenarMenorMayor = () => {
  arrayProductos.sort((a,b) => a.precio - b.precio);
  listaOrdenada();
};

const ordenarMayorMenor = () => {
  arrayProductos.sort((a,b) => b.precio - a.precio);
  listaOrdenada();
};

const listaOrdenada = () => {
  array = [];
  arrayProductos.forEach(producto => array.push(producto.nombre+' $'+ producto.precio));
  alert('Lista de productos: '+'\n'+array.join('\n'));
};

const agregarProductos = () => {
  let otroProducto = false;
  let productoNombre = '';
  let productoCantidad = 0;
  let total = 0;

  do {
    productoNombre = prompt('Que hamburguesa desea comprar?');
    productoCantidad = prompt('Cuantas queres comprar?');

    const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

    if (producto) {
      total += producto.precio * productoCantidad;
    } else {
      alert('El producto no se encuentra en nuestro menu')
    }

      otroProducto = confirm('Desea seguir comprando?');
  } while (otroProducto);

  obtenerDescuento(total);
};

const obtenerDescuento = (total) => {
  if (total >=3000) {
    total = total * 0.80;
    alert('Tenes un descuento del 20% !');
  }
  obtenerPrecioDeEnvio(total);
};

const obtenerPrecioDeEnvio = (total) => {
  let confirmacion = confirm('Queres envio a domicilio?');
  if (confirmacion && total >= 4000) {
    alert('Tenes envio gratis!');
  } else if (confirmacion && total < 4000 && total !== 0) {
    total = total + 700;
    alert('El envio cuesta $700. El total es de: $'+total);
  } else {
    alert('El total de tu compra es de: $'+total);
  }
}

const lista = () => {
  if (confirm('Desea ordenar los productos del mas barato al mas caro?')) {
    ordenarMenorMayor();
  }
  else {
    ordenarMayorMenor();
}

agregarProductos();
};

lista();