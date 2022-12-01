import React from 'react';
import AddReview from './AddReview';
import ReviewCard from './ReviewCard';

const Reviews = ({ cakeDetail }) => {
    return (
        <div>
            <h3 className="text-secondary font-black text-4xl">Reviews</h3>
            <AddReview> </AddReview>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;