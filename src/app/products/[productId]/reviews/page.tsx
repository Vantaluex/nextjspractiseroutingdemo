// app/products/[productId]/reviews/page.tsx
import Link from "next/link";
import { getReviewsForProduct } from "@/lib/reviews";

type Params = {
  productId: string;
};

export default async function ReviewList({ params, }: { params: Promise<{productId: string}> }) {
  const { productId } = await params;
  const reviews = getReviewsForProduct(productId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reviews for Product {productId}</h1>
      
      {reviews.length === 0 ? (
        <p>No reviews yet for this product.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="border p-4 rounded">
              <Link 
                href={`/products/${productId}/reviews/${review.id}`}
                className="text-blue-600 hover:underline"
              >
                <h3 className="font-semibold">{review.title}</h3>
              </Link>
              <p className="text-yellow-500">{"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}</p>
              <p className="text-gray-600">by {review.author}</p>
              <p className="mt-2">{review.body.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
