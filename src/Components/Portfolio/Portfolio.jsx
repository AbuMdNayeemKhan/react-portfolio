import React from 'react';
import theamPartan from '../../assets/theme_pattern.svg';
const Portfolio = () => {
    return (
        <div className='container max-auto'>
            <div className='relative text-center'>
                <h1 className='absolute font-semibold top-0 left-[50%] -translate-x-[50%] text-[90px] z-10'>Portfolio</h1>
                <img className='absolute left-[50%] top-[45px] -z-1' src={theamPartan} alt="" />
            </div>
            <div className=''>
                <div className="">
                    <img src="" alt="" />
                </div>
                <div className="">
                    <img src="" alt="" />
                </div>
                <div className="">
                    <img src="" alt="" />
                </div>
                <div className="">
                    <img src="" alt="" />
                </div>
                <div className="">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;