import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const DeleteModal = ({ review }) => {


    const deleteReview = async (data) => {
        const res = await axios.delete(`https://sumus-cuisine-server.vercel.app/reviews/${data._id}`)
        return res.data
    }
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: deleteReview,
        onSuccess: () => {
            toast.success(`deleted successfully`)
            queryClient.invalidateQueries({ queryKey: ["reviews"] })
        },
        onError: () => {
            toast.error("something went wrong")
        }

    })

    const handleDelete = () => {
        mutation.mutate(review)
    }
    return (
        <div>

            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg">Are you sure you want to delete this review ?</h3>
                    <div className="flex justify-end mt-5">
                        <label htmlFor="delete-modal" onClick={handleDelete} className='btn btn-error'>Yes</label>

                        <label htmlFor="delete-modal" className="ml-2 btn btn-primary">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;