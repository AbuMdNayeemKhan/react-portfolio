import React from 'react';
import aboutProfile from '../../assets/about_profile.svg';
import theamPartan from '../../assets/theme_pattern.svg';
const About = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative text-center'>
                <h1 className='absolute font-semibold top-0 left-[50%] -translate-x-[50%] text-[90px] z-10'>About Me</h1>
                <img className='absolute left-[50%] top-[45px] -z-1' src={theamPartan} alt="" />
            </div>
            <div className='flex pt-[200px] gap-10 items-center'>
                <div className='min-w-[30%]'>
                    <img src={aboutProfile} alt="" />
                </div>
                <div>
                    <p className='mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore error rem praesentium enim voluptatibus sequi molestias ullam ratione officiis nobis? Molestias velit sunt doloribus ducimus ea laudantium et incidunt obcaecati, suscipit assumenda, nostrum sed itaque rem voluptatibus blanditiis enim! Eveniet?</p>
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus sed consequatur, vel ullam at maiores amet rem quaerat explicabo sit rerum ratione architecto animi officia a dignissimos voluptate. Maiores.</p>
                    <div className='mt-7'>
                        <div className='flex items-center mb-3'>
                            <p className='min-w-[150px]'>HTML & CSS</p><hr className='w-[50%] outline-0 border-0 h-2 bg-green-500 rounded-full' />
                        </div>
                        <div className='flex items-center mb-3'>
                            <p className='min-w-[150px]'>React JS</p><hr className='w-[70%] outline-0 border-0 h-2 bg-green-500 rounded-full' />
                        </div>
                        <div className='flex items-center mb-3'>
                            <p className='min-w-[150px]'>JavaScript</p><hr className='w-[90%] outline-0 border-0 h-2 bg-green-500 rounded-full' />
                        </div>
                        <div className='flex items-center mb-3'>
                            <p className='min-w-[150px]'>Next JS</p><hr className='w-[40%] outline-0 border-0 h-2 bg-green-500 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;