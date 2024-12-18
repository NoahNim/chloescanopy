import Link from "next/link"

export default function Nav() {
    return (
        <div>
            <ul className="flex flex-row">
                <li className="basis-1/4"><Link href={('/')}>Home</Link></li>
                <li className="basis-1/4">Camps</li>
                <li className="basis-1/4">Reviews</li>
            </ul>
        </div>
    )
}