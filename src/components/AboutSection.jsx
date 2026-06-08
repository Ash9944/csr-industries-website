import React from 'react';
// About Section
const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0a0f1e 100%)' }}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/8 rounded-full filter blur-[100px]" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    <div className="text-white space-y-6">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300">
                            Est. 1986 · Coimbatore
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">CSR Industries</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            As one of the top pump manufacturers in Coimbatore, CSR Industries has a rich legacy dating back to 1986.
                            Our expertise in precision-engineered components for pump motors is unmatched.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Under Sebastian's innovative leadership, every stator coil and rotor shaft meets the highest standards
                            of excellence, driving client success and advancing the industry.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="rounded-2xl border border-white/8 p-6 hover:border-blue-500/30 transition-all duration-300" style={{ background: 'rgba(59,130,246,0.06)' }}>
                                <h4 className="text-lg font-bold text-white mb-2">Optimised Performance</h4>
                                <p className="text-gray-400 text-sm">Tailored components and enhanced customisation for every application.</p>
                            </div>
                            <div className="rounded-2xl border border-white/8 p-6 hover:border-blue-500/30 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.03)' }}>
                                <h4 className="text-lg font-bold text-white mb-2">Expert Support</h4>
                                <p className="text-gray-400 text-sm">Right pump choice saves energy, extends lifespan, and cuts costs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-2xl scale-105 pointer-events-none" />
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="/imgs/aboutCsrImage.jpeg"
                                alt="CSR Industries Manufacturing Excellence - Top Pump Manufacturers in Coimbatore"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;