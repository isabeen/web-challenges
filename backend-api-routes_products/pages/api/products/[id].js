import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const products = getProductById(id);
  response.status(200).json(products);
  if (!products) {
    response.status(400).json({ status: "not found" });
    return;
  }
}
