import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Button Clicked!");
    alert("You clicked me!");
  }
  return (
    <Button
      color="hotpink"
      disabled={false}
      text="Click Me!"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
