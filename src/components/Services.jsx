import { motion } from "framer-motion";
import { Wrench, Clock, Package, Headphones, Shield, Zap } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            icon: Wrench,
            title: "Repair & Maintenance",
            description: "Expert repair and preventive maintenance solutions"
        },
        {
            icon: Clock,
            title: "Annual Service",
            description: "Comprehensive annual maintenance packages available"
        },
        {
            icon: Package,
            title: "Spare Parts",
            description: "Genuine spare parts with warranty coverage"
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Round-the-clock customer support and assistance"
        },
        {
            icon: Shield,
            title: "Warranty Service",
            description: "Extended warranty and service contracts"
        },
        {
            icon: Zap,
            title: "Emergency Service",
            description: "Quick response for urgent repair needs"
        }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1b2a 100%)' }}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[100px]"></div>
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-[80px]"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-4">
                        Full Service Support
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight"
                    >
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Services
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive support and maintenance services for all your pump needs
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group relative rounded-2xl p-6 overflow-hidden cursor-default border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/8 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />
                                {/* Top border accent */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/50 to-transparent transition-all duration-500" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 border border-blue-500/20 group-hover:border-blue-400/40" style={{ background: 'rgba(59,130,246,0.1)' }}>
                                        <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-2xl" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                        Contact Us for Services
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;