import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import PhotoViewer from '../../shared/PhotoViewer/PhotoViewer';
import { FiUser } from 'react-icons/fi'
import { BsCalendarWeek } from 'react-icons/bs'

const ReviewCard = ({ review }) => {

    const { user } = useContext(AuthContext)
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-10">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <PhotoViewer image={user.photoURL} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex mt-2 font-normal text-md items-center'>
                            <FiUser size={20}></FiUser>
                            <p className='ml-2'>Fahim</p>
                        </div>
                        <div className='flex mt-2 font-normal text-md items-center'>
                            <BsCalendarWeek size={20}></BsCalendarWeek>
                            <p className='ml-2'>20 Nov 2022</p>
                        </div>
                    </div>
                </h2>
                <p className='text-lg'>t's alwyas good time for cakes. Made with care and prepared with love, our cakes are all you might need to make everyday special.
                    Find your Favorite one now!! t's alwyas good time for cakes. Made with care and prepared with love, our cakes are all you might need to make everyday special.
                    Find your Favorite one now!!</p>

            </div>
        </div>
    );
};

export default ReviewCard;