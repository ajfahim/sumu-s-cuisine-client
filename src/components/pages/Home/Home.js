import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Story from './Story/Story';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Helmet>
                <title>Sumu's Cuisine-Home</title>
            </Helmet>
            <Banner></Banner>
            <Story></Story>
        </div>
    );
};

export default Home;