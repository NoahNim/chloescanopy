/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { signInAnonymously } from "firebase/auth";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

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

export async function GET() {
    try {
        // await signInAnonymously(auth);
        // const reviewsSnapshot = await getDocs(collection(db, "reviews"));
        // const reviewsArray: Review[] = [];

        // reviewsSnapshot.forEach((reviewDoc) => {
        //     const firestoreData = reviewDoc.data() as { review: FirestoreReviewData } | undefined;

        //     if (firestoreData && firestoreData.review) {
        //         const reviewData = firestoreData.review;
        //         const date = reviewData.datePosted;

        //         reviewsArray.push({
        //             id: reviewDoc.id,
        //             review: {
        //                 datePosted: date,
        //                 reviewText: reviewData.reviewText,
        //                 name: reviewData.name,
        //             },
        //         });
        //     } else {
        //         console.warn("Review document is missing data:", reviewDoc.id, firestoreData);
        //     }
        // });

        // return NextResponse.json(reviewsArray);
        return NextResponse.json("meow")
    } catch (error: any) {
        console.error("Error fetching reviews:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await signInAnonymously(auth);
        const data = await request.json();
        const review = data.review
        await addDoc(collection(db, "reviews"), { review });
        return NextResponse.json({ message: "Review added successfully" });
    } catch (error: any) {
        console.error("Error adding review:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}