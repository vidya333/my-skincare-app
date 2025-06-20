import creamImage from '../assets/white.png'
import React, { useState, useRef } from 'react';
import dot from '../assets/blackdot.png'
import cream from '../assets/white.png'
import plumImage from '../assets/headphone.png'
import dotBlack from '../assets/blackdot.png'


const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-2 m-3 p-5 border-dark-gray transition-all duration-300 ease-in-out rounded-md">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="md:text-2xl text-xl text-dark-gray">{question}</span>
        <span className="md:text-5xl text-3xl text-dark-gray font-light">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-2 text-gray-600 md:text-xl text-lg pr-6">
          {answer}
        </p>
      </div>
    </div>
  );
};



const FaqSection = () => {
  const faqs = [
    {
      question: 'Are your products safe for sensitive skin?',
      answer: 'Yes, our products are formulated with gentle, natural ingredients suitable for most sensitive skin types. We recommend doing a patch test first.',
    },
    {
      question: 'Are your products cruelty-free?',
      answer: 'Absolutely! We are proud to be 100% cruelty-free and never test on animals.',
    },
    {
      question: 'What\'s your return policy?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, you can return your product within 30 days for a full refund.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and times vary by destination.',
    },
    {
      question: 'How do I choose the right product?',
      answer: 'You can use our skin quiz on the "About Us" page, or contact our customer support for personalized recommendations.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center px-4">
        {/* Left Image / Support */}
        <div className="xl:w-1/2 justify-center mb-10 md:mb-0 hidden xl:block">
          <img
            src={creamImage}
            alt="Support Product"
            className="w-full max-w-lg h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content - FAQs */}
        <div className="xl:w-1/2 md:pl-12 text-left mt-10 md:mt-2">
           
            <button className="mb-10 text-dark-gray text-xl font-medium py-4 px-5
             bg-dark border-2 border-dark-gray rounded-full flex">
              <img src={dot} alt="dor" className='w-4 h-4 mt-1 me-4' />
              <span>Frequently Asked Question</span>
            </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-dark-gray md:mb-10 md:py-10 mb-5 py-7">
            Answers to Your Skincare Questions, All in One Place.
          </h2>
          <div className='-ms-3'>
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Mobile screen Image  */}
        <div className="xl:w-1/2 w-full flex justify-center relative my-5 xl:my-0 sm:hidden ">
          <div>
          <img
            src={cream}
            alt="Woman with eye masks"
            className="w-full max-w-xl h-auto md:rounded-lg shadow-lg"
          />
          </div>
          <div className="absolute bottom-5 bg-white p-1 pe-3 items-center rounded-full shadow-lg max-w-md 
          text-start text-dark-gray text-sm z-10 flex">
              <span className='relative'>
                <img src={dotBlack} alt="plum" className='rounded-full h-16 w-16 p-1 z-1' 
               style={{border:"dotted 2px gray"}} />
              <img src={plumImage} alt="star" className='h-10 w-10 absolute left-0 bottom-0 m-3 z-50'/>
             
              </span>
              <span className='mx-2 px-4 text-lg'>
                 24/7 We're Here <br />
                 to Help You</span>  
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FaqSection;