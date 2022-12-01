import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner ">
            <div className='lg:w-1/2 w-full flex flex-col items-center justify-center h-96 p-6'>
                <h3 className="text-3xl lg:text-7xl font-bold text-yellow-400 uppercase c-font-h3">Delight</h3>
                <p className='mt-5 text-2xl lg:text-3xl text-center c-font'>It's alwyas good time for cakes. Made with care and prepared with love, our cakes are all you might need to make everyday special.<br /> <span className='text-secondary font-bold'>Find your Favorite one now!!</span></p>
                <Link to="/all-cakes"> <button className="btn btn-outline btn-warning mt-10">View ALL of My Cakes</button>f</Link>
            </div>
        </div>
    );
};

export default Banner;