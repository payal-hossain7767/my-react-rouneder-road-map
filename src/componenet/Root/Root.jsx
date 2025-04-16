import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBer from '../SideBer/SideBer';
import './root.css'
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='hlw'>
                <SideBer></SideBer>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;