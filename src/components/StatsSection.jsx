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

    return <span>{count.toLocaleString()} +</span>;
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
            className="py-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0369a1 100%)' }}
        >
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center text-white">
                            <div className="w-16 h-16 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                {stat.icon === 'Award' && <Award className="w-7 h-7" />}
                                {stat.icon === 'Users' && <Users className="w-7 h-7" />}
                                {stat.icon === 'LandPlot' && <LandPlot className="w-7 h-7" />}
                                {stat.icon === 'Star' && <Star className="w-7 h-7" />}
                            </div>
                            <h3 className="text-4xl font-black mb-1 tracking-tight">
                                <AnimatedNumber value={stat.value} startAnimation={startAnimation} />
                            </h3>
                            <p className="text-sm text-blue-100 font-medium uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
