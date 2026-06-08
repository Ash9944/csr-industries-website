import React, { useState } from 'react';
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

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="https://wa.me/919047438316?text=Hi%2C%20I%27m%20interested%20in%20your%20pumps!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '6rem',
        right: '1.5rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        height: '52px',
        borderRadius: '999px',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: hovered
          ? '0 8px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.2)'
          : '0 4px 20px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.15)',
        padding: hovered ? '0 20px 0 14px' : '0 14px',
        overflow: 'hidden',
        maxWidth: hovered ? '200px' : '52px',
        transition: 'max-width 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Icon */}
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 2.112.55 4.095 1.512 5.818L0 24l6.337-1.487A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.365l-.358-.213-3.762.883.948-3.667-.234-.376A9.818 9.818 0 1 1 12 21.818z" />
      </svg>
      {/* <svg viewBox="0 0 32 32" width="26" height="26" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.37.637 4.686 1.846 6.71L2.667 29.333l6.789-1.784A13.28 13.28 0 0016.003 29.333C23.37 29.333 29.333 23.367 29.333 16S23.37 2.667 16.003 2.667zm0 24.267a11 11 0 01-5.613-1.537l-.402-.24-4.03 1.058 1.077-3.922-.263-.413A10.994 10.994 0 015.003 16c0-6.065 4.936-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.022-8.228c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.524-.165-.744.165-.22.33-.854 1.073-.047 1.293.33.165.744.33 1.073.495.33.165 1.348.688 1.596.908.55.468.88.963 1.018 1.403.138.44.028.963-.303 1.403-.33.44-.88.605-1.348.715-.468.11-1.018.055-1.513-.165-.495-.22-1.018-.495-1.678-.908-.66-.413-1.238-.963-1.733-1.568-.495-.605-.908-1.348-1.073-2.09-.165-.743-.055-1.568.33-2.255.385-.688 1.018-1.183 1.788-1.348.77-.165 1.568.055 2.09.66.33.385.385.88.22 1.348-.165.468-.44.88-.77 1.183z" />
      </svg> */}
      {/* Label — fades in when expanded */}
      <span style={{
        color: 'white',
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '0.01em',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
        transition: 'opacity 0.25s 0.1s, transform 0.25s 0.1s',
        pointerEvents: 'none',
      }}>
        Chat with us
      </span>
    </a>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEOHead
        title="CSR Industries | Water Pump Manufacturers in Coimbatore"

        description="CSR Industries manufactures monoblock, submersible and self-priming water pumps in Coimbatore. Precision-engineered motors. Contact us for bulk enquiries."

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
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
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