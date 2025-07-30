// Hero Section
import React from 'react';
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fadeInLeft">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              CSR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Industries</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Welcome to CSR Industries, a leader among motor pump manufacturers in Coimbatore.
              With decades of precision engineering experience since 1986, we excel in crafting
              superior water pump motors in India, setting the benchmark for quality and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Products
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CSR_pamplet.pdf';
                  link.download = 'csr-industries-brochure.pdf'; // optional rename
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Download Brochure
              </button>
            </div>
          </div>
          <div className="relative animate-fadeInRight">
            <div className="w-full h-360 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="imgs/IMG_20240724_200058.jpg"
                alt="CSR Industries Premium Water Pump Motor - Best Pumps in Coimbatore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;