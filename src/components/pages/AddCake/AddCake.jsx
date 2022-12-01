import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { imageUploader } from '../../../utils/ImageUploader';

const AddCake = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const addRacipeToDB = async (data) => {
        const res = await axios.post("http://localhost:5000/cakes", data);
        return res.data
    }

    const racipeMutation = useMutation({
        mutationFn: addRacipeToDB,
        onSuccess: () => {
            toast.success("New racipe added successfully");
            navigate("/all-cakes")
            queryClient.invalidateQueries({ queryKey: ["cakes"] })
        }
    })

    const handleRacipeSubmit = async (data) => {
        const image = data.productImg[0]
        const imageURL = await imageUploader(image);
        const racipeData = {
            title: data.title,
            description: data.description,
            imageURL,
            price: data.price,
            addedBy: user?.email,
            createdAt: new Date(),
        }

        racipeMutation.mutate(racipeData)

        console.log(data)
    }
    return (


        <>
            <Helmet>
                <title>Sumu's Cuisine | Add a new Cakes</title>
            </Helmet>
            <div className='w-4/5 mx-auto my-10'>
                <h3 className="text-primary text-3xl text-center font-black">Add a new Racipe</h3>

                <div className='max-w-lg mx-auto shadow-xl p-10 rounded-2xl'>
                    <form onSubmit={handleSubmit(handleRacipeSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" {...register("title", { required: "Title is Required", })} name='title' className="input input-bordered" />
                        </div>
                        <label className="label">
                            <span className="label-text text-red-500">
                                {
                                    errors.title && errors.title?.message
                                }
                            </span>
                        </label>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register("price", { required: "Title is Required", })} name='price' className="input input-bordered" />
                        </div>
                        <label className="label">
                            <span className="label-text text-red-500">
                                {
                                    errors.price && errors.price?.message
                                }
                            </span>
                        </label>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register("description", { required: "Description is Required", })} name='description' className="h-32 textarea textarea-bordered" />
                        </div>
                        <label className="label">
                            <span className="label-text text-red-500">
                                {
                                    errors.description && errors.description?.message
                                }
                            </span>
                        </label>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input required type="file" {...register("productImg")} placeholder="Product Image" name='productImg' className="file-input file-input-bordered " />

                        </div>

                        <div className="form-control mt-10">
                            <button className="btn btn-accent">Add Cake</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default AddCake;