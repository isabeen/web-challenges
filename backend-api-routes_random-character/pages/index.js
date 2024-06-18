import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <main>
      <h1>Random Characters!</h1>
      <p>First name: {data.firstName}</p>
      <p>Last name: {data.lastName}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </main>
  );
}
