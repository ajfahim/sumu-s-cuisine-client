import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import format from 'date-fns/format';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import PhotoViewer from '../../shared/PhotoViewer/PhotoViewer';
import Reviews from './Reviews';

const CakeDetails = () => {

    const cakeDetail = useLoaderData();
    console.log(cakeDetail);

    return (
        <>
            <Helmet>
                <title>Sumu's Cuisine | {cakeDetail.title}</title>
            </Helmet>
            <div className='w-4/5 mx-auto'>
                <div className='mb-10'>
                    <div className='h-[40vh]'>
                        <PhotoViewer image={cakeDetail.imageURL}></PhotoViewer>
                    </div>
                    <h1 className="text-primary font-black text-4xl mt-10">{cakeDetail.title}</h1>
                    <div className='flex flex-col justify-items-start mt-5'>
                        <p className='mt-2 badge badge-lg badge-outline badge-neutral'> Added By: {cakeDetail.addedBy}</p>
                        <p className='mt-2 badge badge-lg badge-outline badge-neutral'> Created At: {format(new Date(cakeDetail.createdAt), "PP")}</p>
                    </div>
                    <div className='mt-10'>
                        <p className='text-xl text-justify'>{cakeDetail.description}</p>
                    </div>
                </div>
                <Reviews cakeDetail={cakeDetail}></Reviews>
            </div>
        </>
    );
};

export default CakeDetails;