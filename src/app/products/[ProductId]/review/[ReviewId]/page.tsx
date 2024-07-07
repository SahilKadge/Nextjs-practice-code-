"use client"
import { notFound } from "next/navigation";

function getRandomInt(count: number){
  return Math.floor(Math.random()*count);
}

export default function ReviewDetail({
  params,
}: {
  params: { ProductId: string; ReviewId: string };
}) {
  const random = getRandomInt(2);
  if(random === 1){
    throw new Error("Error loading review");
  }
    if(parseInt(params.ReviewId) > 1000){
        return notFound();
    }
    return (
        <div>
          <h1>
        Review {params.ReviewId} of product {params.ProductId} {random}
        </h1>
        should be use client because reset error worrk with client side component 
        </div>

    );
}
