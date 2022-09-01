import React from 'react';
import './Banner.css';
import bannerbg from '../../../assets/video.mp4'

const Banner = () => {
    return (
//         <div class="hero min-h-screen bg-img" >
//   <div class="hero-overlay bg-opacity-75"></div>
//   <div class="hero-content text-center md:text-start lg:text-start">
//     <div class="lg:min-w-md ">
//       <h1 class="mb-5 text-white text-5xl font-bold">Find Whatever Your Want?</h1>
//       <p class="mb-5 text-xl text-white">A shadowy flight into the dangerous world of a man who does not exist. Flying away on a wing and a prayer. Who could it be.</p>
//       <button class="btn btn-secondary">Get Started</button>
//     </div>
//   </div>
// </div>
      <div className='banner'>
        <div className="banner-overlay"></div>
        <video src={bannerbg} autoPlay loop muted/>
      <div className='banner-content'>
      <h1 className='mb-5 text-primary  text-4xl lg:text-5xl font-bold'>Find Whatever Your Want?</h1>
      <p className='text-center text-xl lg:text-2xl md:text-2xl text-white'>A shadowy flight into the dangerous world of a man who does not exist.</p>
      <p className='text-center mb-10 text-xl lg:text-2xl md:text-2xl text-white'>Flying away on a wing and a prayer. Who could it be.</p>
      <button class="btn btn-primary text-white">Get Started</button>
      </div>
      </div>
    );
};

export default Banner;