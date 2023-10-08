// import itemSchema from "../../libs/itemSchema";
// import connectMongoDB from "../../libs/mongoose"
// import mongoose from "mongoose";

// async function createItem(data: FormData) {
//     'use server'
//     const name = data.get('name')
//     const vendor = data.get('vendor')
//     const Data = {
//         name: name,
//         vendor: vendor,
//     }
//     console.log(Data);

//     try {
//         connectMongoDB();
//         const Item = mongoose.model("Items", itemSchema, undefined, { overwriteModels: true })
//         const item = new Item(Data);
//         await item.save();
//     } catch (err) {
//         console.log(err)
//     }
// }

// export default function Add() {
//     return (
//         <div className="flex justify-center mt-8">
//             <form action={createItem} className="flex flex-col">
//                 <label className="my-1">Name</label>
//                 <input name="name" type="text" required className="py-1 px-2 rounded-sm"></input>
//                 <label className="my-1">Vendor</label>
//                 <input name="vendor" type="text" required className="py-1 px-2 rounded-sm"></input>
//                 <button className=" md:w-1/3 px-2 py-1 mt-2 rounded-sm bg-blue-300 self-center" type="submit">save</button>
//             </form>
//         </div>
//     )
// }