import { eliminarProductoCarrito } from "./accionesCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const sweetAlert = document.getElementById('cesta-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(e.target.value)
    };
});

sweetAlert.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Carrito',
        text: 'Detalles de tu compra',
        showConfirmButton: false,
        timer: 4000,
    })
});