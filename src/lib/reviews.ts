// src/lib/reviews.ts
export type Review = {
  id: string;
  productId: string;
  title: string;
  rating: number;
  body: string;
  author: string;
};

// Your "dictionary" - hardcoded reviews for different products
const allReviews: Review[] = [
  {
    id: "r1",
    productId: "1", 
    title: "Amazing product!",
    rating: 5,
    body: "This product exceeded my expectations. Highly recommended!",
    author: "John Doe"
  },
  {
    id: "r2", 
    productId: "1",
    title: "Good value",
    rating: 4,
    body: "Great quality for the price point.",
    author: "Jane Smith"
  },
  {
    id: "r3",
    productId: "2",
    title: "Not bad",
    rating: 3,
    body: "It's okay, but could be better.",
    author: "Mike Johnson"
  }
];

// Function to get all reviews for a specific product
export function getReviewsForProduct(productId: string): Review[] {
  return allReviews.filter(review => review.productId === productId);
}

// Function to get a single review
export function getReview(productId: string, reviewId: string): Review | undefined {
  return allReviews.find(review => 
    review.productId === productId && review.id === reviewId
  );
}
