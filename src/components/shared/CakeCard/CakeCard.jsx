
import React from 'react';
import { Link } from 'react-router-dom';
import PhotoViewer from '../PhotoViewer/PhotoViewer';

const CakeCard = ({ cake }) => {

    return (
        <div>
            <div className="card card-compact sm:max-w-md min-w-[448px] bg-base-100 shadow-xl">
                <figure className='max-h-[370px] min-h-[370px]'><PhotoViewer image={cake.imageURL}></PhotoViewer></figure>
                {/* <figure><img className='min-h-16 max-h-[370px]' src={cake.imageURL} alt="Shoes" /></figure> */}
                <div className="card-body ">
                    <h2 className="card-title">{cake.title}</h2>

                    {cake.description.length > 50
                        ?
                        <p className='min-h-12'>{cake.description.slice(0, 50)}...</p>
                        :
                        <p className='min-h-12'>{cake.description}</p>
                    }
                    <div className="card-actions justify-between items-center mt-3">

                        <p className='text-accent font-black text-2xl'>৳ {cake?.price}</p>

                        <Link to={`/cake/${cake._id}`}><button className="btn btn-secondary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CakeCard;