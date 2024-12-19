'use client'
import { FormEvent, useState } from "react"
import { addReviewFunction } from "./server"


export default function AddReview() {
    const [name, setName] = useState<string>("");
    const [review, setReview] = useState<string>("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const nameData = name;
            const reviewData = review;
            let currentDate: Date = new Date();

            const reviewFormData = {
                name: nameData,
                review: reviewData,
                datePosted: currentDate
            }
            await addReviewFunction(reviewFormData)
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            Name
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className="text-black" />
            Your Review
            <input type="text" name="review" onChange={(e) => setReview(e.target.value)} value={review} className="text-black" />
            <button type="submit">Submit</button>
        </form>
    )
}