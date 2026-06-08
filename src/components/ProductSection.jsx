import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../websiteProducts.json";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ProductsSection = () => {
    return (
        <section
            id="products"
            className="py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1b2a 50%, #0a0f1e 100%)' }}
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/8 rounded-full filter blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Heading */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-4">
                        Premium Quality Pumps
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Products
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Six pump lines engineered for domestic, agricultural, and industrial use
                    </p>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
                >
                    {products.map((product) => {
                        const models = product.specifications?.models;
                        const hpLabel = models?.join(' · ');

                        return (
                            <motion.div key={product.id} variants={cardVariants}>
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="group block rounded-2xl border border-white/8 hover:border-blue-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
                                    style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={`/${product.image}`}
                                            alt={`${product.name} - CSR Industries`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/20 to-transparent" />
                                        {/* HP badge */}
                                        {hpLabel && (
                                            <div className="absolute top-3 right-3 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg border border-blue-400/30">
                                                {hpLabel}
                                            </div>
                                        )}
                                    </div>

                                    {/* Card body */}
                                    <div className="p-5">
                                        <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-blue-200 transition-colors">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">CSR Industries</span>
                                            <span className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                                                View Details
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/50 to-transparent transition-all duration-500" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
