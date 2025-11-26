import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ChartViewer from './ChartViewer';
import AnalysisPanel from './AnalysisPanel';
import FollowUpQuestions from './FollowUpQuestions';

/**
 * ChatMessage - User/AI message bubble with rich content
 */
const ChatMessage = ({ message, onFollowUpClick }) => {
  const isUser = message.role === 'user';

  // Simple markdown rendering helper
  const renderMarkdown = (text) => {
    if (!text) return null;

    // Convert **bold** to <strong>
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert *italic* to <em>
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert line breaks
    html = html.replace(/\n/g, '<br />');

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`mb-4 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}
    >
      <div className={`max-w-4xl w-full ${isUser ? 'flex justify-end' : ''}`}>
        {isUser ? (
          // User Message
          <div className="chat-bubble-user">
            {message.content}
          </div>
        ) : (
          // AI Message
          <div className="space-y-4">
            <div className="chat-bubble-ai">
              <div className="prose prose-invert max-w-none">
                {renderMarkdown(message.content)}
              </div>
            </div>

            {/* Charts */}
            {message.charts && message.charts.length > 0 && (
              <div className="space-y-4">
                {message.charts.map((chartData, index) => (
                  <ChartViewer key={index} chartData={chartData} />
                ))}
              </div>
            )}

            {/* Analysis Panel */}
            {message.analysis && (
              <AnalysisPanel analysis={message.analysis} />
            )}

            {/* Follow-up Questions */}
            {message.followUp && message.followUp.length > 0 && (
              <FollowUpQuestions
                questions={message.followUp}
                onQuestionClick={onFollowUpClick}
              />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    role: PropTypes.oneOf(['user', 'ai']).isRequired,
    content: PropTypes.string.isRequired,
    charts: PropTypes.array,
    analysis: PropTypes.object,
    followUp: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onFollowUpClick: PropTypes.func,
};

export default ChatMessage;
