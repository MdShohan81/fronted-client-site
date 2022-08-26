import React from 'react';
import about from  '../../../assets/about.png'

const About = () => {
    return (
        <div className="py-16 mx-auto bg-white">
            <h1 className='md:text-3xl text-2xl text-center md:text-start font-bold lg:ml-32'>About <span className='text-secondary'>Car Spot</span> Dealership</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                    <h2 className='md:text-2xl text-xl text-neutral  text-center md:text-start font-semibold lg:ml-32 my-8 leading-loose'>Everything you need to build an amazing dealership automotive responsive website</h2>
                    <p className='md:text-xl text-lg text-neutral  text-center md:text-start font-medium lg:ml-32 my-8 leading-loose'>
                    Carspot is not only a hub where buyers and sellers can interact, it is also a comprehensive automotive portal with a forum dedicated to all automotive discussions, a blog that keeps the users up to date with the latest happenings in the automotive industry.
                    </p>
                </div>
                <div>
                    <img src={about} className="w-full" alt="about-img"/>
                </div>
                </div>
            </div>
    );
};

export default About;