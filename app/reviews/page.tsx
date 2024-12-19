import ListReviewsServer from "../components/list-reviews/server"
import AddReview from "../components/add-review/client"

export default function Reviews() {
    return (
        <div>
            <div className="flex flex-col justify-center">
                <ListReviewsServer />
                <AddReview />
            </div>
        </div>
    )
}