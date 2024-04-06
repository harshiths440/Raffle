import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[35vh] banner flex flex-col items-center justify-center z-10 absolute">
      <div className="backdrop_shaders w-full"/>
      <div className="text-center py-2">
        <h1 className="text-4xl py-5 xl:text-6xl font-[700] xl:leading-[80px] sm:mt-20 font-Inter">
          Welcome!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
