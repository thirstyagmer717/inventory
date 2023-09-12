import getProducts from "@/libs/getProducts";
import createProduct from "@/libs/createProduct";
import { NextRequest, NextResponse } from 'next/server'

export async function GET(){
    const data = await getProducts();
    return new Response(JSON.stringify(data));
}

export async function POST(request:NextRequest){
    const data = await request.json();
    const res = await createProduct(data);
    return new Response(JSON.stringify("hi"));
}