import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AddReview from './AddReview';
import PleaseLogin from './PleaseLogin';
import ReviewCard from './ReviewCard';

const Reviews = ({ cakeDetail }) => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h3 className="text-secondary font-black text-4xl">Reviews</h3>
            {
                user?.email
                    ?
                    <AddReview cakeDetail={cakeDetail}> </AddReview>
                    :
                    <PleaseLogin></PleaseLogin>
            }

            {/* <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard> */}
        </div>
    );
};

export default Reviews;