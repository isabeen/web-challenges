import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  const handleRemoveTag = (name) => {
    const updateTag = tags.filter((tag) => tag !== name);
    setTags(updateTag);
  };

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onRemoveTag={handleRemoveTag} />
    </main>
  );
}
