import Link from "next/link";

export default function Home(){
    return (
        <div>
            <div>
            <Link href="/blog"><h1>Blog</h1></Link>
            <Link href="/products"><h1>Product</h1></Link>
            <Link href='order-product'><button className="bg-black text-white w-60 h-10 rounded-lg">Ordr Product</button></Link>
            </div>
            Home Page
        </div>
    )
    
}
