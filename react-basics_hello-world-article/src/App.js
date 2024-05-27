import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>My First React Article</h1>
      <p>Hi everyone. I am using React to show this paragraph to you!</p>
    </article>
  );
}
