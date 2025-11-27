import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * KeyMetricsCards - Dashboard cards showing key economic metrics
 */
const KeyMetricsCards = ({ metrics }) => {
  const getTrendIcon = (trend) => {
    if (trend === 'up') {
      return (
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    } else if (trend === 'down') {
      return (
        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {Object.entries(metrics).map(([key, metric], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
        >
          {/* Label */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              {metric.label}
            </span>
          </div>

          {/* Icon */}
          <div className="mb-4 text-4xl">
            {metric.icon}
          </div>
          
          {/* Main Value */}
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gray-900">{metric.value}</span>
              {metric.unit && (
                <span className="text-lg font-medium text-gray-500">{metric.unit}</span>
              )}
            </div>
          </div>

          {/* Trend */}
          <div className="flex items-center gap-2 mb-3">
            {getTrendIcon(metric.trend)}
            <span className={`text-sm font-medium ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.change}
            </span>
            <span className="text-sm text-gray-500">{metric.period}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

KeyMetricsCards.propTypes = {
  metrics: PropTypes.object.isRequired,
};

export default KeyMetricsCards;

