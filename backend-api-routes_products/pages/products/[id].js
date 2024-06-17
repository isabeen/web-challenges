import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <h1>Product Details</h1>
      <div>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>Category: {data.category}</p>
        <p>
          Price: {data.currency}
          {data.price}
        </p>
      </div>
    </main>
  );
}
