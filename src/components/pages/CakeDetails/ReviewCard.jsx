import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import PhotoViewer from '../../shared/PhotoViewer/PhotoViewer';
import { FiUser } from 'react-icons/fi'
import { BsCalendarWeek } from 'react-icons/bs'
import { format } from 'date-fns';

const ReviewCard = ({ review }) => {

    const { user } = useContext(AuthContext)
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-10">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <PhotoViewer image={review.photoURL} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex mt-2 font-normal text-md items-center'>
                            <FiUser size={20}></FiUser>
                            <p className='ml-2'>{review?.createdBy?.name}</p>
                        </div>
                        <div className='flex mt-2 font-normal text-md items-center'>
                            <BsCalendarWeek size={20}></BsCalendarWeek>
                            <p className='ml-2'>{format(new Date(review.createdAt), "PP")}</p>
                        </div>
                    </div>
                </h2>
                <p className='text-lg mt-3'>{review.review}</p>

            </div>
        </div>
    );
};

export default ReviewCard;