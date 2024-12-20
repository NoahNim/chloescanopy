// 'use client'
import { Review, } from "./server"

interface ListReviewsProps {
    reviews: Review[]
}

export default function ListReviews({ reviews }: ListReviewsProps) {
    if (!reviews) {
        return <div>No reviews to display yet.</div>;
    }

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map((item) => (
                    <li key={item.id}>
                        {item.review.name} - {item.review.reviewText} - {item.review.datePosted}
                    </li>
                ))}
            </ul>
        </div>
    );
}