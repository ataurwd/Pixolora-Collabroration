import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;