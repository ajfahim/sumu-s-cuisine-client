import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/sumu.jpg'
import { FcBusinessman } from "react-icons/fc";
import { AuthContext } from '../../../contexts/AuthProvider';


const Nav = () => {

    const { logOut, user } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                    <li><Link to='/add-racipe'>Add Racipe</Link></li>
                    <li><Link onClick={handleLogOut}>Logout</Link></li>
                </> :
                <li><Link to='/login'>Login</Link></li>

        }


    </>
    return (
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'><img src={logo} className="h-14 w-14 rounded-full" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            {
                                user?.photoURL ?
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                    :
                                    <FcBusinessman size={50}></FcBusinessman>
                            }
                        </>
                        :
                        <FcBusinessman size={50}></FcBusinessman>
                }
            </div>
        </div>
    );
};

export default Nav;