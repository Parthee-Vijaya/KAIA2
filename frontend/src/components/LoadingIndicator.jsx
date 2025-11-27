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
      className="flex justify-start mb-8"
    >
      <div className="bg-white border border-gray-200 px-6 py-5 rounded-2xl rounded-tl-sm shadow-sm max-w-5xl w-full">
        <div className="flex items-center gap-2">
          {/* Perplexity-style 3 dots animation */}
          <div className="flex gap-1.5">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                variants={dotVariants}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: index * 0.15,
                }}
                className="w-2 h-2 bg-kaia-blue rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingIndicator;
