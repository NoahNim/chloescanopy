'use client'

import Link from "next/link"
import { useState } from "react"

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    // toggle the mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="">
            <div className="flex justify-center h-16">
                <ul className="hidden md:flex flex-row space-x-80">
                    <li className="basis-1/4"><Link href={('/')}>Home</Link></li>
                    <li className="basis-1/4">Camps</li>
                    <li className="basis-1/4"><Link href={('/reviews')}>Reviews</Link></li>
                </ul>
            </div>
            <div className="flex absolute top-4 left-1">
                {isMenuOpen ? (<ul className={`transition-all duration-300 ease-in-out flex-row space-y-2`}>
                    <li className="basis-1/4"><Link href={('/')}>Home</Link></li>
                    <li className="basis-1/4">Camps</li>
                    <li className="basis-1/4">Reviews</li>
                    <li><button onClick={toggleMenu}>CloseMenu</button> </li>
                </ul>) : (
                    <button className="md:hidden" onClick={toggleMenu}>Menu</button>
                )}

            </div>
        </div>
    )
}