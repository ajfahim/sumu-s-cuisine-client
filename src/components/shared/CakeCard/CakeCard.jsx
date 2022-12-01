
import React from 'react';

const CakeCard = ({ cake }) => {

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={cake.imageURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cake.title}</h2>
                    <p>{cake.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CakeCard;