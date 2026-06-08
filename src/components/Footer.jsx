import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    return (
        <footer
            className="border-t border-white/8 py-12"
            style={{ background: '#080d18' }}
        >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="text-white">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-lg overflow-hidden">
                                <img
                                    src="/imgs/CC_20240708_002104.png"
                                    alt="CSR Industries Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    CSR Industries
                                </h3>
                                <p className="text-blue-400 text-sm">
                                    Since 1986
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm">
                            Leading motor pump manufacturers in Coimbatore,
                            delivering quality and performance since 1986.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-white">
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>

                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Home
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => scrollToSection('products')}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Products
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    About Us
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="text-white">
                        <h4 className="text-lg font-semibold mb-4">
                            Our Products
                        </h4>

                        <ul className="space-y-2 text-gray-300">
                            <li>Self Priming Pumps</li>
                            <li>Submersible Pumps</li>
                            <li>Centrifugal Pumps</li>
                            <li>Industrial Pumps</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/8 pt-8 text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} CSR Industries. All
                            rights reserved.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/share/1GEg3y2KrW/"
                                className="w-9 h-9 rounded-lg border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-gray-500 hover:text-blue-400 transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.04)',
                                }}
                            >
                                <Facebook className="w-4 h-4" />
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/csr.industries"
                                className="w-9 h-9 rounded-lg border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-gray-500 hover:text-blue-400 transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.04)',
                                }}
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;