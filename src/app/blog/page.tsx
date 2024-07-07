import { Metadata } from "next"

export const metadata: Metadata = {
    // title: "Blog"
    // this will use template and print Blog | sahil kadge
    title:{
        absolute:"Blog", // this give as only blog 
    }
}
export default function Blog() {
    return <h1>My Blog</h1>
}