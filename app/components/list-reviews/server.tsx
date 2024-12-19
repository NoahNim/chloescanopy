'use server'
import { use } from "react"
import { signInAnonymously } from "firebase/auth"
import { getDocs, collection } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import ListReviews from "./client"

export interface Review {
    id: string;
    name: string;
    review: string;
    date: Date;
}

export async function getReviewsAction() {
    try {
        await signInAnonymously(auth);
        try {
            const reviewsSnapshot = await getDocs(collection(db, "reviews"))
            const reviewsArray: Review[] = [];

            reviewsSnapshot.forEach((review) => {
                const reviewData = review.data();
                if (reviewData && "name" in reviewData && "review" in reviewData && "date" in reviewData) {
                    const typedReviewData = reviewData as Omit<Review, 'id'>;
                    reviewsArray.push({
                        id: review.id,
                        ...typedReviewData,
                    });

                    return reviewsArray;
                } else {
                    console.warn("Review document is missing required fields:", review.id, reviewData);
                }
            })

            return reviewsArray;
        } catch (error: any) {
            console.log(error)
            return [];
        }
    } catch (error: any) {
        console.log(error)
        return [];
    }
}

export default async function ListReviewsServerAction() {
    const reviews = use(getReviewsAction());
    return <ListReviews reviews={reviews} />;
}