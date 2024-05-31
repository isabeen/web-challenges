import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data, isLoading, error, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher,
    { refreshInterval: 5000 }
  );

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
