import Link from "next/link";
import { volumes } from "@/lib/data";

export default function FellowshipOfRing() {
  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>The Fellowship of the Ring</h1>
      <p>{volumes[0].description}</p>
      <ul>
        <li>
          {volumes[0].books[0].ordinal}: {volumes[0].books[0].title}
        </li>
        <li>
          {volumes[0].books[1].ordinal}: {volumes[0].books[1].title}
        </li>
      </ul>
    </div>
  );
}
