const min = 1;
const max = 6;

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const displayElement = document.getElementById("randomNumberDisplay");
  displayElement.textContent = randomNumber;
}
