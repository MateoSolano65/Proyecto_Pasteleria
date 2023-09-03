// En este archivo, colocaremos el código JavaScript.

// Variables para llevar el seguimiento de los productos y el carrito
const productos = document.querySelectorAll('.producto');
const carritoLista = document.getElementById('carrito-lista');

productos.forEach((producto, index) => {
    const agregarBtn = producto.querySelector('.agregar');
    const quitarBtn = producto.querySelector('.quitar');
    const cantidadSpan = producto.querySelector('.cantidad');
    const agregarCarritoBtn = producto.querySelector('.agregar-carrito');

    let cantidad = 0;
    const precio = parseFloat(producto.querySelector('p').getAttribute('data-precio'));

    agregarBtn.addEventListener('click', () => {
        cantidad++;
        cantidadSpan.textContent = cantidad;
    });

    quitarBtn.addEventListener('click', () => {
        if (cantidad > 0) {
            cantidad--;
            cantidadSpan.textContent = cantidad;
        }
    });

    agregarCarritoBtn.addEventListener('click', () => {
        if (cantidad > 0) {
            const productoNombre = `Producto ${index + 1}`;
            const total = cantidad * precio;

            // Crear un elemento de lista para el carrito
            const itemCarrito = document.createElement('li');
            itemCarrito.textContent = `${productoNombre} - Cantidad: ${cantidad} - Total: $${total.toFixed(3)}`;

            // Agregar el elemento de lista al carrito
            carritoLista.appendChild(itemCarrito);

            // Reiniciar la cantidad del producto
            cantidad = 0;
            cantidadSpan.textContent = cantidad;
        }
    });
});
