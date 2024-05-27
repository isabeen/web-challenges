export function getAnimal(animal) {
  if (animal === "cats") {
    return `I totally love ${animal}!`;
  } else if (animal === "dogs") {
    return `I like ${animal}!`;
  }
  return "I do not like animals at all!";
}

getAnimal();
