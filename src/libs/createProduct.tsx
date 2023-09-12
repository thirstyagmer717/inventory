import connectMongoDB from "./mongoose";
import itemSchema from "./itemSchema";
import mongoose from "mongoose";

const createProduct = async (req: any) => {
  connectMongoDB();
  const data = req.data;
  const Product = mongoose.model("Items", itemSchema);

  const operations = [];
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

  for (const object of uniqueObjects) {
    const filter = {
      // Skip documents that already exist in the collection and have the same name and vendor.
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

    operations.push({
      insertOne: {
        document: object,
        upserts: true,
        filter: filter,
      },
    });
  }

  await Product.bulkWrite(operations);
};

export default createProduct;
