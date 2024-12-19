import React from "react";
import { signInAnonymously } from "firebase/auth"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import AddReview from "./page";

export default function AddReviewLayout({
    children,
}: { children: React.ReactNode }) {


    // Function with parameters to add a review to firebase
    const addReviewFunction = async (review: any) => {
        signInAnonymously(auth).then(async () => {
            const docRef = doc(collection(db, "reviews"))
            await setDoc(docRef, { review })
        }).catch((error: Error) => {
            console.log(error)
        })

    }

    return (
        <div>
            <AddReview />
        </div>
    )
}