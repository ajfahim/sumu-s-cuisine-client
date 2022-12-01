import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Loading from '../components/shared/Loading/Loading';
import Nav from '../components/shared/Nav/Nav';
import { AuthContext } from '../contexts/AuthProvider';

const Main = () => {

    return (
        <div>
            <Nav></Nav>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;