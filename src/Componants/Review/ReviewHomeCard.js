import React from 'react';
import { Link } from 'react-router-dom';

const ReviewHomeCard = ({ review }) => {
    const { customerReview, name, image, rating } = review;
    return (
        <div>
            <div className="p-5">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={image} alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base">
                            {customerReview}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span>
                            <Link to='/reviews'
                                className='inline-block bg-sky-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                See All Reviews
                            </Link>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Book Rate: {rating}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewHomeCard;