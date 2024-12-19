import ListReviews from "../components/list-reviews/client"
import AddReview from "../components/add-review/client"

export default function Reviews() {
    return (
        <div>
            <div className="flex flex-col justify-center">
                <ListReviews />
                <AddReview />
            </div>
        </div>
    )
}