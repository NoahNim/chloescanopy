import type { NextApiRequest, NextApiResponse } from 'next';
import { getReviewsAction, Review } from '@/app/components/list-reviews/server';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Review[] | { message: string }>
) {
    try {
        const reviews = await getReviewsAction();

        if (!reviews) {
            return res.status(500).json({ message: "Failed to fetch reviews" });
        }

        res.status(200).json(reviews);
    } catch (error: any) {
        console.error("Error in reviews route", error);
        res.status(500).json({ message: "Error fetching reviews: " + error.message });
    }
}