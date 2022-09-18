"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

console.log(btnOpenModal); // its a kind of an array

const closeModal = () => {
  console.log("Modal Clossed");

  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

const openModal = () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  // modal.style.display = "block";
  // overlay.style.dsiplay = "block";
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
