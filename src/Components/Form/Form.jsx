import React from 'react';
import theamPartan from '../../assets/theme_pattern.svg';
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Form = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative text-center'>
                <h1 className='absolute font-semibold top-0 left-[50%] -translate-x-[50%] text-[90px] z-10'>Get in touch</h1>
                <img className='absolute left-[50%] top-[45px] -z-1' src={theamPartan} alt="" />
            </div>
            <div className='flex  pt-[200px]'>
                <div className='w-full'>
                    <h2 className='text-4xl font-bold mb-3'>Let's Talk</h2>
                    <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum ex hic dolorum accusamus. Numquam atque, deleniti quod modi laboriosam ipsum nam libero sit iste, voluptates quos id corporis repellat?</p>
                    <ul className='mt-5 space-y-3'>
                        <li className='flex text-xl gap-3 items-center'><MdEmail /> <span>abumdnayeemkhan@gmail.com</span></li>
                        <li className='flex text-xl gap-3 items-center'><FaSquarePhone /> <span>01619981998</span></li>
                        <li className='flex text-xl gap-3 items-center'><FaLocationDot /> <span>Mirpur, Dhaka</span></li>
                    </ul>
                </div>
                <div className='w-full'>
                    <form action="">
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Your Name</label>
                            <input className='bg-gray-800 p-3 focus:outline-none' type="text" placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col gap-2 mt-5'>
                            <label htmlFor="">Your Email</label>
                            <input className='bg-gray-800 p-3 focus:outline-none' type="text" placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col gap-2 mt-5'>
                            <label htmlFor="">Your Message</label>
                            <textarea className='bg-gray-800 p-3 focus:outline-none min-h-36' name="text" placeholder='Your Message'></textarea>
                        </div>
                        <button className='bg-red-600 px-5 py-3 rounded-full mt-5'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;