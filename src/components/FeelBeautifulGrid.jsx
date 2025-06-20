import React, { useRef } from 'react'
import pinkCream from '../assets/pink.png'
import blackCream from '../assets/black.png'
import whiteCream from '../assets/white.png'
import trolly from '../assets/trolly.png'
import cartLight from '../assets/cartLight.png'
import arrowlight from '../assets/arrowlight.png'
import arrowdark from '../assets/arrowdark.png'

const products = [
  {
    id: 1,
    name: 'ALYA SKIN CLEANSER',
    price: 'FROM $29.99',
    image: pinkCream,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'RITUAL OF SAKURA',
    price: 'FROM $35.00',
    image: blackCream,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'THE BODY LOTION',
    price: 'FROM $22.50',
    image: whiteCream,
    rating: 4.2,
  },
];

function FeelBeautifulGrid() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = carouselRef.current.offsetWidth * 0.8;
    carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-start xl:text-center items-center mb-12 ">
          <h2 className="sm:text-4xl md:text-5xl text-4xl text-dark-gray mb-4 md:mb-0 w-full md:w-auto">
            Feel Beautiful Inside and Out <br />with Every Product.
          </h2>
          <div className="flex flex-wrap gap-3 xl:justify-center justify-center my-10 px-4">
              {['NEW ARRIVAL', 'CLEANSING', 'ACNE FIGHTER', 'ANTI AGING'].map((tag, idx) => (
              <button
                key={idx}
                className="text-dark-gray px-5 py-2 text-base md:px-6 md:py-3 md:text-xl 
                            border border-dark-gray rounded-full 
                            hover:bg-dark-gray hover:text-white transition-all duration-200"
              >
                {tag}
              </button>
              ))}
           </div>

        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-light-bg rounded-lg shadow-md overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
              <div className="bg-white flex justify-between absolute bottom-0 left-0 right-0 border z-20 m-4 rounded-xl p-5" style={{ height: "100px" }}>
                <div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">{product.name}</h3>
                  <p className="text-primary-green text-lg mb-4">{product.price}</p>
                </div>
                <div className="flex items-center z-20">
                  <button className="relative group bg-dark-gray bg-opacity-30 rounded-xl w-14 h-14 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
                    <img src={trolly} alt="trolly" className="w-6 h-6 group-hover:hidden" />
                    <img src={cartLight} alt="cartLight" className="w-6 h-6 absolute group-hover:block hidden" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth px-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[80%] snap-start bg-light-bg rounded-lg shadow-md overflow-hidden relative"
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
                <div className="bg-white flex justify-between absolute bottom-0 left-0 right-0 border z-20 m-4 rounded-xl p-5" style={{ height: "100px" }}>
                  <div>
                    <h3 className="text-sm font-semibold text-dark-gray mb-2">{product.name}</h3>
                    <p className="text-primary-green text-sm mb-4">{product.price}</p>
                  </div>
                  <div className="flex items-center z-20">
                    <button className="relative group bg-dark-gray bg-opacity-30 rounded-xl w-14 h-14 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
                      <img src={trolly} alt="trolly" className="w-6 h-6 group-hover:hidden" />
                      <img src={cartLight} alt="cartLight" className="w-6 h-6 absolute group-hover:block hidden" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <span className='w-full xl:w-auto block my-10 xl:hidden'>
            <div className="justify-center flex space-x-7 ">
              <button className="bg-white text-white p-10 border-dark-gray border rounded-full hover:bg-opacity-90 transition-all duration-200 relative" onClick={() => scrollCarousel(-1)}>
                <img src={arrowdark} alt="arrow" className='z-50 absolute right-0 top-8' />
              </button>
              <button className="bg-dark-gray text-white p-10 border rounded-full hover:bg-opacity-90 transition-all duration-200 relative" onClick={() => scrollCarousel(1)}>
                <img src={arrowlight} alt="arrow" className='z-50 absolute left-0 top-8' />
              </button>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default FeelBeautifulGrid;
