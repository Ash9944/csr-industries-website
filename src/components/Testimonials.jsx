import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials as fallbackTestimonials, dummyReviews } from '../../websiteProducts.json';
import { fetchGoogleReviews } from '../httpRequests';

function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-white/10 text-white/10'}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, isCenter }) => (
  <div
    className={`rounded-2xl border p-6 flex flex-col gap-4 h-full transition-all duration-300 ${
      isCenter
        ? 'border-blue-500/30 shadow-xl shadow-blue-500/10'
        : 'border-white/8'
    }`}
    style={{ background: isCenter ? 'rgba(59,130,246,0.07)' : 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
  >
    <Quote size={24} className="text-blue-400/60 flex-shrink-0" />
    <p className="text-gray-300 text-sm leading-relaxed flex-grow line-clamp-5">
      {testimonial.description}
    </p>
    <div className="flex items-center justify-between pt-3 border-t border-white/8">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/30"
          onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=1e3a5f&color=60a5fa`; }}
        />
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.author}</p>
          <p className="text-gray-500 text-xs">Verified Customer</p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
    </div>
  </div>
);

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const cached = localStorage.getItem('google_reviews');
        const cacheTime = localStorage.getItem('google_reviews_time');
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        if (cached && cacheTime && Date.now() - Number(cacheTime) < oneWeek) {
          setTestimonials(JSON.parse(cached));
          return;
        }
        const response = await fetchGoogleReviews();
        const reviews = response.data?.reviews?.map(r => ({
          id: r.time,
          description: r.text || dummyReviews[Math.floor(Math.random() * dummyReviews.length)],
          author: capitalizeFirstLetter(r.author_name),
          rating: r.rating,
          avatar: r.profile_photo_url,
        })) || [];
        const data = reviews.length > 0 ? reviews : fallbackTestimonials;
        setTestimonials(data);
        localStorage.setItem('google_reviews', JSON.stringify(data));
        localStorage.setItem('google_reviews_time', Date.now().toString());
      } catch {
        setTestimonials(fallbackTestimonials);
      }
    }
    fetchReviews();
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-advance
  useEffect(() => {
    if (testimonials.length === 0 || isPaused) return;
    intervalRef.current = setInterval(goNext, 4000);
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length, isPaused, goNext]);

  if (testimonials.length === 0) return null;

  // Visible cards: left, center, right (wrapping)
  const indices = [
    (currentIndex - 1 + testimonials.length) % testimonials.length,
    currentIndex,
    (currentIndex + 1) % testimonials.length,
  ];

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0a0f1e 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full filter blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-4">
            Google Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Customer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Stories
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear directly from customers who rely on our pumps every day
          </p>
        </div>

        {/* Carousel */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {indices.map((idx, pos) => (
                <div
                  key={idx}
                  className={`transition-all duration-300 ${
                    pos === 1
                      ? 'opacity-100 scale-100'
                      : 'opacity-50 scale-95 hidden md:block'
                  }`}
                >
                  <TestimonialCard
                    testimonial={testimonials[idx]}
                    isCenter={pos === 1}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-5 mt-8">
            <button
              onClick={goPrev}
              aria-label="Previous review"
              className="p-2.5 rounded-full border border-white/10 hover:border-blue-500/40 text-gray-400 hover:text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                  aria-label={`Review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 h-2 bg-blue-400'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next review"
              className="p-2.5 rounded-full border border-white/10 hover:border-blue-500/40 text-gray-400 hover:text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Review count */}
          <p className="text-center text-gray-600 text-xs mt-4">
            {currentIndex + 1} of {testimonials.length} reviews
          </p>
        </div>
      </div>
    </section>
  );
}
