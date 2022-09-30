const form = document.querySelector('#formulario');

const enviarFomrulario = (event) => {
  event.preventDefault();

  const {name, apellido, direccion, pedido} = event.target

  console.log(nombre.value,apellido.value,direccion.value, pedido.value);

  if (pedido.value.length === '') alert('El pedido no es valido');

};

form.addEventListener('submit', enviarFomrulario);