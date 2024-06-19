import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleDelete() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    }
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <ProductForm
          onSubmit={handleEditProduct}
          heading="Edit Fish"
          initialData={data}
        />
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          <button
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            <span role="img" aria-label="A pencil">
              ✏️
            </span>
          </button>
          <button onClick={handleDelete} disabled={isEditMode}>
            <span role="img" aria-label="A cross indicating deletion">
              ❌
            </span>
          </button>

          <StyledLink href="/">Back to all</StyledLink>
        </>
      )}
    </ProductCard>
  );
}
