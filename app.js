// Busquemos el formulario en el DOM
const btnAbrirPopup = document.querySelector("#btn-abrir-popup");
const overlay = document.querySelector("#overlay");
const Popup = document.querySelector("#popup");
const btnAbrirCards = document.querySelector("#btn-abrir-card");
const PopupCards = document.querySelector("#overlay-cards");
const PopupImage = document.querySelector("#modal-image");
const PopupImageSrc = document.querySelector(".modal__image-src");
const PopupImageTitle = document.querySelector(".modal__image-title");
const btnCerrarPopup = document.querySelector(".popup__close");
const btnCerrarCards = document.querySelector("#cards__close");
const btnCerrarModal = document.querySelector("#modal__close");
const EditarPerfil = document.forms["registrer"];
const NewPlace = document.forms["places"];
const inputNombre = EditarPerfil.elements["name"];
const inputTitulo = NewPlace.elements["input-card-title"];
const inputCharacteristic = EditarPerfil.elements["about"];
const inputCardLink = NewPlace.elements["input-card-link"];
const h2Person = document.getElementById("profile__name");
const pDescription = document.querySelector(".profile__description");
const cardTemplate = document.querySelector("#card-template").content;
const cardArea = document.querySelector(".card__area");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function createCard(name, link) {
  const card = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = card.querySelector(".photo");
  const cardTitle = card.querySelector(".element__title");
  const cardLikeButton = card.querySelector(".element__heart");
  const cardTrushButton = card.querySelector(".element__delete-icon");

  cardTrushButton.addEventListener("click", function () {
    card.remove();
  });

  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("element__heart_active");
  });
  cardImage.addEventListener("click", function () {
    openPopupImageToggle(name, link);
  });
  cardTitle.textContent = name;
  cardImage.src = link;
  return card;
}

initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link);
  cardArea.append(newCard);
});

function popupToggle() {
  overlay.classList.toggle("active");
  Popup.classList.toggle("active");
}

btnAbrirPopup.addEventListener("click", popupToggle);

btnCerrarPopup.addEventListener("click", popupToggle);

EditarPerfil.addEventListener("submit", function (event) {
  event.preventDefault();

  const nuevoNombre = inputNombre.value.trim();
  const nuevaCaracteristica = inputCharacteristic.value.trim();
  h2Person.textContent = nuevoNombre;
  pDescription.textContent = nuevaCaracteristica;
  popupToggle();
});

function PopupCardsToggle() {
  PopupCards.classList.toggle("active");
}

btnAbrirCards.addEventListener("click", PopupCardsToggle);
btnCerrarCards.addEventListener("click", PopupCardsToggle);

NewPlace.addEventListener("submit", function (event) {
  event.preventDefault();

  const newCard = createCard(inputTitulo.value, inputCardLink.value);
  cardArea.prepend(newCard);
  PopupCardsToggle();
});
function openPopupImageToggle(title, link) {
  PopupImage.classList.toggle("modal_opened");
  PopupImageTitle.textContent = title;
  PopupImageSrc.src = link;
}
btnCerrarModal.addEventListener("click", openPopupImageToggle);
