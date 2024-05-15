console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formElements = event.target;
  let numA = parseInt(formElements.numberA.value);
  let numB = parseInt(formElements.numberB.value);

  if (formElements.addition.value.checked) {
    result = add(numA, numB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
