import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
                <div className='flex justify-center items-center w-[100%] h-[100vh]'>
                    <h1 className='text-red-600 text-7xl'>404</h1>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;