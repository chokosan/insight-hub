import React from 'react';
import hero from '../assets/hoomie.jpg';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between py-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Welcome to Insight Hub
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl lg:text-2xl">
              Explore amazing stories, insights, and ideas from our vibrant community.
            </p>
          </div>
         
          {/* Hero Image */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <img 
              className="w-full max-w-lg bg-transparent" 
              src={hero} 
              alt="Blog Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

