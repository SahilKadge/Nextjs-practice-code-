"use client"

import Image from "next/image"

export default function ErrorBoundary({
    error, 
    reset,
}:{
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <Image width={600} height={600} alt="error image"  src="/error_notes.png"></Image>
            <Image width={600} height={600} alt="error hirarchy"  src="/error-hirarchy.png"></Image>
            <Image width={600} height={600} alt="error nested"  src="/nested_error .png"></Image>
             <div className="bg-red-500 h-20 font-bold text-4xl mt-0 pt-2"> Error in review Id </div>
             <div>{error.message}</div>
             <button onClick={reset} className="bg-green-500 text-white hover:text-green-200">Try again</button>
             <h1>It depends on the position of error file if the error file is inside the review folder it will have path http://localhost:3000/products/1/review/10
                and when it is inside product folder it will have http://localhost:3000/products the url is same for both but fotter will change we can se product detail of productId folder  </h1>
            <br/>
            <h1>Let say we have error.tsx in productId folder and we have error in layout.tsx of productId folder so for this we will not get error.tsx get trigered </h1>
            <br/>

            <h1>An error.tsx file will handle errors for all its nested child segment </h1>
            <br/>
            <h1>The error boundary does not catch error thrown here because its is nested in the layout component </h1>
        </div>
    )
}