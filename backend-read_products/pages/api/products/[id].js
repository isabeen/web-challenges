import dbConnect from "../../../db/connect.js";
import Product from "../../../db/models/Product.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  // const product = products.find((product) => product.id === id);
  const product = await Product.findById(id).populate("reviews");

  console.log("product on the server", product);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
