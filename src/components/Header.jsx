import React,{ useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-15 h-12 rounded-lg overflow-hidden">
              <img
                src="imgs/CC_20240708_002104.png"
                alt="CSR Industries Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">CSR Industries</h1>
              <p className="text-blue-400 text-xs">Since 1986</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-white">
            <Phone className="w-4 h-4 text-blue-400" />
            <span>+91 9047438316</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('products')} className="text-white hover:text-blue-400 transition-colors">Products</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('reviews')} className="text-white hover:text-blue-400 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-blue-400 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 transition-colors">Contact</button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800/95 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-white hover:text-blue-400 transition-colors text-left">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('reviews')} className="text-white hover:text-blue-400 transition-colors text-left">Reviews</button>
              <button onClick={() => scrollToSection('faq')} className="text-white hover:text-blue-400 transition-colors text-left">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;