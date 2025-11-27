import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * CategorySection - Expandable category with questions
 */
const CategorySection = ({ category, isExpanded, onToggle, onQuestionClick }) => {
  // Map category IDs to colors (hex values)
  const categoryColorMap = {
    'budget-economy': '#3B82F6',      // Blue
    'social-services': '#10B981',      // Green
    'reforms-legislation': '#8B5CF6',  // Purple
    'analysis-forecasting': '#F59E0B', // Amber
    'hr-personnel': '#EC4899',         // Pink
    'economic-analysis': '#06B6D4',   // Cyan
  };

  const categoryColor = categoryColorMap[category.id] || '#3B82F6';

  return (
    <motion.div
      className={`category-section ${isExpanded ? 'category-section-active' : ''}`}
      style={isExpanded ? {
        borderLeft: `4px solid ${categoryColor}`,
      } : {}}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Category Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${categoryColor} 0%, ${categoryColor}dd 100%)`,
            }}
          >
            <span role="img" aria-label={category.title}>
              {category.icon}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {category.title}
          </h3>
        </div>
        <motion.svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      {/* Questions List */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2">
              {category.questions.map((question, index) => (
                <motion.li
                  key={question.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => onQuestionClick(question.id, question.text)}
                    className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg smooth-transition text-gray-900 hover:shadow-sm hover:border-gray-300"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {question.text}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

CategorySection.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onQuestionClick: PropTypes.func.isRequired,
};

export default CategorySection;
