import React from "react";

export default function CampsLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            {children}
        </div>
    )
}