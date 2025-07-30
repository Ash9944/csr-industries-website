import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';

// Stats Section
const StatsSection = () => {
    const stats = [
        { icon: Award, value: "456", label: "Products Delivered" },
        { icon: Users, value: "599", label: "Happy Customers" },
        { icon: Clock, value: "780", label: "Hours Worked" },
        { icon: Star, value: "38+", label: "Years Experience" }
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-lg opacity-90">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;