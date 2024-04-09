import React from 'react';
import herocover from '../../assets/profile_img.svg';

const Hero = () => {
    return (
        <div className='text-center my-20'>
            <img className='mx-auto' src={herocover} alt="" />
            <h1 className='text-4xl mt-5'>I'm Nayeem. Front End Developer. Based on bangladesh.</h1>
            <p className='mt-4'>I'm a front end developer from Dhaka, Bangladesh. I have 4 years of experiance in multiple company like Palla, Utronic and TeamExio</p>
            <div className='flex justify-center gap-5 mt-7'>
                <a className='bg-[red] py-3 px-5 rounded-lg' href="">Contact with me</a>
                <a className='bg-[red] py-3 px-5 rounded-lg' href="">My Resume</a>
            </div>
        </div>
    );
};

export default Hero;