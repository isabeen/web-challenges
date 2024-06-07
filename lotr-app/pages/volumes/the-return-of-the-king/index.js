import Link from "next/link";
import { volumes } from "@/lib/data";

export default function ReturnOfKing() {
  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>The Return of the King</h1>
      <p>{volumes[2].description}</p>
      <ul>
        <li>
          {volumes[2].books[0].ordinal}: {volumes[2].books[0].title}
        </li>
        <li>
          {volumes[2].books[1].ordinal}: {volumes[2].books[1].title}
        </li>
      </ul>
    </div>
  );
}
