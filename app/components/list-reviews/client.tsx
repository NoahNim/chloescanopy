'use client'
import { useEffect, useState } from 'react';
import { Review } from "./server"

export default function ListReviews() {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Clear any previous error

            try {
                const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
                    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
                    : 'http://localhost:3000';
                const res = await fetch(`${baseUrl}/api/reviews`);

                if (!res.ok) {
                    throw new Error(`Failed to fetch reviews: ${res.status}`);
                }

                const reviewsData = await res.json();
                setReviews(reviewsData);
            } catch (error: any) {
                console.error("Error fetching reviews:", error);
                setError(error.message || "An error occurred while fetching reviews");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading reviews...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!reviews) {
        return <div>No reviews to display yet.</div>;
    }

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews?.map((item) => (
                    <li key={item.id}>
                        {item.review.name} - {item.review.reviewText} - {item.review.datePosted}
                    </li>
                ))}
            </ul>
        </div>
    );
}