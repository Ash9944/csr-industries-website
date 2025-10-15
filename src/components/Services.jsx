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
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                            Services
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive support and maintenance services for all your pump needs
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
                        className="bg-gradient-to-r from-blue-500 to-red-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        Contact Us for Services
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;