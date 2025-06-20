import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './index.css';

import AboutSection from './components/AboutSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import FeelBeautifulGrid from './components/FeelBeautifulGrid';
import Footer from './components/FooterSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const sections = appRef.current.children;

    gsap.set(sections, { opacity: 0, y: 40 });

    gsap.to(sections, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="App overflow-hidden" ref={appRef} style={{backgroundColor:"#eff5e1"}}>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ProductGrid />
      <CtaSection />
      <FeelBeautifulGrid />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
