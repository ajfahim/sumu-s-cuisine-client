import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const addReview = () => {

    }
    const reviewMutation = useMutation({
        mutationFn: addReview
    })
    const handleReviewSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='my-5 shadow-xl p-10 rounded-xl'>
            <form onSubmit={handleSubmit(handleReviewSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="text-bold font-lg">Write your thoughts: </span>
                    </label>
                    <textarea {...register("reviewDescription", { required: "This field is required" })} className="textarea textarea-bordered h-24" placeholder=""></textarea>
                    <label className="label">
                        {errors?.reviewDescription && <span className="text-bold font-lg">{errors?.reviewDescription.message}</span>}
                    </label>
                </div>
                <button className='btn btn-accent mt-5' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;