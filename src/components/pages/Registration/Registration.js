import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Registration = () => {

    const { signUp, profileUpdate, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [tokenEmail, setTokenEmail] = useState('');
    const [token] = useToken(tokenEmail)

    const navigate = useNavigate();

    if (token) {
        navigate("/")
    }
    const queryClient = useQueryClient()

    const saveUserToDb = async (data) => {
        const res = await axios.post("http://localhost:5000/users", data)
        return res.data;

    }

    const userMutation = useMutation({
        mutationFn: saveUserToDb,
        onSuccess: (data, { email }) => {

            console.log("onSuccess: ", email);
            setTokenEmail(email)

            queryClient.invalidateQueries({ queryKey: ["users"] })
        }
    })


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        const handleProfileUpdate = (name, photoUrl) => {
            const profile = {
                displayName: name,
                photoURL: photoUrl,
            }
            profileUpdate(profile)
                .then(() => {

                    userMutation.mutate({ name, email, photoUrl })
                })
                .catch(error => console.log(error))
        }
        signUp(email, password)
            .then(result => {
                const user = result.user;
                setError(null)
                handleProfileUpdate(name, photoUrl)

                console.log(user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                userMutation.mutate({ name: user.displayName, email: user.email, photoUrl: user.photoURL })
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }

    return (
        <>
            <Helmet>
                <title>Sumu's Cuisine-Registration</title>
            </Helmet>
            <div className="hero my-20">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-5xl'>Registration</h2>

                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-red-500">
                                        {
                                            error && error
                                        }
                                    </span>
                                </label>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Register</button>
                            </div>
                        </form>

                        <div className=' text-center my-3'>
                            <p>OR</p>
                            <div className='flex justify-around items-center my-3'>
                                <button onClick={handleGoogleLogin} className="btn btn-outline w-full"> Register with <FcGoogle className='ml-2' ></FcGoogle></button>

                            </div>
                            <div>
                                Already have an account? <span className='text-bold text-orange-600'><Link to='/login'>Login</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Registration;