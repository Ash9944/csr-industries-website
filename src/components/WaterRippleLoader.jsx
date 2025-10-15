import { motion } from 'framer-motion';

const WaterRippleLoader = ({
    size = 'medium',
    color = 'blue',
    text = '',
    fullScreen = false
}) => {
    // Size configurations
    const sizes = {
        small: { container: 60, ripple: 40 },
        medium: { container: 100, ripple: 70 },
        large: { container: 140, ripple: 100 }
    };

    // Color configurations
    const colors = {
        blue: 'rgba(59, 130, 246, 0.6)',
        purple: 'rgba(168, 85, 247, 0.6)',
        cyan: 'rgba(34, 211, 238, 0.6)',
        green: 'rgba(34, 197, 94, 0.6)',
        red: 'rgba(239, 68, 68, 0.6)',
        gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.6))'
    };

    const { container, ripple } = sizes[size] || sizes.medium;
    const rippleColor = colors[color] || colors.blue;

    // Animation variants for ripples
    const rippleVariants = {
        initial: { scale: 0, opacity: 0.8 },
        animate: {
            scale: [0, 1.5, 2],
            opacity: [0.8, 0.4, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut'
            }
        }
    };

    const containerContent = (
        <div className="flex flex-col items-center justify-center gap-6">
            {/* Ripple Container */}
            <div
                className="relative flex items-center justify-center"
                style={{ width: container, height: container }}
            >
                {/* Multiple ripple circles */}
                {[0, 0.4, 0.8, 1.2].map((delay, index) => (
                    <motion.div
                        key={index}
                        variants={rippleVariants}
                        initial="initial"
                        animate="animate"
                        style={{
                            position: 'absolute',
                            width: ripple,
                            height: ripple,
                            borderRadius: '50%',
                            border: `3px solid ${rippleColor}`,
                            background: color === 'gradient' ? rippleColor : 'transparent'
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                            delay: delay
                        }}
                    />
                ))}

                {/* Center dot */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                    style={{
                        width: ripple / 4,
                        height: ripple / 4,
                        borderRadius: '50%',
                        background: color === 'gradient'
                            ? 'linear-gradient(135deg, #3b82f6, #a855f7)'
                            : rippleColor,
                        boxShadow: `0 0 20px ${rippleColor}`
                    }}
                />
            </div>

            {/* Loading Text */}
            {text && (
                <motion.p
                    animate={{
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                    className="text-gray-300 text-lg font-medium"
                >
                    {text}
                </motion.p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                {containerContent}
            </div>
        );
    }

    return containerContent;
};

export default WaterRippleLoader;