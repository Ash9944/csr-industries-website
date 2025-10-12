import { useState } from 'react';
import { ChevronDown, Search, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { faqs } from '../../websiteProducts.json';

export default function ModernFAQSection() {
    const [expandedFAQ, setExpandedFAQ] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const filteredFAQs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    // 🧠 Build Schema.org JSON-LD structure dynamically
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="min-h-screen bg-gray-900 p-8">
            {/* ✅ Add structured data to <head> */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
                <title>Frequently Asked Questions | CSR Industries</title>
                <meta
                    name="description"
                    content="Find answers to common questions about CSR Industries' products, services, and support."
                />
            </Helmet>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Frequently asked{' '}
                                <span className="bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
                                    questions
                                </span>
                            </h1>

                            {/* Search Bar */}
                            <div className="relative mb-8">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search questions..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-800/80 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-gray-800/60 border border-gray-700/40 rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Still have a question?
                            </h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                Can’t find the answer to your question? Send us an email and we’ll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <Mail className="w-4 h-4" />
                                Send email
                            </button>
                        </div>
                    </div>

                    {/* Right Column - FAQ List */}
                    <div className="space-y-3">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`bg-gray-800/60 border border-gray-700/40 rounded-xl overflow-hidden transition-all duration-300 ${expandedFAQ === index ? 'ring-1 ring-blue-500/30' : ''
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none"
                                    >
                                        <h3 className="font-medium pr-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-400 duration-200">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`w-6 h-6 flex items-center justify-center transform transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''
                                                    }`}
                                            >
                                                <ChevronDown className={`w-4 h-4 ${expandedFAQ === index ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-400'} transition-colors duration-200`} />
                                            </div>
                                        </div>
                                    </button>

                                    {expandedFAQ === index && (
                                        <div className="px-6 pb-5">
                                            <div className="h-px bg-gray-700/50 mb-4"></div>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-6 h-6 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">No questions found</h3>
                                <p className="text-gray-400">Try adjusting your search terms</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
