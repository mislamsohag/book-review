import React from 'react';
import useReview from './../../Hooks/useReview';
import ReviewHomeCard from './ReviewHomeCard';

const ReviewHomePage = () => {
    const [reviews] = useReview();
    const reviewSclce = reviews.slice(3)
    return (
        <div>
            {reviewSclce.map(review => <ReviewHomeCard key={review.id} review={review} />
            )}
        </div>
    );
};

export default ReviewHomePage;