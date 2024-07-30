// Busquemos el formulario en el DOM
const btnAbrirPopup = document.querySelector("#btn-abrir-popup");
const overlay = document.querySelector("#overlay");
const Popup = document.querySelector("#popup");
const btnCerrarPopup = document.querySelector(".popup__close");

function popupToggle() {
  overlay.classList.toggle("active");
  Popup.classList.toggle("active");
}

btnAbrirPopup.addEventListener("click", popupToggle);

btnCerrarPopup.addEventListener("click", popupToggle);

const EditarPerfil = document.forms["registrer"];
const inputNombre = EditarPerfil.elements["name"];
const inputCharacteristic = EditarPerfil.elements["about"];
const h2Person = document.getElementById("profile__name");
const pDescription = document.querySelector(".profile__description");

EditarPerfil.addEventListener("submit", function (event) {
  event.preventDefault();

  const nuevoNombre = inputNombre.value.trim();
  const nuevaCaracteristica = inputCharacteristic.value.trim();
  h2Person.textContent = nuevoNombre;
  pDescription.textContent = nuevaCaracteristica;
  popupToggle();
});
