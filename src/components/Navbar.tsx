import Link from "next/link"
export default function Navbar(){
    return (
        <nav className="flex justify-center" style={{padding:"1rem"}}>
            <ul className="flex" style={{justifyContent:"space-evenly",width:"50%"}} >
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/add">New</Link>
            </ul>

        </nav>
    )
}