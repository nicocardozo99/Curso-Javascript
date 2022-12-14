import { actualizarTotalesCarrito } from './actualizarCarrito.js';
import { productos } from './stock.js';
import { obtenerStorage } from './storage.js';

let carrito = [];

const validarProductoRepetido = (productoId) => {

    if(localStorage.getItem('carrito')) {
        carrito = obtenerStorage();
    }

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                        `;
        contenedor.appendChild(div);
    });
};

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};


const confirmarCompra = document.getElementById('confirmarCompra')

confirmarCompra.addEventListener ('click', (productoId) => {
    const carritoStorage = obtenerStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id == productoId);

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
})


export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductoCarrito, confirmarCompra };