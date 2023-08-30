import getProducts from "@/libs/getProducts";
let list = new Array();
let products = new Array();
async function search(data:FormData){
'use server'
let search = await JSON.stringify(data.get('search') || "");
search = search.substring(1,search.length-1); 
console.log(search);
const mySearch = search.split(',');
console.log(mySearch);
list.shift();
}

export default async function Products() {
    'use client'
    products = await getProducts();
    list = products;
    return (
        <>
        <div className="flex flex-col items-center mt-10">
            <form className="flex gap-8" action={search}>
            <input name="search" placeholder="Product Name" type="text" className=" border-2 border-black px-2 py-1 rounded"></input>
            <button type="submit" className="bg-blue-200 px-4 py-1 rounded">Search</button>
            </form>
                <div className="flex justify-between ml-2 w-1/3 mt-4">
                    <span>name</span>{" "}
                    <span>vendor</span>{" "}
                    <span>qty_available</span>
                </div>
            {list.map((p)=>(
                <div key={p.id} className="flex justify-between w-1/3 mt-4">
                    <span>{p.name}</span>{" "}
                    <span>{p.vendor}</span>{" "}
                    <span>{p.qty_available}</span>
                </div>
            ))}
        </div>   
        </>
    )
}