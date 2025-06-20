import React from 'react';
import cta from '../assets/cta.png'

const CtaSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-cream-bg overflow-hidden p-15 hidden lg:block">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
        {/* Background Image */}
        <span className='relative'>
          <img
          src={cta}
          alt="Feel Beautiful"
          className=" w-full h-full rounded-xl opacity-100"
        />
        <div className="absolute bottom-0 opacity-70 left-0 w-full h-1/2 bg-gradient-to-t from-[#2a332f] to-transparent z-10 rounded-b-xl" />
        </span>
        <div className="z-10 p-8 text-white  max-w-5xl absolute bottom-0 mb-20 pb-20">
          <h2 className="text-5xl md:text-7xl mb-8 ">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h2>
          <button className="bg-white text-dark-gray px-8 py-3 rounded-full 
          text-lg font-medium hover:bg-opacity-90 transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;