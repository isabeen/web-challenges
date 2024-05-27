import React from "react";
import "./styles.css";

export default function App() {
  return <MyArticle />;
}

function MyArticle() {
  return (
    <article>
      <h2 className="article__title">React Basics</h2>
      <p>
        Unlock the full potential of your web development skills with
        personalized React tutoring! Join us to build dynamic, high-performing
        web applications and take your coding abilities to the next level. Sign
        up today and start your journey towards becoming a React expert!
      </p>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" />
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" />
      <a href="https://www.goole.com" className="article__link">
        Get in touch!
      </a>
    </article>
  );
}
