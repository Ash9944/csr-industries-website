import { useState } from 'react';
import { ChevronDown, Search, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../websiteProducts.json';

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
};

export default function FAQSection() {
    // Store the question string as the key, not an index — survives filtering
    const [expandedKey, setExpandedKey] = useState(faqs[0]?.question ?? null);
    const [searchTerm, setSearchTerm] = useState('');

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const filtered = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section
            id="faq"
            className="py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1b2a 100%)' }}
        >
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <meta name="description" content="Find answers to common questions about CSR Industries products, services, and support." />
            </Helmet>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

                    {/* Left */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-5">
                                Got Questions?
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                                Frequently{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    asked questions
                                </span>
                            </h2>
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search questions..."
                                    value={searchTerm}
                                    onChange={e => { setSearchTerm(e.target.value); setExpandedKey(null); }}
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none transition-all duration-200"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>

                        {/* Still have a question card */}
                        <div
                            className="rounded-2xl p-7 border border-white/10 mt-auto"
                            style={{ background: 'rgba(255,255,255,0.03)' }}
                        >
                            <h3 className="text-lg font-bold text-white mb-2">Still have a question?</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                Can't find the answer? Send us a message and we'll get back to you shortly.
                            </p>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Right — FAQ list */}
                    <div className="space-y-2">
                        {filtered.length > 0 ? filtered.map(faq => {
                            const isOpen = expandedKey === faq.question;
                            return (
                                <div
                                    key={faq.question}
                                    className="rounded-xl overflow-hidden transition-colors duration-200"
                                    style={{
                                        border: isOpen ? '1px solid rgba(59,130,246,0.35)' : '1px solid rgba(255,255,255,0.08)',
                                        background: 'rgba(255,255,255,0.03)',
                                    }}
                                >
                                    <button
                                        onClick={() => setExpandedKey(isOpen ? null : faq.question)}
                                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none group"
                                    >
                                        <span className={`text-sm font-medium transition-colors duration-200 ${isOpen ? 'text-blue-300' : 'text-white group-hover:text-blue-300'}`}>
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-blue-400' : 'text-gray-500 group-hover:text-blue-400'}`}
                                        />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div className="px-5 pb-4 pt-1">
                                                    <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.08)' }} />
                                                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }) : (
                            <div className="text-center py-16">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                >
                                    <Search className="w-5 h-5 text-gray-400" />
                                </div>
                                <p className="text-white font-medium mb-1">No results found</p>
                                <p className="text-gray-500 text-sm">Try different keywords</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
