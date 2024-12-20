'use server'
// import ListReviews from "./client"

export interface Review {
    id: string;
    review: {
        datePosted: string;
        reviewText: string;
        name: string;
    };
}