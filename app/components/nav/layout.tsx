import React from "react";

export default function NavLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}