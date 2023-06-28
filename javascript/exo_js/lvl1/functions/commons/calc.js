const addButton = document.getElementById("additionner");
const subButton = document.getElementById("soustraire");
const mulButton = document.getElementById("multiplier");
const divButton = document.getElementById("diviser");

const operationParagraph = document.getElementById("operation");
const resultParagraph = document.getElementById("resultat");
const form = document.getElementById("calculatrice");

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  const data = new FormData(form);
  const num1 = data.get("num1");
  const num2 = data.get("num2");
  const num3 = data.get("num3");

  const result = addition(num1, num2, num3);
  operationParagraph.innerText = "Addition";
  resultParagraph.innerText = result;
});

subButton.addEventListener("click", function (event) {
  event.preventDefault();

  const data = new FormData(form);
  const num1 = data.get("num1");
  const num2 = data.get("num2");
  const num3 = data.get("num3");

  const result = substraction(num1, num2, num3);
  operationParagraph.innerText = "Soustraction";
  resultParagraph.innerText = result;
});

mulButton.addEventListener("click", function (event) {
  event.preventDefault();
  const data = new FormData(form);
  const num1 = data.get("num1");
  const num2 = data.get("num2");
  const num3 = data.get("num3");

  const result = multiplication(num1, num2, num3);
  operationParagraph.innerText = "Multiplication";
  resultParagraph.innerText = result;
});

divButton.addEventListener("click", function (event) {
  event.preventDefault();
  const data = new FormData(form);
  const num1 = data.get("num1");
  const num2 = data.get("num2");
  const num3 = data.get("num3");

  const result = division(num1, num2, num3);
  operationParagraph.innerText = "Division";
  resultParagraph.innerText = result;
});
