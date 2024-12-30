/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { FormEvent, useState } from "react"

interface addRevewProps {
    fetchData: () => Promise<void>;
}


export default function AddReview({ fetchData }: addRevewProps) {
    const [name, setName] = useState<string>(""); // Input text of the name field on the form. State updates when the onChange event occurs on the name input.
    const [review, setReview] = useState<string>(""); // Input text of the review field on the form. State updates when the onChange event occurs on the review input.
    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);


    // Function which takes the data in the form and passes that data to the addReviewAction server action.
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        event.preventDefault();
        setSubmissionMessage("Submitting...");

        try {
            const reviewFormData = {
                review: {
                    name: name,
                    reviewText: review,
                    datePosted: new Date().toLocaleString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    }), // Send date as ISO string
                }
            };

            const res = await fetch(`api/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewFormData),
            });

            if (res.ok) {
                setSubmissionMessage("Review submitted successfully!");
                setName("");
                setReview("");
                fetchData();
            } else {
                const errorData = await res.json();
                setSubmissionMessage(errorData.error || "Failed to submit review");
            }
        } catch (error: any) {
            console.error("Error submitting review:", error);
            setSubmissionMessage("An error occurred during submission.");
        }
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            Name
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className="text-black" />
            Your Review
            <input type="text" name="review" onChange={(e) => setReview(e.target.value)} value={review} className="text-black" />
            <button type="submit">Submit</button>
        </form>
        {submissionMessage ? (
            <div>{submissionMessage}</div>
        ) : (null)}
    </div>
    )
}