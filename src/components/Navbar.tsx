import Link from "next/link"
export default function Navbar(){
    return (
        <nav className="flex justify-center" style={{padding:"1rem"}}>
            <ul className="flex md:w-1/2 w-full" style={{justifyContent:"space-evenly"}} >
                <Link href="/">Products</Link>
                <Link href="/new">New</Link>
                <Link href="/upload">Upload</Link>
            </ul>

        </nav>
    )
}