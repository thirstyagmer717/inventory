import itemSchema from "../../libs/itemSchema";
import connectMongoDB from "../../libs/mongoose"
import mongoose from "mongoose";

async function createItem(data:FormData){
    'use server'
    const name = data.get('name')
    const vendor = data.get('vendor')
    const Data = {
        name:name,
        vendor:vendor,
    }
    console.log(Data);
    
    try{
        connectMongoDB();
        const Item = mongoose.model("Items", itemSchema,undefined, { overwriteModels: true })
        const item = new Item(Data);
        await item.save();
    }catch(err){
        console.log(err)
    }
}

export default function Add(){
        return (
        <form action={createItem} className="flex flex-col justify-center w-1/4">
            <label>Name</label>
            <input name="name" type="text" required className="py-1 px-2 rounded-sm"></input>
            <label>Vendor</label>
            <input name="vendor" type="text" required className="py-1 px-2 rounded-sm"></input>
            <button className="border-2 w-1/3 border-black mt-2 self-center" type="submit">save</button>
        </form>
    )
}