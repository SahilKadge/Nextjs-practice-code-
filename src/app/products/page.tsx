import Link from "next/link"
export default function ProductList() {
    const productId = 100;
    return(
        
        <>
            <div className="">
                <Link href='products'>Product LIst</Link>
                <Link href='products/1'>Product 1</Link>
                <Link href='products/2'>Product 2</Link>
                <Link href='products/3' replace>Product 3</Link> 
                <Link href={`products/${productId}`}>Product {productId}</Link>
                <Link className="text-red-600 text-3xl font-bold underline" href="/"><h1>home</h1></Link>
            </div>
        </>
    )
}

// replace will take you to home when click back after visiting product 3
// it will replace the current history state instead of adding new url 