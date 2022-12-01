import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AddReview from './AddReview';
import PleaseLogin from './PleaseLogin';
import ReviewCard from './ReviewCard';

const Reviews = ({ cakeDetail }) => {
    const { user } = useContext(AuthContext);

    const getReviewsByCakeId = async () => {
        const res = await axios.get(`http://localhost:5000/reviews/cake/${cakeDetail._id}`);
        return res.data
    }

    const { data: reviewData, isLoading } = useQuery({
        queryKey: ["reviews"],
        queryFn: getReviewsByCakeId
    })

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

            {
                reviewData?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }

            {/* <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard> */}
        </div>
    );
};

export default Reviews;