import React from 'react';
// import aboutprofile from '../../assets/about_profile.svg';
import theamPartan from '../../assets/theme_pattern.svg';
const About = () => {
    return (
        <div>
            <div className='relative text-center'>
                <h1 className='absolute font-semibold top-0 left-[50%] -translate-x-[50%] text-[90px] z-10'>About Me</h1>
                <img className='absolute left-[50%] top-[45px] -z-1' src={theamPartan} alt="" />
            </div>
        </div>
    );
};

export default About;