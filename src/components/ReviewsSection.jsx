import React from 'react';
import { motion } from 'framer-motion';
import { reviews } from '../../websiteProducts.json';

const iconMap = {
  'Customized pump solution.png': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Quality assurance.png': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Time delivery.png': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Expert advice.png': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1b2a 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full filter blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-4">
            Our Promise
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              CSR Industries
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We prioritise customer satisfaction through quality, speed, and expert support
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {reviews.map((review, index) => {
            const filename = review.icon.split('/').pop();
            const Icon = iconMap[filename];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative rounded-2xl border border-white/8 hover:border-blue-500/30 p-7 transition-all duration-300 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 group-hover:from-blue-500/5 to-transparent transition-all duration-500 rounded-2xl" />
                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400 border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300"
                    style={{ background: 'rgba(59,130,246,0.1)' }}
                  >
                    {Icon || (
                      <img
                        src={`/${review.icon}`}
                        alt={review.title}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1.5 group-hover:text-blue-200 transition-colors">
                      {review.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {review.description}
                    </p>
                  </div>
                </div>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/40 to-transparent transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
