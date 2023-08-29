import connectMongoDB from "./mongoose";
import mongoose from "mongoose";
import itemSchema from "./itemSchema";
export default async function getProducts(){
    connectMongoDB()
    const product=  mongoose.model("Items", itemSchema,undefined, { overwriteModels: true })
    const productList = await product.find();
    return productList;
    }