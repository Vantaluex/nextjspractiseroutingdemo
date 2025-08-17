
import { getReview } from "@/lib/reviews";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  productId: string;
  reviewId: string;
};

export default async function ProductReview({ params }: { params: Promise<Params> }) {
  const { productId, reviewId } = await params;

  const review = getReview(productId, reviewId);
  if(parseInt(reviewId) > 1000 || !review){
    notFound();
  }

  return (
    <article className="p-6">
      <Link href={`/products/${productId}/reviews`} className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to all reviews
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">{review.title}</h1>
      
      <div className="mb-4">
        <p className="text-yellow-500 text-xl">{"★".repeat(review.rating)}{"☆".repeat(5-review.rating)} ({review.rating}/5)</p>
        <p className="text-gray-600">by {review.author}</p>
      </div>
      
      <div className="prose">
        <p>{review.body}</p>
      </div>
    </article>
  );
}
