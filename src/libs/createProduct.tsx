import connectMongoDB from "./mongoose";
import mongoose from "mongoose";
import itemSchema from "./itemSchema";

export default async function createProduct(req:any) {
  connectMongoDB();
  const data = req.data;
  const Product = mongoose.model("Items", itemSchema);

  const uniqueObjects = [];
  const hashMap = new Map();

  for (const product of data) {
    const key = `${product.name}:${product.vendor}`;

    if (!hashMap.has(key)) {
      hashMap.set(key, product);
      uniqueObjects.push(product);
    }
  }

  console.log(uniqueObjects.length);

  const operations = uniqueObjects.map((object) => {
    const filter = {
      $and: [
        {
          name: {
            $eq: object.name,
          },
        },
        {
          vendor: {
            $eq: object.vendor,
          },
        },
      ],
    };

    return {
      updateOne: {
        update: object,
        upsert: true,
        filter: filter,
      },
    };
  });

  await Product.bulkWrite(operations);
}