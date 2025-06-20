import React from 'react';
import girlImage from '../assets/herosection(1).png'
import plumImage from '../assets/herosection(2).png'

const HeroSection = () => {
  return (
    <>
    <section className='hidden xl:block'>
      <section className="relative flex items-center justify-center overflow-hidden" 
      style={{backgroundColor:"#eff5e1",minHeight:"900px"}}>
        <div>
          {/* "Transform your skincare routine..." text - Top Left */}
          <div className="absolute top-10 left-10 p-4 z-30" 
          style={{ width: '370px', height: '87px' }}>
            <p className="text-dark-gray text-2xl text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Transform your skincare routine with premium 
              products that restore , protect , and enhance 
              your natural glow every day
            </p>
          </div>

          {/* "GLOW NATURALLY" text - Top Center */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-start z-30">
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight " style={{color:"#2d3b36"}}>
              GLOW <br /> NATUR-<br /> ALLY
            </h1>
          </div>

          <div className='absolute top-100 left-0 ms-20'>
            <button className=" text-white bg-dark-gray px-9 py-3 border border-dark-gray rounded-full text-xl 
            hover:bg-gary-500 hover:text-dark-gray hover:bg-white transition-all duration-200">
                  Shop Now
                </button>
          </div>

          {/* Plum Image - Top Right */}
          <img
            src={plumImage}
            alt="Skincare Product"
            className="w-40 md:w-48 absolute top-10 right-10 transform z-30 shadow-lg rounded-lg"
            style={{width:"222.61px",height:"220px"}}
          />

          {/* Girl Image - Center Bottom */}
          <div className="absolute top-100 left-1/2 transform -translate-x-1/2 flex justify-center z-40 -mt-10 ">
            <img
              src={girlImage}
              alt="Woman with face mask"
              className="rounded-lg shadow-xl"
              style={{width:"420px", height:"496px"}}
            />
            {/* Overlapping text for the girl image */}
            <div className="absolute bottom-5 bg-white p-1 items-center rounded-full shadow-lg max-w-xs text-start 
            text-dark-gray text-sm z-30 flex">
              <img src={plumImage} alt="plum" className='rounded-full h-16 w-16 p-1' 
              style={{border:"dotted 2px gray"}} />
            <span className='ps-3'> While giving you an invigorating cleansing experience</span>
            </div>
          </div>
          {/* Big font skincare */}
          <div
            className="absolute bottom-0 left-0 right-0 text-center text-[200px] md:text-[300px] lg:text-[400px] font-bold z-0 leading-none pointer-events-none"
            style={{ fontFamily: 'Inter, sans-serif',color:"#2d3b36",marginLeft:"-30px",marginBottom:"-65px" }} 
          >
            SKINCARE
          </div>
        </div>    
      </section>
    </section>

    <section className='sm:block xl:hidden hidden'>
       <section
      className=" overflow-hidden relative w-full min-h-screen flex 
      flex-col justify-between items-center bg-[#eff5e1]  py-10  md:py-16"
    >
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-20 mb-10 md:mb-0">
        {/* Left Text */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-dark-gray text-lg md:text-3xl leading-relaxed max-w-md text-justify px-10">
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex p-4">
          <img
            src={plumImage}
            alt="Skincare Product"
            className="w-full h-auto rounded-sm shadow-lg"
          />
        </div>

        {/* Glow Text Overlapping Centered */}
       <h1
        className="w-full absolute font-bold text-[#2d3b36] leading-none top-1/2 left-1/2 -ms-5
             transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none text-center"
              style={{
                fontSize: '18vw',            
                whiteSpace: 'nowrap',        
                marginTop: '300px',           
              }}
            >
              GLOWWWWWW <br /> NATURALLY
            </h1>

      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-20" style={{marginTop:"300px"}}>
        {/* Girl Image + Tag */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mb-10 md:mb-0 p-5">
         <div className='relative w-full border border-dark-gray'>
           <img
            src={girlImage}
            alt="Woman with face mask"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          {/* Tag on Image */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
           bg-white px-3 py-2 rounded-full shadow-lg 
          flex items-center text-sm mt-4" style={{width:"80%"}}>
            <img
              src={plumImage}
              alt="plum"
              className="rounded-full h-12 w-12 p-1"
              style={{ border: '2px dotted gray' }}
            />
            <span className="pl-3 text-dark-gray w-full">
              While giving you an invigorating <br /> cleansing experience
            </span>
          </div>
         </div>
        </div>

        {/* Shop Now Button */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <button className="text-white bg-dark-gray px-9 py-3 border border-dark-gray rounded-full text-xl hover:bg-white hover:text-dark-gray transition-all duration-200">
            Shop Now
          </button>
        </div>
      </div>

      {/* Background SKINCARE text */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-[200px] lg:text-[250px] font-bold z-0 text-[#2d3b36] opacity-10 leading-none pointer-events-none">
        SKINCARE
      </div>
    </section>
    </section>

    <section className='block sm:hidden bg-[#eff5e1]  py-6 relative overflow-hidden'>
       {/* GLOWWW NATURALLY - Big Heading */}
      <h1 className="text-[100px] font-extrabold text-[#2d3b36] leading-none text-left w-full -ms-5">
        GLOWWWWWW <br /> NATURALLY
      </h1>

      {/* Transform Your Skincare Paragraph */}
      <p className="mt-5 text-dark-gray text-2xl leading-relaxed text-justify px-10">
        Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
      </p>

      <div className="relative w-full mt-8">
          {/* SKINCARE Big Background Text - behind both images */}
            <h1 className="absolute mt-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-[125px] font-extrabold text-[#2d3b36] opacity-90 text-center leading-none z-0 pointer-events-none">
              SKINCARE
            </h1>

              {/* Girl Image */}
              <div className='relative'>
              <img
                src={girlImage}
                alt="Girl"
                className="w-full h-auto relative z-10 shadow-lg"
              />
              {/* Tag on Image - Bottom Center */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20
                  bg-white px-2 py-2 rounded-full shadow-md flex items-center max-w-xs text-sm">
                  <img
                    src={plumImage}
                    alt="Plum"
                    className="rounded-full h-10 w-10 p-1"
                    style={{ border: '2px dotted gray' }}
                  />
                  <span className="pl-3 text-dark-gray">
                    While giving you an invigorating cleansing experience
                  </span>
                </div>
              </div>
            

              {/* Plum Image */}
              <img
                src={plumImage}
                alt="Plum Product"
                className="w-full h-auto relative z-10 shadow-md mt-20"
              />
            </div>


      {/* Shop Now Button */}
      <div className="w-full mt-6 flex justify-center">
        <button className="text-white bg-dark-gray px-9 py-3 border border-dark-gray rounded-full text-lg hover:bg-white hover:text-dark-gray transition-all duration-200">
          Shop Now
        </button>
      </div>
    </section>
    </>
  );
};

export default HeroSection;