import Product from "../../../db/models/Product.js";
import dbConnect from "../../../db/connect.js";

export default async function handler(request, response) {
  await dbConnect();
  const products = await Product.find();
  response.status(200).json(products);
}
