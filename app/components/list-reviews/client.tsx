'use client'
import { Review } from "./server"

interface ListReviewsProps {
    reviews: Review[];
}

export default function ListReviews({ reviews }: ListReviewsProps) {

    return (<div>
        Reviews
    </div>)
}