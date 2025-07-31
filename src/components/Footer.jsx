import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-white">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-lg overflow-hidden">
                                <img
                                    src="imgs/CC_20240708_002104.png"
                                    alt="CSR Industries Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">CSR Industries</h3>
                                <p className="text-blue-400 text-sm">Since 1986</p>
                            </div>
                        </div>
                        <p className="text-gray-300">
                            Leading motor pump manufacturers in Coimbatore, delivering quality and performance since 1986.
                        </p>
                    </div>

                    <div className="text-white">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="text-white">
                        <h4 className="text-lg font-semibold mb-4">Our Products</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Self Priming Pumps</li>
                            <li>Submersible Pumps</li>
                            <li>Centrifugal Pumps</li>
                            <li>Industrial Pumps</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400">
                            © 2024 CSR Industries. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/1GEg3y2KrW/" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a> */}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/csr.industries?igsh=MXZ2Ymtrd3RleDR2OQ==" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;