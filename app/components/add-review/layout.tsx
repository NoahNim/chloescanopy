import React from "react";
import AddReview from "./page";

export default function AddReviewLayout({
    children,
}: { children: React.ReactNode }) {

    return (
        <div>
            <AddReview />
        </div>
    )
}