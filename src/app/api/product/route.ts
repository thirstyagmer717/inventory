import getProducts from "@/libs/getProducts";

export async function GET(){
    const data = await getProducts();
    return new Response(JSON.stringify(data));
}