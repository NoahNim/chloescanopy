'use client'

import Link from "next/link"
import { useState } from "react"

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/camps', label: 'Camps' },
        { href: '/reviews', label: 'Reviews' },
        { href: '/swimlessons', label: 'Swim' }
    ]

    return (
        <div className="bg-lime-300/90 h-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center h-full">
                <ul className="flex flex-row space-x-40">
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className="basis-1/4">
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="flex absolute top-0 left-1 md:hidden">
                {isMenuOpen ? (
                    <ul className="transition-all duration-300 ease-in-out flex-row space-y-2 bg-lime-300/90 p-4 rounded-lg">
                        <li><button onClick={() => setIsMenuOpen(false)}>Close Menu</button></li>
                        {navLinks.map(({ href, label }) => (
                            <li key={href} className="basis-1/4">
                                <Link href={href}>
                                    <button onClick={() => setIsMenuOpen(false)}>{label}</button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>Menu</button>
                )}
            </div>
        </div>
    )
}