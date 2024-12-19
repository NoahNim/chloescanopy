'use server'
import { signInAnonymously } from "firebase/auth"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

interface ReviewForm {
    name: string;
    review: string;
}

// Function with parameters to add a review to firebase
export const addReviewFunction = async (review: ReviewForm) => {
    signInAnonymously(auth).then(async () => {
        const docRef = doc(collection(db, "reviews"));
        await setDoc(docRef, { review });
        console.log(docRef)
    }).catch((error: Error) => {
        console.log(error)
    })
}