/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from 'react';
import { Review } from "./server"

interface ListReviewsProps {
    reviews: Review[] | null;
    isLoading: boolean;
    error: string | null;
}

export default function ListReviews({ reviews, isLoading, error }: ListReviewsProps) {
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