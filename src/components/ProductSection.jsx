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

    const schemaData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": [product.image],
        "description": product.description || product.features.join(", "),
        "brand": {
            "@type": "Brand",
            "name": "CSR Industries"
        },
        "offers": {
            "@type": "Offer",
            "url": typeof window !== 'undefined' ? window.location.href : '',
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
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <title>{`${product.name} | CSR Industries`}</title>
                <meta
                    name="description"
                    content={`Explore ${product.name} — ${product.description || product.features.join(", ")}`}
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

                                <div className="text-white">
                                    <h3 className="text-3xl font-bold">{product.name}</h3>
                                    {product.description && (
                                        <p className="text-gray-300 text-md leading-relaxed mb-5">
                                            {product.description}
                                        </p>
                                    )}

                                    {product.specifications && Object.keys(product.specifications).length > 0 && (
                                        <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-600/30 mb-5">
                                            <table className="w-full text-center">
                                                <thead>
                                                    <tr className="bg-gray-700/50 border-b border-gray-600/30">
                                                        <th className="px-4 py-3 text-left font-semibold text-gray-300">
                                                            RANGE
                                                        </th>
                                                        {
                                                            product.specifications.models && product.specifications.models.map((model, index) => (
                                                                <th key={index} className="px-4 py-3 font-semibold text-gray-200">
                                                                    {model}
                                                                </th>
                                                            ))
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        product.specifications.specs && product.specifications.specs.map((spec, index) => (
                                                            <tr key={index} className={index % 2 === 0 ? "bg-gray-700/30" : ""}>
                                                                <td className="px-4 py-3 text-left font-semibold text-gray-300 border-r border-gray-600/30">
                                                                    {spec.label}
                                                                </td>
                                                                {
                                                                    spec.values.map((value, vIndex) => (
                                                                        <td key={vIndex} className="px-4 py-3 text-gray-200">
                                                                            {value}
                                                                        </td>
                                                                    ))
                                                                }
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {
                                        product.features && product.features.length > 0 && (
                                            <div className="space-y-2">
                                                <h4 className="text-xl font-semibold text-gray-200">Key Features</h4>
                                                {
                                                    product.features.map((feature, index) => (
                                                        <div key={index} className="flex items-start space-x-3">
                                                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                                            <span className="text-lg text-gray-200">{feature}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={prevProduct}
                        aria-label="Previous product"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextProduct}
                        aria-label="Next product"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

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
                                aria-label={`Go to product ${index + 1}`}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProduct ? "bg-blue-500 w-8" : "bg-gray-600"
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