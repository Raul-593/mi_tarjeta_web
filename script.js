// Seleccionar el botón
const button = document.getElementById("cambia_color");
const buttonCard = document.getElementById("cambiar_color_card");

const card = document.querySelector("body > div");

// Agregar un evento al botón
button.addEventListener("click", function () {
  //Generar color aleatorio en hexadecimal
  const colorHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Cambiar el color de fondo del body
  document.body.style.backgroundColor = colorHex;

  // Mostrar alert
  alert("Has cambiado el background a " + colorHex);
});

// Agregar un evento al botón para cambiar el color del card
buttonCard.addEventListener("click", function () {
  const colorHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  // Cambiar el color de fondo del card
  card.style.backgroundColor = colorHex;
  alert("Has cambiado el color de la card a " + colorHex);
});
