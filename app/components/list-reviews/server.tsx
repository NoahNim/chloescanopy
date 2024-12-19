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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`);
    console.log(res)
    if (!res.ok) {
        throw new Error(`Failed to fetch reviews: ${res.status} ${res.statusText}`);
    }
    const reviews: Review[] = await res.json();
    return <ListReviews reviews={reviews} />;
}