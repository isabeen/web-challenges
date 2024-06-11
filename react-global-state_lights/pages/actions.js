import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  countIsOn,
  turnOnAllLights,
  turnOffAllLights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        countIsOn={countIsOn}
        turnOnAllLights={turnOnAllLights}
        turnOffAllLights={turnOffAllLights}
      />
    </>
  );
}
