import React from 'react';
import { Link } from 'react-router-dom';

const PleaseLogin = () => {
    return (
        <div className='flex justify-center items-center p-10 rounded-xl shadow-xl my-10'>
            <p className='text-xl'>Please <Link to="/login" className='link link-secondary'>Login</Link> to add your thoughts...</p>
        </div>
    );
};

export default PleaseLogin;