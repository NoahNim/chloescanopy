import React from "react";

export default function NavLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <div>
                    {children}
                </div>
            </nav>
        </div>
    )
}