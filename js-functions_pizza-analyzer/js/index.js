console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = pizzaInput1.value;
let diameter2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let diameter1 = pizzaInput1.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, diameter1);
  updateOutputColor(diameter1, diameter2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
  updateOutputColor(diameter1, diameter2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let radius1 = diameter1 / 2;
  let radius2 = diameter2 / 2;
  let areaPizza1 = Math.PI * radius1 * radius1;
  let areaPizza2 = Math.PI * radius2 * radius2;
  output.innerHTML = Math.round(((areaPizza2 - areaPizza1) / areaPizza1) * 100);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplay = (newSize / 24) * 100;
  pizzaElement.style.width = `${newDisplay}px`;
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor = `var(${
    size1 <= size2 ? "--green" : "--red"
  }`;
}
