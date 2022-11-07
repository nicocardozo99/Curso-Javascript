import { mostrarProductos } from "./App.js"
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { obtenerStorage } from "./src/storage.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    }
});

document.addEventListener('keyup', e=> {

if (e.target.matches('#buscarProducto')){

    document.querySelectorAll('.card').forEach(producto => {

        producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?producto.classList.remove('filtro')
        :producto.classList.add('filtro')
    })
}
});
