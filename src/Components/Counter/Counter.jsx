import React from 'react';

const Counter = () => {
    return (
        <div className='flex justify-around my-9 container mx-auto'>
            <div>
                <h2 className='text-4xl font-bold text-center'>10+</h2>
                <h4 className='text-xl text-center'>Years of experience</h4>
            </div>
            <div>
                <h2 className='text-4xl font-bold text-center'>90+</h2>
                <h4 className='text-xl text-center'>Projects Completed</h4>
            </div>
            <div>
                <h2 className='text-4xl font-bold text-center'>15+</h2>
                <h4 className='text-xl text-center'>Happy Clients</h4>
            </div>
        </div>
    );
};

export default Counter;