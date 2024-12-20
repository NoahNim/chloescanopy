'use server'
import ListReviews from "./client"

export interface Review {
    id: string;
    review: {
        datePosted: string;
        reviewText: string;
        name: string;
    };
}

export default async function ListReviewsServer() {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : 'http://localhost:3000'; // Fallback for local development
    console.log(baseUrl)
    const res = await fetch(`${baseUrl}/api/reviews`);
    console.log(res)
    if (!res.ok) {
        throw new Error(`Failed to fetch reviews: ${res.status} ${res.statusText}`);
    }
    const reviews: Review[] = await res.json();
    return <ListReviews reviews={reviews} />;
}