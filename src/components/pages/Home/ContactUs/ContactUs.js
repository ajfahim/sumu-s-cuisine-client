import React from 'react';

const ContactUs = () => {
    return (
        <div className='text-center mt-10'>
            <h3 className="c-font text-error font-bold text-6xl">Open to Suggestion</h3>
            <div className="divider w-1/2 mx-auto text-3xl">✨</div>
            <p className="text-xl w-1/2 mx-auto text-gray-400">Hey! Your review matters to me, I am open to suggestion. Please share your thoughts on how I can improve my service.</p>
            <form className='grid grid-cols-2 gap-5 mt-10 w-1/2 mx-auto'>
                <input type="text" placeholder="First Name" className="input input-bordered w-full " />
                <input type="text" placeholder="Last Name" className="input input-bordered w-full " />
                <input type="text" placeholder="Email" className="input input-bordered w-full " />
                <input type="text" placeholder="Phone" className="input input-bordered w-full " />
                <textarea className="textarea textarea-bordered col-span-2 h-36" placeholder="Message"></textarea>
                <button className="btn btn-outline btn-error col-span-2">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;