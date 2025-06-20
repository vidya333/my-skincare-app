import AboutSection from './components/AboutSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import FeelBeautifulGrid from './components/FeelBeautifulGrid';
import Footer from './components/FooterSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import WhyChooseUs from './components/WhyChooseUs';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <ProductGrid/>
      <CtaSection/>
      <FeelBeautifulGrid/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default App;
