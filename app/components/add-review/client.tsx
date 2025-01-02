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
                    }),
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

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-lime-300/90 border-solid rounded m-4">
            <form onSubmit={handleSubmit} className="space-y-4 border-solid rounded">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="review" className="mb-2">Your Review</label>
                    <textarea
                        id="review"
                        name="review"
                        onChange={(e) => setReview(e.target.value)}
                        value={review}
                        rows={4}
                        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500/80 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
            {submissionMessage && (
                <div className="mt-4 text-center">{submissionMessage}</div>
            )}
        </div>
    )
}