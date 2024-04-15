import React from 'react';
import theamPartan from '../../assets/theme_pattern.svg';
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative text-center'>
                <h1 className='absolute font-semibold top-0 left-[50%] -translate-x-[50%] text-[90px] z-10'>Services</h1>
                <img className='absolute left-[50%] top-[45px] -z-1' src={theamPartan} alt="" />
            </div>
            <div className='grid grid-cols-3 gap-5 pt-[200px]'>
                <div className='border border-white p-5 rounded-lg hover:bg-red-950 hover:border-red-950 duration-300'>
                    <h3 className='text-2xl'>01</h3>
                    <h2 className='text-3xl'>Web Design</h2>
                    <p>Web design is the process of building programming...</p>
                    <a className='flex items-center gap-3 text-xl'><span>Read More</span> <FaArrowRightLong /></a>
                </div>
                <div className='border border-white p-5 rounded-lg hover:bg-red-950 hover:border-red-950 duration-300'>
                    <h3 className='text-2xl'>02</h3>
                    <h2 className='text-3xl'>Web Design</h2>
                    <p>Web design is the process of building programming...</p>
                    <a className='flex items-center gap-3 text-xl'><span>Read More</span> <FaArrowRightLong /></a>
                </div>
                <div className='border border-white p-5 rounded-lg hover:bg-red-950 hover:border-red-950 duration-300'>
                    <h3 className='text-2xl'>03</h3>
                    <h2 className='text-3xl'>Web Design</h2>
                    <p>Web design is the process of building programming...</p>
                    <a className='flex items-center gap-3 text-xl'><span>Read More</span> <FaArrowRightLong /></a>
                </div>
                <div className='border border-white p-5 rounded-lg hover:bg-red-950 hover:border-red-950 duration-300'>
                    <h3 className='text-2xl'>04</h3>
                    <h2 className='text-3xl'>Web Design</h2>
                    <p>Web design is the process of building programming...</p>
                    <a className='flex items-center gap-3 text-xl'><span>Read More</span> <FaArrowRightLong /></a>
                </div>
                <div className='border border-white p-5 rounded-lg hover:bg-red-950 hover:border-red-950 duration-300'>
                    <h3 className='text-2xl'>05</h3>
                    <h2 className='text-3xl'>Web Design</h2>
                    <p>Web design is the process of building programming...</p>
                    <a className='flex items-center gap-3 text-xl'><span>Read More</span> <FaArrowRightLong /></a>
                </div>
                <div className='border border-white p-5 rounded-lg hover:bg-red-950 hover:border-red-950 duration-300'>
                    <h3 className='text-2xl'>06</h3>
                    <h2 className='text-3xl'>Web Design</h2>
                    <p>Web design is the process of building programming...</p>
                    <a className='flex items-center gap-3 text-xl'><span>Read More</span> <FaArrowRightLong /></a>
                </div>
            </div>
        </div>
    );
};

export default Services;