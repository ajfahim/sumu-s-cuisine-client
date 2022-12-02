import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

import DeleteModal from './DeleteModal';
import EditModal from './EditModal';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState('');

    const getMyReviews = async () => {
        const res = await axios.get(`https://sumus-cuisine-server.vercel.app/reviews/user/${user?.email}`);
        return res.data
    }
    const { data: myReview, } = useQuery({
        queryKey: ["reviews"],
        queryFn: getMyReviews
    })



    return (
        <>
            <div className='w-4/5 mx-auto'>
                <h1 className="text-primary font-black text-4xl my-10">My Reviews </h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead className='text-center'>
                            <tr>
                                <th></th>
                                <th>Cake</th>
                                <th>Review</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                myReview?.map((review, index) => <tr key={review._id}>
                                    <th>{index + 1}</th>
                                    <td>{review.cake}</td>
                                    <td>{review.review}</td>
                                    <td>
                                        <>
                                            <label onClick={() => setReview(review)} htmlFor='edit-modal' className="btn btn-warning btn-xs ml-2">edit</label>
                                            <label onClick={() => setReview(review)} htmlFor='delete-modal' className="btn btn-error btn-xs ml-2">delete</label>

                                        </>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            <DeleteModal review={review}></DeleteModal>
            <EditModal review={review}></EditModal>
        </>
    );
};

export default MyReviews;