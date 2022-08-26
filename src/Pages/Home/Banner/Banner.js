import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-img" >
  <div class="hero-overlay bg-opacity-75"></div>
  <div class="hero-content text-center md:text-start lg:text-start">
    <div class="lg:min-w-md ">
      <h1 class="mb-5 text-white text-5xl font-bold">Find Whatever Your Want?</h1>
      <p class="mb-5 text-xl text-white">A shadowy flight into the dangerous world of a man who does not exist. Flying away on a wing and a prayer. Who could it be.</p>
      <button class="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;