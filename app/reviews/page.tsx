/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from 'react';
import ListReviews from "../components/list-reviews/client"
import AddReview from "../components/add-review/client"
import { Review } from '../components/list-reviews/server';

export default function Reviews() {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null); // Clear any previous error

        try {
            // const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
            //     ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            //     : 'http://localhost:3000';
            const res = await fetch(`api/reviews`);

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


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="border-solid rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ListReviews reviews={reviews} isLoading={isLoading} error={error} />
                <AddReview fetchData={fetchData} />
            </div>
        </div>
    )
}