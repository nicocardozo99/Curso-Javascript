function saludar() {
  alert("Bienvenido a Pna Burguers");
  let nombre = prompt("Ingrese su nombre");
  while (nombre === "") {
    nombre = prompt("Ingrese su nombre");
  }
}

function mostrarProductos() {
  let productoId;
  do {
    productoId = prompt(
      "Que hamburguesa desea comprar? : \n1) Cheese & bacon\n2) Veggie\n3)Cheese burguer"
    );
  } while (productoId < 1 || productoId > 3);

  switch (productoId) {
    case "1":
      return "Cheese & bacon";
    case "2":
      return "Veggie";
    case "3":
      return "Cheese burguer";
  }
}

function validarPrecio(nombre) {
  if (nombre === "Cheese & bacon") {
    return 1100;
  } else if (nombre === "Veggie") {
    return 800;
  } else if (nombre === "Cheese burguer") {
    return 1000;
  }
}

function cobrarProducto(nombre, precio) {
  alert("Hamburguesa : " + nombre + ".\nEl total a pagar es $" + precio);
  let pago = prompt("Con cuanto abona?");

  if (precio < pago) {
    alert("Su vuelto es $" + (pago - precio));
  }
}

saludar();
let nombreProducto = mostrarProductos();
let precioProducto = validarPrecio(nombreProducto);
cobrarProducto(nombreProducto, precioProducto);
