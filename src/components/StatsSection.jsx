import React, { useEffect, useState, useRef } from 'react';
import { Star, Award, Users, LandPlot } from 'lucide-react';
import { stats } from '../../websiteProducts.json';

// Animated Counter Component
const AnimatedNumber = ({ value, duration = 1500, startAnimation }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return; // Only start when visible

        let start = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(progress * value);
            setCount(currentCount);

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [value, duration, startAnimation]);

    return <span>{count.toLocaleString()}+</span>;
};

// Stats Section
const StatsSection = () => {
    const sectionRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);

    // Trigger animation when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect(); // Only run once
                }
            },
            { threshold: 0.3 } // Trigger when 30% of section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-r from-blue-600 to-red-400"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                {stat.icon === 'Award' && <Award className="w-8 h-8" />}
                                {stat.icon === 'Users' && <Users className="w-8 h-8" />}
                                {stat.icon === 'LandPlot' && <LandPlot className="w-8 h-8" />}
                                {stat.icon === 'Star' && <Star className="w-8 h-8" />}
                            </div>

                            {/* Animated Number with + */}
                            <h3 className="text-4xl font-bold mb-2">
                                <AnimatedNumber value={stat.value} startAnimation={startAnimation} />
                            </h3>
                            <p className="text-lg opacity-90">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
