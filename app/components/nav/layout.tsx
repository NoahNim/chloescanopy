import React from "react";

export default function NavLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="max-w-screen-xl mx-auto p-4">
                {children}
            </nav>
        </div>
    )
}