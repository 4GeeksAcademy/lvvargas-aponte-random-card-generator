/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const numberElement = document.querySelector("#randomCardNum");
  const topSpadeElement = document.querySelector("#randomCardSpadeTop");
  const bottomSpadeElement = document.querySelector("#randomCardSpadeBottom");

  const getRandomElement = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const suits = ["♠", "♣", "♥", "♦"];
  const cardNum = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cardColor = ["red", "black"];

  let randomNum = getRandomElement(cardNum);
  let randomSuits = getRandomElement(suits);
  let randomColor = getRandomElement(cardColor);

  numberElement.innerHTML = randomNum;
  topSpadeElement.innerHTML = randomSuits;
  bottomSpadeElement.innerHTML = randomSuits;

  if (randomColor != "black") {
    numberElement.style.color = randomColor;
    topSpadeElement.style.color = randomColor;
    bottomSpadeElement.style.color = randomColor;
  } else {
    numberElement.style.color = randomColor;
    topSpadeElement.style.color = randomColor;
    bottomSpadeElement.style.color = randomColor;
  }

  const cardBody = document.querySelector("#cardBody");
  const heightInput = document.querySelector("#heightInput");
  const widthInput = document.querySelector("#widthInput");

  const updateCardSize = () => {
    let newHeight = heightInput.value;
    let newWidth = widthInput.value;

    newHeight = parseFloat(newHeight);
    newWidth = parseFloat(newWidth);

    if (isNaN(newHeight)) {
      cardBody.style.height = "400px";
    } else {
      cardBody.style.height = `${newHeight}px`;
    }

    if (isNaN(newWidth)) {
      cardBody.style.width = "325px";
    } else {
      cardBody.style.width = `${newWidth}px`;
    }
  };

  const cardSizeForm = document.querySelector("#cardSizeForm");
  cardSizeForm.addEventListener("input", updateCardSize);

  const reloadEveryTenSec = () => {
    return setTimeout(function() {
      location.reload(true);
    }, 10000);
  };

  const startTenSecReload = document.querySelector("#tenSecButton");
  const stopTenSecReload = document.querySelector("#stopTenSecButton");
  let timeoutId;

  startTenSecReload.onclick = function() {
    clearTimeout(timeoutId);
    timeoutId = reloadEveryTenSec();
  };

  stopTenSecReload.onclick = function() {
    clearTimeout(timeoutId);
  };
};
