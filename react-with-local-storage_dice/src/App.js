import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";
import { getD6Roll } from "./utils";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRoll = rolls[0];
  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRoll?.value} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
