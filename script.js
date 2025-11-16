// Seleccionar el botón
const button = document.querySelector("button");

// Agregar un evento al botón
button.addEventListener("click", function () {
  //Generar color aleatorio en hexadecimal
  const colorHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Cambiar el color de fondo del body
  document.body.style.backgroundColor = colorHex;

  // Mostrar alert
  alert("Has cambiado el background a " + colorHex);
});
