
import { Metadata } from "next";
import { resolve } from "path";
type Props = {
  params: {
    ProductId: string;
  };
};

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.ProductId}`)
        })
    })
    return {
        title: `Product ${title}`,
    }
}
export default function ProductDetail({ params }: Props) {
  return <h1>Detail about product {params.ProductId}</h1>;
}
