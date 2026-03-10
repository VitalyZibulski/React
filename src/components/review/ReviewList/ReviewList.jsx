export const ReviewsList = ({ reviews }) => {
    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.id}>{review.text}</li>
            ))}
        </ul>
    );
};