import Link from "next/link";
import { volumes } from "@/lib/data";

export default function ReturnOfKing() {
  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>The Two Towers</h1>
      <p>{volumes[1].description}</p>
      <ul>
        <li>
          {volumes[1].books[0].ordinal}: {volumes[1].books[0].title}
        </li>
        <li>
          {volumes[1].books[1].ordinal}: {volumes[1].books[1].title}
        </li>
      </ul>
      <div>
        <p>
          <Link href="/volumes/the-fellowship-of-the-ring">
            ← Previous Volume
          </Link>
        </p>
        <p>
          <Link href="/volumes/the-return-of-the-king">→ Next Volume</Link>
        </p>
      </div>
    </div>
  );
}
