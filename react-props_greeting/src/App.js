import "./styles.css";

export default function App() {
  return <Greeting name="Pete" />;
}

function Greeting({ name }) {
  return <div> {name === "Pete" ? "Hello Coach!" : `Hello ${name}!`}</div>;
}
