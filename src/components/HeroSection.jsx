// Hero Section
import React from 'react';
import { ArrowRight, Download, Award, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b2a 40%, #0f172a 100%)' }}>
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-400 rounded-full filter blur-[100px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full filter blur-[150px] opacity-10"></div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8 animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-300 backdrop-blur-sm">
              <Award className="w-4 h-4" />
              <span>Trusted Pump Manufacturer Since 1986</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">CSR</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">Industries</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Leading motor pump manufacturers in Coimbatore with decades of precision engineering.
              We craft superior water pump motors that set the benchmark for quality and performance across India.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Zap, text: 'High Efficiency' },
                { icon: Shield, text: 'Quality Guaranteed' },
                { icon: Award, text: 'Zed Bronze Certified' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300">
                  <Icon className="w-4 h-4 text-blue-400" />
                  {text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CSR_pamplet.pdf';
                  link.download = 'csr-industries-brochure.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-2xl scale-105"></div>
            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="imgs/heroSectionImage-2.jpeg"
                alt="CSR Industries Premium Water Pump Motor - Best Pumps in Coimbatore"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0f1e]/80 to-transparent"></div>
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex justify-between">
                {[['38+', 'Years'], ['500+', 'Models'], ['10K+', 'Customers']].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <p className="text-white font-bold text-xl leading-tight">{val}</p>
                    <p className="text-gray-300 text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;