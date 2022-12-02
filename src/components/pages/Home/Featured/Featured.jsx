import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import CakeCard from '../../../shared/CakeCard/CakeCard';
import Loading from '../../../shared/Loading/Loading';

const Featured = () => {

    const getCakeData = async () => {
        const res = await axios.get(`https://sumus-cuisine-server.vercel.app/cakes?limit=3`);
        return res.data
    }

    const { data: cakeData, isLoading } = useQuery({
        queryKey: ["cakes"],
        queryFn: getCakeData
    })

    return (
        <div className='my-14'>
            <div className='flex justify-between'>
                <h3 className="text-primary font-black text-3xl">Featured Cakes</h3>
                <Link to="/all-cakes" className='link link-accent text-lg'>see all</Link>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center'>
                {
                    isLoading
                        ?
                        <Loading></Loading>
                        :
                        cakeData.map(cake => <CakeCard key={cake._id} cake={cake}></CakeCard>)

                }
            </div>
        </div>
    );
};

export default Featured;