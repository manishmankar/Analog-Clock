setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-houre-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const current = new Date();

  const secondsRatio = current.getSeconds() / 60;
  const minutersRatio = (secondsRatio + current.getMinutes()) / 60;
  const hoursRatio = (minutersRatio + current.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutersRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
