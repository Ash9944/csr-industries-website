import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

// Products Section
const ProductsSection = () => {
    const [currentProduct, setCurrentProduct] = useState(0);

    const products = [
        {
            id: 1,
            name: "Self Priming Monoblock Pump",
            image: "imgs/selfPriming.jpeg",
            features: [
                "Heavy Duty Motor",
                "High Head & High Discharge",
                "Powder-Coated Aluminum Body",
                "Brass Forged Impellers",
                "Built-In Non-Return Valve"
            ]
        },
        {
            id: 2,
            name: "Openwell Submersible Pump",
            image: "imgs/openwellSubmersible.jpeg",
            features: [
                "High Head & High Discharge",
                "Continuous Heavy Duty Motor",
                "Stainless Steel Body",
                "Rust-Proof SS Shaft",
                "Low Power Consumption"
            ]
        },
        {
            id: 3,
            name: "Borewell Submersible Pump",
            image: "imgs/borewellSubmersible.jpeg",
            features: [
                "Stainless Steel V4 Design",
                "Enhanced Performance",
                "Easy Maintenance",
                "Innovative Design",
                "Long-lasting Durability"
            ]
        },
        {
            id: 4,
            name: "V-Type Self Priming Pump",
            image: "imgs/VtypePump.jpeg",
            features: [
                "Heavy Duty Motor",
                "High Head & High Discharge",
                "Brass Forged Impellers",
                "Carbon Mechanical Seal",
                "Voltage Variation Tolerance"
            ]
        },
        {
            id: 5,
            name: "Centrifugal Monoblock Pump",
            image: "imgs/centrifugal.jpeg",
            features: [
                "Aluminum Impellers",
                "Powder-Coated Body",
                "High Reliability",
                "Carbon Mechanical Seal",
                "Efficient Performance"
            ]
        },
        {
            id: 6,
            name: "DMS Slow Speed Pump",
            image: "imgs/DMSSlowSpeed.jpeg",
            features: [
                "Heavy duty motor",
                "High head & high discharge ",
                "Brass forged impeller",
                "Extreme suction performer",
                "Voltage variation tolerance"
            ]
        }
    ];

    const nextProduct = () => {
        setCurrentProduct((prev) => (prev + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section id="products" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Products</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Discover our comprehensive range of high-quality pumps designed for various applications
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/30">
                        <div className="grid lg:grid-cols-2 gap-8 p-8">
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={products[currentProduct].image}
                                        alt={`${products[currentProduct].name} - CSR Industries Premium Quality`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="text-white space-y-6">
                                <h3 className="text-3xl font-bold">{products[currentProduct].name}</h3>
                                <div className="space-y-3">
                                    {products[currentProduct].features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-6 h-5 text-green-400" />
                                            <span className="text-xl text-gray-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* <button className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button> */}
                            </div>
                        </div>
                    </div>

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

                    <div className="flex justify-center space-x-2 mt-8">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentProduct(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProduct ? 'bg-blue-500' : 'bg-gray-600'
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