import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const newProduct = request.body;
      await Product.create(newProduct);
      return response
        .status(201)
        .json({ status: "Product created successfully!" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
