import React from 'react';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "react-hot-toast";
import Testimonials from './components/Testimonials';
import ServicesSection from './components/Services';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEOHead
        title="CSR Industries | Best Pumps in Coimbatore - Motor Pump Manufacturers Since 1986"

        description="
        Leading motor pump manufacturers in Coimbatore since 1986.
        Premium water pump motors, 
        submersible pumps, 
        self-priming pumps, 
        and industrial pumping solutions. Available in various HP's .Quality guaranteed."

        keywords="motor pump manufacturers coimbatore, 
        water pump motors, 
        submersible pumps, 
        self priming pumps,
        industrial pumps, 
        pump manufacturers tamil nadu, 
        CSR Industries, 
        Shelby pumps,
        Best water motor for home usage,
        Best water motor for 2 story buildings,
        Best water motor for 4 story buildings,
        1/2 hp motor pump,
        1/2 hp water motor,
        1/2 hp water motor price
        1 hp motor pump,
        1 hp water motor,
        1 hp water motor price
        2 hp motor pump,
        2 hp water motor,
        2 hp water motor price,
        Customized water motor pumps"
      />

      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ReviewsSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <Toaster position="bottom-center" reverseOrder={false} toastOptions={{ duration: 5000 }} />
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;