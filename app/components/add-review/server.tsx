'user server'
import { signInAnonymously } from "firebase/auth"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

// Function with parameters to add a review to firebase
const addReviewFunction = async (review: FormData) => {
    signInAnonymously(auth).then(async () => {
        const docRef = doc(collection(db, "reviews"))
        await setDoc(docRef, { review })
    }).catch((error: Error) => {
        console.log(error)
    })

}