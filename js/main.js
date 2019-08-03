"use strict";
//debugger;

function numberGame(ev) {
  ev.preventDefault();
  changeText();
  addTry();
}

const inputElement = document.querySelector(".js-number");

const tryCount = document.querySelector(".js-try");

const buttonElement = document.querySelector(".js-button");

const textElement = document.querySelector(".js-resultText");

// generate random number & show in console
const getRandomNumber = function() {
  return Math.floor(Math.random() * 100);
};
const randomNumber = getRandomNumber();
console.log(randomNumber);
debugger;
function changeText() {
  if (parseInt(inputElement.value) > randomNumber) {
    if (parseInt(inputElement.value) > 100 || parseInt(inputElement.value) < 1) {
      textElement.innerHTML = "El número debe estar entre 1 y 100";
    } else {
      textElement.innerHTML = "Demasiado alto";
    }
  } else if (parseInt(inputElement.value) === randomNumber) {
    textElement.innerHTML = "¡HAS GANADO, CAMPEONA!";
  } else {
    textElement.innerHTML = "Demasiado bajo";
  }
}

const numberIntro = parseInt(inputElement.value);
console.log(numberIntro);

// function for counter
let acc = 0;
function addTry() {
  if (inputElement.value) {
    acc = acc + 1;
    tryCount.innerHTML = acc;
  } else {
    acc = acc;
  }
}

buttonElement.addEventListener("click", numberGame);
