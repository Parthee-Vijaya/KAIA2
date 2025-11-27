import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * FollowUpQuestions - Horizontal scrollable question chips
 */
const FollowUpQuestions = ({ questions, onQuestionClick }) => {
  const scrollRef = useRef(null);

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">
        Opfølgende spørgsmål:
      </h4>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar"
        style={{ scrollbarWidth: 'thin' }}
      >
        {questions.map((question, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onQuestionClick(question)}
            className="chip whitespace-nowrap flex-shrink-0"
          >
            {question}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

FollowUpQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onQuestionClick: PropTypes.func.isRequired,
};

export default FollowUpQuestions;
