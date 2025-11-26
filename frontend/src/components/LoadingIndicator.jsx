import React from 'react';
import { motion } from 'framer-motion';

/**
 * LoadingIndicator - Typing/loading animation with pulsing dots
 */
const LoadingIndicator = () => {
  const dotVariants = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="glass-card px-6 py-4 max-w-4xl mb-4"
    >
      <div className="flex items-center gap-3">
        {/* Animated Dots */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex gap-1"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={dotVariants}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="w-2 h-2 bg-kaia-blue rounded-full"
            />
          ))}
        </motion.div>

        {/* Text */}
        <span className="text-kaia-text text-sm">K.A.I.A tænker...</span>
      </div>
    </motion.div>
  );
};

export default LoadingIndicator;
