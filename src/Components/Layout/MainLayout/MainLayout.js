import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';


const MainLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className='sticky top-0 z-10'>
            <Header className=""/>
            </div>
            <div style={{ flex: 1 }}>
                <Outlet className="min-h-screen" />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
