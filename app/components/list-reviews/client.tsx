'use client'
import { Review } from "./server"

interface ListReviewsProps {
    reviews: Review[] | null;
    isLoading: boolean;
    error: string | null;
}

export default function ListReviews({ reviews, isLoading, error }: ListReviewsProps) {
    if (isLoading) {
        return <div className=" text-center">Loading reviews...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!reviews) {
        return <div className="text-center">No reviews to display yet.</div>;
    }

    return (
        <div className="">
            <h1 className="text-center font-bold text-4xl"><b>Reviews</b></h1>
            <p className="text-center text-lg bold">We&apos;d love to hear about your experience! How long has your child been participating in programs with Chloe? What has your overall experience been like working with Chloe?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
                {reviews?.map((item) => (
                    <div key={item.id} className="bg-lime-300/90 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="font-bold text-xl mb-2">{item.review.name}</h2>
                            <p className="text-gray-700 text-base mb-4">{item.review.reviewText}</p>
                            <p className="text-gray-600 text-sm">{item.review.datePosted}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}