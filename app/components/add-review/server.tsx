'use server'
import { signInAnonymously } from "firebase/auth"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

interface ReviewForm {
    name: string;
    review: string;
    datePosted: Date;
}

// Function with parameters to add a review to firebase
export const addReviewFunction = async (review: ReviewForm) => {
    try {
        signInAnonymously(auth).then(async () => {
            const docRef = doc(collection(db, "reviews"));
            await setDoc(docRef, { review })
        })
    } catch (error: any) {
        console.log(error)
    }
}