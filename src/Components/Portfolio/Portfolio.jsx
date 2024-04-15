import React from 'react';
import theamPartan from '../../assets/theme_pattern.svg';
import myWork from "../../../public/myWorks";
const Portfolio = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative text-center'>
                <h1 className='absolute font-semibold top-0 left-[50%] -translate-x-[50%] text-[90px] z-10'>Portfolio</h1>
                <img className='absolute left-[50%] top-[45px] -z-1' src={theamPartan} alt="" />
            </div>
            <div className='container grid grid-cols-3 pt-[200px] mx-auto gap-5'>
                {myWork.map((work, index)=>{
                    return <img key={index} src={work.wImg} alt="" />
                })}
            </div>
            <div className='text-center mt-5'>
                <a href="" className='hover:text-red-600 duration-300'>Show More</a>
            </div>
        </div>
    );
};

export default Portfolio;