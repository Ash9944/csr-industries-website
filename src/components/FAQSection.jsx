import React, { useState, useEffect } from 'react';

// FAQ Section
const FAQSection = () => {
    const [currentFAQ, setCurrentFAQ] = useState(0);
    const faqs = [
        {
            question: "Which motor pump is best for home usage?",
            answer: "For home usage, a motor pump with moderate power specifications like 1/2 HP or 1 HP is typically sufficient. Our Shelby water pumps in these power ranges offer reliable performance for household needs."
        },
        {
            question: "Which motor pump is best for Agricultural usage?",
            answer: "Agricultural usage often requires higher power. Our openwell submersible pumps, available in 1 HP, 3 HP, and 5 HP 3-phase models, are ideal for agricultural applications due to their high performance and durability."
        },
        {
            question: "Can I use a smaller hose on the pump suction?",
            answer: "While possible, using a smaller hose may restrict water flow, reducing pump efficiency and potentially causing damage. It's best to match hoses to pump specifications for optimal performance and longevity."
        },
        {
            question: "I have a three-story building, which is the best motor to buy?",
            answer: "For a three-story building, consider a motor pump with higher power, such as our open well submersible pumps with 3 HP or 5 HP 3-phase models. These pumps can efficiently pump water to the upper floors."
        },
        {
            question: "What are the advantages of choosing Shelby water pumps from CSR Industries?",
            answer: "By choosing Shelby water pumps from CSR Industries, you benefit from superior quality, efficiency, and durability at the most competitive prices in Coimbatore."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFAQ((prev) => (prev + 1) % faqs.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [faqs.length]);

    return (
        <section id="faq" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Questions</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-3xl p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">{faqs[currentFAQ].question}</h3>
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-white text-xl font-bold">{currentFAQ + 1}</span>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {faqs[currentFAQ].answer}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-2 mt-8">
                        {faqs.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentFAQ(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentFAQ ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;