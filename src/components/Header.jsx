import React from 'react';
import cart from '../assets/fullBag.png'
import heart from '../assets/fullHeart.png'
import user from '../assets/fullUser.png'


const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm" style={{backgroundColor:"#eff5e1"}}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-dark-gray">SKINCARE</div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8 text-dark-gray font-medium text-xl" >
          <span className="hover:text-primary-green transition-colors duration-200">All Products</span>
          <span className="hover:text-primary-green transition-colors duration-200">Serum</span>
          <span className="hover:text-primary-green transition-colors duration-200">Sunscreen</span>
          <span className="hover:text-primary-green transition-colors duration-200">Bundle</span>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <span className="text-dark-gray cursor-pointer bg-white rounded-full p-3">
            <img src={cart} className='h-5 w-5' alt='navicons' />
          </span>
          <span className="text-dark-gray text-lg ml-2 hidden sm:block">
            Cart (0)
          </span>
          <span className="text-dark-gray cursor-pointer bg-white rounded-full  p-3" >
            <img src={heart} className='h-5 w-5' alt='navicons' />
          </span>
          <span className="text-dark-gray cursor-pointer bg-white rounded-full p-3">
            <img src={user} className='h-5 w-5 ' alt='navicons' />
          </span>
          
        </div>
      </div>
    </header>
  );
};

export default Header;