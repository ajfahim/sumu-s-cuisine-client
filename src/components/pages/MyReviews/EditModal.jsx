import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const EditModal = ({ review }) => {

    const queryClient = useQueryClient();
    const updateReview = async (data) => {
        const res = await axios.put(`https://sumus-cuisine-server.vercel.app/reviews/${review._id}`, data);
        return res.data
    }

    const updateReviewMutatios = useMutation({
        mutationFn: updateReview,
        onSuccess: () => {
            toast.success("Updated Successfully");

            queryClient.invalidateQueries({ queryKey: ["reviews"] })
        },
        onError: () => {
            toast.error("Something went wrong")
        }
    })
    const handleEditReview = (event) => {
        event.preventDefault();
        const review = event.target.review.value
        updateReviewMutatios.mutate({ review });
        event.target.reset()
    }

    return (
        <div>
            <div>

                <input type="checkbox" id="edit-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg mb-3">Edit Review</h3>
                        <form onSubmit={handleEditReview}>
                            <textarea defaultValue={review.review} name="review" className="textarea textarea-bordered w-full" placeholder=""></textarea>
                            <label htmlFor="edit-modal" className="ml-2 btn btn-primary"><button type="submit">Submit</button></label>
                        </form>

                        <div className="flex justify-end mt-5">

                            <label htmlFor="edit-modal" className=' ml-2 btn btn-error'>Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;