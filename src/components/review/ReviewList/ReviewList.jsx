export const ReviewsList = ({ reviews }) => {
    if (!reviews || !reviews.length) {
        return <p>No reviews</p>;
    }

    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.id}>{review.text}</li>
            ))}
        </ul>
    );
};