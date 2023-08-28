import connectMongoDB from "../../../libs/mongodb"

connectMongoDB();
export default function Add(){
        return (
        <form className="flex flex-col justify-center w-1/4">
            <label>Name</label>
            <input name="name" type="text" className="py-1 px-2 rounded-sm"></input>
            <label>Vendor</label>
            <input name="vendor" type="text" className="py-1 px-2 rounded-sm"></input>
            <label>Quantity</label>
            <input name="qty" type="number" className="py-1 px-2 rounded-sm"></input>
            <label>Unit</label>
            <input name="unit" type="text" className="py-1 px-2 rounded-sm"></input>
            <button className="border-2 w-1/3 border-black mt-2 self-center" type="submit">save</button>
        </form>
    )
}