import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current.querySelectorAll('.word');

    gsap.set(words, { opacity: 0, y: 20 });

    gsap.to(words, {
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, []);

  const text = `Experience the ultimate in skincare with our expertly formulated products,
  crafted to nourish, protect, and rejuvenate your skin. Combining the finest
  natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate 
  in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.`;

  const splitText = text.split(' ');
  const advancedIndex = splitText.findIndex((word) =>
    word.toLowerCase().includes('advanced')
  );

  return (
    <div style={{ background: "#fefff5" }}>
      <div className='w-full lg:text-4xl md:text-3xl text-2xl mx-auto md:px-10 px-4 py-10' 
      style={{lineHeight:"50px",letterSpacing:"1px"}}>
        <p className='md:px-5 md:mx-9 py-10 px-4 mx-3' ref={paragraphRef}>
          {splitText.map((word, i) => (
            <span
              key={i}
              className={`word inline-block mr-1 ${
                i >= advancedIndex ? 'text-gray-300' : 'text-gray-500'
              }`}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
