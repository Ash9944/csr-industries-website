import React, { useState } from 'react';
import { Phone, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// Contact Section
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="text-white space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Touch</span>
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Have questions about our products? Ready to discuss your pumping needs?
                            We're here to help you find the perfect solution.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Contact Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="text-white space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">Store Location</p>
                                        <a className="text-gray-300" href="https://maps.app.goo.gl/H9F4LxR1kstJYz46A" target="_blank" rel="noopener noreferrer">Rajagopal Layout, Krishnarayapuram, Illango Nagar, Coimbatore, Tamil Nadu 641006</a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-6 h-6 text-blue-400" />
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <p className="text-gray-300">+91 90474 38316</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-gray-300">csrindustries1968@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;