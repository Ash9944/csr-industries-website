import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { products } from "../../websiteProducts.json";

const ProductsSection = () => {
    const [currentProduct, setCurrentProduct] = useState(0);
    const [direction, setDirection] = useState(0);

    const product = products[currentProduct];

    const nextProduct = () => {
        setDirection(1);
        setCurrentProduct((prev) => (prev + 1) % products.length);
    };

    const prevProduct = () => {
        setDirection(-1);
        setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextProduct,
        onSwipedRight: prevProduct,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    // 🧩 Generate Product Schema JSON-LD dynamically
    const schemaData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": [product.image],
        "description": product.features.join(", "),
        "brand": {
            "@type": "Brand",
            "name": "CSR Industries" // replace with your brand name
        },
        "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "INR",
            "price": product.price ?? "0",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
            "@type": "aggregateRating",
            "ratingValue": "5",
            "reviewCount": "1000"
        }
    };

    return (
        <section id="products" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
            {/* 🧠 SEO JSON-LD */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <title>{`${product.name} | CSR Industries`}</title>
                <meta
                    name="description"
                    content={`Explore ${product.name} — ${product.features.join(", ")}`}
                />
            </Helmet>

            <div className="container mx-auto px-4" {...handlers}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                            Products
                        </span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Discover our comprehensive range of high-quality pumps designed for various applications
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/30">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentProduct}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                                className="grid lg:grid-cols-2 gap-8 p-8"
                            >
                                <div className="relative">
                                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} - CSR Industries Premium Quality`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="text-white space-y-6">
                                    <h3 className="text-3xl font-bold">{product.name}</h3>
                                    <div className="space-y-3">
                                        {product.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <CheckCircle className="w-6 h-5 text-green-400" />
                                                <span className="text-xl text-gray-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Prev & Next Buttons */}
                    <button
                        onClick={prevProduct}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextProduct}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (index !== currentProduct) {
                                        setDirection(index > currentProduct ? 1 : -1);
                                        setCurrentProduct(index);
                                    }
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProduct ? "bg-blue-500" : "bg-gray-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
