import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [loginEmail, setLoginEmail] = useState('')
    const [token] = useToken(loginEmail)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }
    const handleLogin = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError(null)
                console.log(user);
                form.reset();
                setLoginEmail(email)
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError(null);
                setLoginEmail(user.email)
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }

    return (
        <>
            <Helmet>
                <title>Sumu's Cuisine | Login</title>
            </Helmet>
            <div className="hero my-20">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-5xl'>Login</h2>

                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
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
                                <button className="btn btn-error">Login</button>
                            </div>
                        </form>

                        <div className=' text-center my-3'>
                            <p>OR</p>
                            <div className='flex justify-around items-center my-3'>
                                <button onClick={handleGoogleLogin} className="btn btn-outline w-full"> Login with <FcGoogle className='ml-2' ></FcGoogle></button>

                            </div>
                            <div>
                                New to this site? <span className='text-bold text-orange-600'><Link to='/register'>Register</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;