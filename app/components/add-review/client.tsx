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
            const reviewFormData = {
                name: nameData,
                review: reviewData
            }

            const res = await addReviewFunction(reviewFormData)

            console.log(res)
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            Name
            <input type="text" name="name" onChange={() => setName} />
            Your Review
            <input type="text" name="review" onChange={() => setReview} />
            <button type="submit">Submit</button>
        </form>
    )
}