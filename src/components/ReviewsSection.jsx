import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { reviews } from '../../websiteProducts.json';

// Reviews Section
const ReviewsSection = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const nextProduct = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevProduct = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextProduct,
        onSwipedRight: prevProduct,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Optional: allows swiping with mouse for testing
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);


    return (
        <section id="reviews" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">CSR Industries</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        We prioritize customer satisfaction by offering a range of value-added services
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div {...handlers} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-3xl p-8 text-center">
                        <Quote className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">{reviews[currentReview].title}</h3>
                        <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                            <img
                                src={reviews[currentReview].icon}
                                alt={`${reviews[currentReview].title} - CSR Industries Service`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            {reviews[currentReview].description}
                        </p>
                    </div>

                    <div className="flex justify-center space-x-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentReview(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReview ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;