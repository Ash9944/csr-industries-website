import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials as testimonialJson, dummyReviews } from "../../websiteProducts.json";
import axios from 'axios';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY; // store in .env file
  const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID; // store in .env file

  useEffect(() => {
    async function fetchReviews() {
      const cached = localStorage.getItem("google_reviews");
      const cacheTime = localStorage.getItem("google_reviews_time");

      const oneWeek = 7 * 24 * 60 * 60 * 1000;
      const isCacheValid =
        cached && cacheTime && Date.now() - cacheTime < oneWeek;

      if (isCacheValid) {
        setTestimonials(JSON.parse(cached));
        return;
      }

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
        localStorage.setItem("google_reviews", JSON.stringify(reviews));
        localStorage.setItem("google_reviews_time", Date.now().toString());
      } catch (err) {
        setTestimonials(testimonialJson); // fallback to static testimonials
        console.error("Error fetching Google reviews:", err);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-white space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Stories</span>
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            Hear directly from our valued customers about their experiences with our products and services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors flex flex-col"
            >
              <Quote className="text-cyan-400 text-4xl mb-6" />

              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {testimonial.author}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {testimonial.description}
              </p>

              {/* Divider + Author Section (sticky to bottom of card) */}
              <div className="mt-auto">
                <div className="border-t border-gray-800 mb-2"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}