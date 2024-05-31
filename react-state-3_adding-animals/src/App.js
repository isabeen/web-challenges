import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}

// const [trees, setTrees] = useState([
//   { id: 0, name: "Oak", height 7.5},
//   { id: 1, name: "Beech", height 6},
//   { id: 2, name: "Pine", height 10}
// ]);

// function handleAddTree(tree) {
//   setTrees([...trees, tree]);
// }

// // Somewhere else:
// handleAddTree({id: 3, name: "Spruce", height: 13})
