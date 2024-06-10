import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  const randomVolume = getRandomElement(volumes);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.key}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Go to a random volume</button>
    </>
  );
}
