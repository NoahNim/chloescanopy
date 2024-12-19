'use client'
import { useEffect, useState } from "react";
import { Review, getReviewsAction } from "./server"

export default function ListReviews() {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const fetchedReviews = await getReviewsAction();
                setReviews(fetchedReviews);
            } catch (err: any) {
                setError(err.message || "Failed to fetch reviews");
                console.error("Error fetching reviews in useEffect:", err);
            } finally {
                setLoading(false);
            }
        };

        loadReviews();
    }, []); // Empty dependency array: runs only once on mount

    if (loading) {
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
                {reviews.map((item) => (
                    <li key={item.id}>
                        {item.review.name} - {item.review.reviewText}
                    </li>
                ))}
            </ul>
        </div>
    );
}