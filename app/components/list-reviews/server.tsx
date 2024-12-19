'use server'
import { use } from "react"
import { signInAnonymously } from "firebase/auth"
import { getDocs, collection } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import ListReviews from "./client"

interface FirestoreReviewData {
    datePosted: string;
    reviewText: string;
    name: string;
}

export interface Review {
    id: string;
    review: {
        datePosted: string;
        reviewText: string;
        name: string;
    };
}

export async function getReviewsAction(): Promise<Review[]> { // Separate fetch function
    try {
        await signInAnonymously(auth);
        const reviewsSnapshot = await getDocs(collection(db, "reviews"));
        const reviewsArray: Review[] = [];

        reviewsSnapshot.forEach((reviewDoc) => {
            const firestoreData = reviewDoc.data() as { review: FirestoreReviewData } | undefined;

            if (firestoreData && firestoreData.review) {
                const reviewData = firestoreData.review;
                const date = reviewData.datePosted.toString();

                reviewsArray.push({
                    id: reviewDoc.id,
                    review: {
                        datePosted: date,
                        reviewText: reviewData.reviewText,
                        name: reviewData.name,
                    },
                });
            } else {
                console.warn("Review document is missing data:", reviewDoc.id, firestoreData);
            }
        });

        return reviewsArray;
    } catch (error: any) {
        console.error("Error fetching reviews from Firestore:", error);
        throw error; // Re-throw the error to be caught by Suspense
    }
}
