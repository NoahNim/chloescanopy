'use server'
import { signInAnonymously } from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

// This interface tells the addReviewFunction what property types data from the form must have.
interface ReviewForm {
    name: string;
    review: string;
    datePosted: Date;
}

// Function with parameters to add a review to firebase
export async function addReviewAction(review: ReviewForm): Promise<string> {
    try {
        // The signInAnonmtously firebase method allows for a non-logged in user to write data to the firestore database.
        signInAnonymously(auth)
        try {
            // docRef variable is a reference to the reviews collection in the firestore, if it does not exist yet the setDoc function will create it
            const docRef = doc(collection(db, "reviews"));
            // If the collection "reviews" in the firestore exists then review is added to the reviews collection, and if the reviews collection does not exist then the reviews collection is created.
            await setDoc(docRef, { review });
            return "Success";
        } catch (error: any) {
            console.log(error)
            return `Error: ${error}`
        }
    } catch (error: any) {
        console.log(error)
        return `Error: ${error}`
    }
}