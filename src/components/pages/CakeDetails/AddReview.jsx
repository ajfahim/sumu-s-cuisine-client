import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddReview = ({ cakeDetail }) => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const { user } = useContext(AuthContext)
    const queryClient = useQueryClient();

    const addReview = async (data) => {
        const res = await axios.post("http://localhost:5000/reviews", data);
        return res.data
    }
    const reviewMutation = useMutation({
        mutationFn: addReview,
        onSuccess: () => {
            toast.success("Review added");
            reset({ reviewDescription: "" })
            queryClient.invalidateQueries({ queryKey: ["reviews"] })
        }
    })
    const handleReviewSubmit = (data) => {
        console.log(data)
        const postData = {
            cake: cakeDetail._id,
            review: data.reviewDescription,
            photoURL: user?.photoURL,
            createdBy: {
                name: user?.displayName,
                email: user?.email
            },
            createdAt: new Date()
        }
        reviewMutation.mutate(postData);
        reviewMutation.onSuccess()
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