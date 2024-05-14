console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
  console.log(data);
  const age = formElement.age.value;
  const badness = formElement.badness.value;
  const firstName = formElement.firstName.value;
  const sum = parseInt(age) + parseInt(badness);
  console.log(`The age-badness-sum of ${firstName} is ${sum}`);
  formElement.elements.firstName.focus();
  formElement.reset();
});
