import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials as testimonialJson, dummyReviews } from "../../websiteProducts.json";
import axios from 'axios';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

  useEffect(() => {
    async function fetchReviews() {
      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_API_KEY}`;
        const { data } = await axios.get(url);

        const reviews =
          data.result?.reviews?.map((r) => ({
            id: r.time,
            description: r.text || dummyReviews[Math.floor(Math.random() * dummyReviews.length)],
            author: capitalizeFirstLetter(r.author_name),
            rating: r.rating,
            avatar: r.profile_photo_url
          })) || [];

        setTestimonials(reviews);
      } catch (err) {
        setTestimonials(testimonialJson);
        console.error("Error fetching Google reviews:", err);
      }
    }

    fetchReviews();
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  const getCardStyle = (position) => {
    const baseStyle = {
      position: 'absolute',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    switch (position) {
      case 0: // Center
        return {
          ...baseStyle,
          left: '50%',
          transform: 'translateX(-50%) scale(1) rotateY(0deg)',
          zIndex: 50,
          opacity: 1,
        };
      case -1: // Left
        return {
          ...baseStyle,
          left: '20%',
          transform: 'translateX(-50%) scale(0.85) rotateY(25deg)',
          zIndex: 40,
          opacity: 0.7,
        };
      case 1: // Right
        return {
          ...baseStyle,
          left: '80%',
          transform: 'translateX(-50%) scale(0.85) rotateY(-25deg)',
          zIndex: 40,
          opacity: 0.7,
        };
      case -2: // Far Left
        return {
          ...baseStyle,
          left: '5%',
          transform: 'translateX(-50%) scale(0.7) rotateY(35deg)',
          zIndex: 30,
          opacity: 0.4,
        };
      case 2: // Far Right
        return {
          ...baseStyle,
          left: '95%',
          transform: 'translateX(-50%) scale(0.7) rotateY(-35deg)',
          zIndex: 30,
          opacity: 0.4,
        };
      default:
        return {
          ...baseStyle,
          opacity: 0,
          zIndex: 0,
        };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <div className="min-h-screen bg-black py-16 px-4 flex items-center justify-center">
        <div className="text-white text-xl">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <section id="testimonials" className="min-h-screen bg-black py-16 px-1 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-white space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Stories</span>
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            Hear directly from our valued customers about their experiences with our products and services.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[500px]" style={{ perspective: '2000px' }}>
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              style={getCardStyle(testimonial.position)}
              className="w-[400px] max-w-[90vw]"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-2xl h-full flex flex-col">
                <Quote className="text-blue-400 text-4xl mb-6" />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {testimonial.author}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-6">
                  {testimonial.description}
                </p>

                <div className="mt-auto">
                  <div className="border-t border-gray-700 mb-4"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                      />
                    </div>

                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-blue-500 to-red-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-red-500'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-blue-500 to-red-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}