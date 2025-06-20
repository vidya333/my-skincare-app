import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-16 md:py-24 relative" style={{backgroundColor:"#2d3b36",height:"700px",overflow:"hidden"}}>
      <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-between 
      items-center md:text-left">
        {/* Left Section - Community */}
        <div className="w-full xl:w-1/2 lg:me-10">
          <h3 className="lg:text-6xl sm:text-5xl text-3xl mb-4 text-left">Join The Skincare <br /> Community Now.</h3>
          <div className="flex justify-between md:justify-between text-lg mt-20">
            <span className="hover:text-primary-green transition-colors duration-200 pe-7">Facebook</span>
            <span className="hover:text-primary-green transition-colors duration-200 pe-7">Instagram</span>
            <span className="hover:text-primary-green transition-colors duration-200 pe-7">YouTube</span>
          </div>
        </div>

        {/* Right Section - Contact & Legal */}
        <div className='w-full xl:w-1/2 xl:ms-auto'>
          <p className="text-3xl xl:mb-4 mt-9 xl:mt-0">Get in Touch</p>
          <span className="text-white lg:text-6xl sm:text-5xl text-3xl mb-8 block text-left">
            contact.skincare.com
          </span>
          <div className="flex justify-between lg:justify-between  text-lg mt-20">
            <span className="hover:text-primary-green transition-colors duration-200 pe-7">Terms of Service</span>
            <span className="hover:text-primary-green transition-colors duration-200 pe-7">Privacy Policy</span>
            <span className="hover:text-primary-green transition-colors duration-200 pe-7">Cookies Policy</span>
          </div>
        </div>
        {/* Bottom Text Skincare */}
        <div
            className="absolute bottom-0 left-0 right-0  -mb-20
            text-[200px] md:text-[300px] lg:text-[400px] font-bold text-gray-100 opacity-50 
            z-0 leading-none pointer-events-none"
            style={{ fontFamily: 'Inter, sans-serif',color:"#ffffff",opacity:"0.1"}} >
            SKINCARE
        </div>
      </div>
    </footer>
  );
};

export default Footer;