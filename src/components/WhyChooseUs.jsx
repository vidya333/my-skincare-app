import React from 'react';
import whyUs from '../assets/whyus.png'
import plumImage from '../assets/blackdot.png'
import lock from '../assets/fullLock.png'
import dot from '../assets/blackdot.png'

const WhyChooseUs = () => {
  const features = [
    {
      number: '01',
      title: 'Bio Ingredients',
      description: 'Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.',
    },
    {
      number: '02',
      title: 'Everything Natural',
      description: 'Pure ingredients for pure skin. The perfect solution for your skin care needs.',
    },
    {
      number: '03',
      title: 'All Handmade',
      description: 'Made with love and care. Just for you. Give your skin the tender loving care it deserves.',
    },
  ];

  return (
    <section className="bg-cream-bg py-16 md:py-24">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center md:px-2">
        {/* Left Content */}
        <div className="xl:w-1/2 w-full md:pr-12 text-start px-4 md:text-left mb-10 md:mb-0 mx-auto">
          <button className="mb-10 text-dark-gray text-xl font-medium py-4 px-5
           md:mb-2 bg-dark border-2 border-dark-gray rounded-full flex">
           <img src={dot} alt="dor" className='w-4 h-4 mt-1 me-4' />
           <span>Why Our Products</span>
          </button>
          <h2 className="mb-10 text-4xl md:text-6xl lg:text-7xl text-dark-gray my-5 " style={{color:"#2d3b36"}}>
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h2>
          <p className='mb-10 text-gray-600 text-2xl my-5'>
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Explore our rage crafted with love backed
            by science, and inspired by nature
          </p>
          <div className="space-y-8 mt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start md:items-top space-x-4 mt-4 ">
                <span className="text-3xl md:text-4xl lg:text-5xl text-primary-green mx-3 relative" style={{color:"#2d3b36"}}>{feature.number}
                <div className="absolute bottom-1 left-0 w-full h-1/2 bg-gradient-to-t from-[#fdfdf4] to-transparent pointer-events-none" />
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl text-dark-gray mb-1" style={{color:"#2d3b36"}}>{feature.title}</h3>
                  <p className="text-gray-600 text-2xl mt-5" >{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="xl:w-1/2 w-full flex justify-center relative my-5 xl:my-0">
          <div>
          <img
            src={whyUs}
            alt="Woman with eye masks"
            className="w-full max-w-xl h-auto md:rounded-lg shadow-lg"
          />
          <span className='flex justify-between'>
            <span className='uppercase my-4 text-xl'>SINCE 2001</span>
            <span className='uppercase my-4 text-xl'>Learn More</span>
          </span>
          </div>
          <div className="absolute bottom-20 bg-white p-1 pe-3 items-center rounded-full shadow-lg max-w-md 
          text-start text-dark-gray text-sm z-10 flex">
              <span className='relative'>
                <img src={plumImage} alt="plum" className='rounded-full h-16 w-16 p-1 z-1' 
               style={{border:"dotted 2px gray"}} />
              <img src={lock} alt="star" className='h-10 w-10 absolute left-0 bottom-0 m-3 z-50'/>
             
              </span>
              <span className='mx-2 text-lg'> Best Skin Care Product <br />Award Wining</span>  
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;