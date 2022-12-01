import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CakeCard from '../../shared/CakeCard/CakeCard';
import Loading from '../../shared/Loading/Loading';

const AllCakes = () => {

    const getCakeData = async () => {
        const res = await axios.get("http://localhost:5000/cakes");
        return res.data
    }

    const { data: cakeData, isLoading } = useQuery({
        queryKey: ["cakes"],
        queryFn: getCakeData
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(cakeData)

    return (
        <>
            <Helmet>
                <title>Sumu's Cuisine | All Cakes</title>
            </Helmet>
            <div className='w-4/5 mx-auto'>
                <h1 className="my-10 text-primary text-2xl font-black">All Cakes</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10'>
                    {
                        cakeData.map(cake => <CakeCard key={cake._id} cake={cake}></CakeCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllCakes;