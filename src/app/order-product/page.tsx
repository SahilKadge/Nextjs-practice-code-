"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function OrderProduct() {
   
    const handleClick = () => {
        console.log("Your Order is placed");
        alert("Your order is placed");
       
    };

    return (
        <>
            <h1>Place Your Order</h1>
            <button className="bg-black mb-1 mt-1 text-white w-60 h-10 rounded-lg" onClick={handleClick}>
                Place Order
            </button>
            <br className=""/>
            <Link href='/'>
                <button className="bg-black text-white w-60 h-10 rounded-lg">
                    Go Home
                </button>
            </Link>
        </>
    );
}
