import React from "react";

export default function ReviewsLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="max-w-screen-xl mx-auto p-2 bg-lime-50/50 w-screen object-contain border-solid rounded">
            {children}
        </div>
    )
}