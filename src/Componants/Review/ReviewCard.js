import React from 'react';

const ReviewCard = ({ review }) => {
    const { customerReview, name, country, image, rating } = review;
    return (
        <div>
            <img src={image} alt="" />
            <h3 className='text-3xl font-serif text-sky-400'>{name}</h3>
            <p>Review: {customerReview} </p>
            <p>Country Name: </p>
            <p>Rating : </p>


        </div>
    );
};

export default ReviewCard;