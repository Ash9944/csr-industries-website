import React from 'react';
// About Section
const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">CSR Industries</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            As one of the top pump manufacturers in Coimbatore, CSR Industries has a rich legacy dating back to 1986.
                            Our expertise in precision-engineered components for pump motors is unmatched.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Under Sebastian's innovative leadership, every stator coil and rotor shaft meets the highest standards
                            of excellence, driving client success and advancing the industry.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-6 rounded-2xl border border-blue-500/30">
                                <h4 className="text-xl font-bold mb-2">Performance is Optimized </h4>
                                <p className="text-gray-400">Customization allows fine-tuning of aspects like impeller design and materials, ensuring enhanced flow rates, pressure, and energy efficiency for a specific application.</p>
                            </div>
                            <div className="bg-gradient-to-br from-red-500/20 to-transparent p-6 rounded-2xl border border-red-500/30">
                                <h4 className="text-xl font-bold mb-2">Expert Support</h4>
                                <p className="text-gray-400">By providing the right pump for the job, the company helps minimize energy consumption, reduce maintenance needs, and extend the lifespan of the pump, leading to cost savings over time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="imgs/aboutCsrImage.jpeg"
                                alt="CSR Industries Manufacturing Excellence - Top Pump Manufacturers in Coimbatore"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;