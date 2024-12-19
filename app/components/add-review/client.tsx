'use client'
import { FormEvent, useState } from "react"
import { addReviewAction } from "./server"


export default function AddReview() {
    const [name, setName] = useState<string>(""); // Input text of the name field on the form. State updates when the onChange event occurs on the name input.
    const [review, setReview] = useState<string>(""); // Input text of the review field on the form. State updates when the onChange event occurs on the review input.


    // Function which takes the data in the form and passes that data to the addReviewAction server action.
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const nameData = name; // State of name input when handleSubmit is called.
            const reviewData = review; // State of review input when handleSubmit is called.
            const currentDate: Date = new Date(); // Date at the time handleSubmit is called.

            const reviewFormData = {
                name: nameData,
                reviewText: reviewData,
                datePosted: currentDate
            };

            const res = await addReviewAction(reviewFormData);

            if (res === "Success") {
                setName("");
                setReview("");
            }

        } catch (error: any) {
            console.log(error);
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