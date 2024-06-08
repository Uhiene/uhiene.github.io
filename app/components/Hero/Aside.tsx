import React from 'react';

const Aside = () => {
    return (
        <div className='w-full lg:w-1/2 text-center lg:text-start'>
            <h2 className='text-pink-500 '>Hi, my name is</h2>
            <h1 className='text-4xl md:text-6xl text-slate-500 font-semibold my-1'>Princess Uhiene</h1>
            <h3 className='text-xl md:text-3xl text-slate-400 font-semibold '>Frontend Developer & Youtuber</h3>
            <p className='text-md md:text-lg text-slate-500 font-light my-4'>
                Versatile Frontend Dev passionate about exceptional digital experiences, specializing in design, project management, tutoring, and educational YouTube content.
            </p>
            <div className='flex items-center justify-center lg:justify-start gap-6'>
                <button className="bg-pink-500 text-white p-3 rounded-lg pulse">
                    Resume
                </button>

                <button className="border-pink-500 border text-pink-500 p-3 rounded-lg pulse">
                    Projects
                </button>

            </div>
        </div>
    );
};

export default Aside;
