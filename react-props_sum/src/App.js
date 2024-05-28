import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={5} valueB={3} />;
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <div>
      {valueA} + {valueB} = {result}
    </div>
  );
}
