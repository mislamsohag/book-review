import React from 'react';
import useReview from './../../Hooks/useReview';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews] = useReview();
    // console.log(reviews);
    return (
        <div className='mx-auto grid justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
            {reviews.map(review => <ReviewCard key={review.id} review={review} />
            )}
        </div>
    );
};

export default Reviews;