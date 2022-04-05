import React from 'react';
import useReview from './../../Hooks/useReview';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews] = useReview();
    // console.log(reviews);
    return (
        <div>
            {reviews.map(review => <ReviewCard key={review.id} review={review} />
            )}
        </div>
    );
};

export default Reviews;