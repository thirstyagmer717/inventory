import getProducts from "@/libs/getProducts";
export default async function Products() {
    let products = await getProducts();
    
    return (
        <>
        <div className="flex flex-col items-center mt-10">
                <div className="flex justify-between ml-2 w-1/3 mt-4">
                    <span>name</span>{" "}
                    <span>vendor</span>{" "}
                    <span>qty_available</span>
                </div>
            {products.map((p)=>(
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