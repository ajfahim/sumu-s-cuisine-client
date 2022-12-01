import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Loading from '../components/shared/Loading/Loading';
import Nav from '../components/shared/Nav/Nav';
import { AuthContext } from '../contexts/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className='mt-[30vh]'>
            <Loading></Loading>
        </div>
    }
    return (
        <div>
            <Nav></Nav>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;