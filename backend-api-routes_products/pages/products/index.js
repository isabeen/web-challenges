import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((res) => res.json());

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: hotpink;
  }
`;

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <StyledLink href={`/products/${product.id}`}>
              {product.name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
