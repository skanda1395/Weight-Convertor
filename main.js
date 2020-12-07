const btn = document.querySelector("#convert");
const userWeight = document.querySelector("#weight_field");

const poundsDiv = document.querySelector("#pounds");
const ouncesDiv = document.querySelector("#ounces");
const gramsDiv = document.querySelector("#grams");

const pound = 2.20462;
const gram = 1000;
const ounce = 35.274;

function roundDigits(val) {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

btn.addEventListener("click", (e) => {
  let userInput = userWeight.value;

  if(isNaN(userInput) || userInput == "") {
    alert("Enter a valid number");
  }
  else {
    poundsDiv.textContent = roundDigits(userInput * pound);
    ouncesDiv.textContent = roundDigits(userInput * ounce);
    gramsDiv.textContent = roundDigits(userInput * gram);
  }
});