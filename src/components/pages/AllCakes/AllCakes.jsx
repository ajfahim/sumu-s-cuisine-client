import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
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
        <div className='w-4/5 mx-auto'>
            <h1 className="my-10 text-primary text-2xl font-black">All Cakes</h1>
            {
                cakeData.map(cake => <CakeCard key={cake._id} cake={cake}></CakeCard>)
            }
        </div>
    );
};

export default AllCakes;