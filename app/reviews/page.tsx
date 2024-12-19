import { FormEvent } from "react"
import AddReviewLayout from "../components/add-review/layout"

export default function Reviews({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex justify-center">
                <AddReviewLayout children={children} />
            </div>
        </div>
    )
}