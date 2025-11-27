import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ChartViewer from './ChartViewer';
import AnalysisPanel from './AnalysisPanel';
import FollowUpQuestions from './FollowUpQuestions';
import MarkdownRenderer from './MarkdownRenderer';

/**
 * ChatMessage - User/AI message bubble with rich content (Perplexity-style)
 */
const ChatMessage = ({ message, onFollowUpClick }) => {
  const isUser = message.role === 'user';
  const [copied, setCopied] = useState(false);

  // Format timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });
  };

  // Copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`mb-8 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}
    >
      {isUser ? (
        // User Message - Right aligned with gradient
        <div className="max-w-2xl w-full">
          <motion.div
            className="bg-gradient-primary text-white px-5 py-3 rounded-2xl rounded-tr-sm shadow-elevation-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'relative',
            }}
          >
            {message.content}
            {/* Tail pointer */}
            <div
              className="absolute right-0 bottom-0 w-0 h-0"
              style={{
                border: '8px solid transparent',
                borderLeftColor: '#004085',
                borderBottom: 'none',
                transform: 'translateX(100%)',
              }}
            />
          </motion.div>
          {message.timestamp && (
            <div className="text-xs text-gray-400 mt-1 text-right px-1">
              {formatTime(message.timestamp)}
            </div>
          )}
        </div>
      ) : (
        // AI Message - Left aligned with rich content
        <div className="max-w-5xl w-full group">
          <motion.div
            className="glass-card-strong px-6 py-5 rounded-2xl rounded-tl-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              borderLeft: '4px solid #0056A7',
            }}
          >
            {/* Copy button - appears on hover */}
            <div className="flex justify-end mb-2">
              <button
                onClick={handleCopy}
                className={`opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-lg smooth-transition ${
                  copied ? 'opacity-100' : ''
                }`}
                aria-label="Kopiér svar"
                title={copied ? 'Kopieret!' : 'Kopiér'}
              >
                {copied ? (
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Markdown Content */}
            <MarkdownRenderer content={message.content} />

            {/* Sources */}
            {message.sources && message.sources.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h5 className="text-sm font-semibold text-gray-600 mb-3">Kilder:</h5>
                <div className="flex flex-wrap gap-2">
                  {message.sources.map((source, index) => (
                    <motion.a
                      key={index}
                      href={typeof source === 'string' ? '#' : source.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm smooth-transition border border-gray-200 hover:shadow-elevation-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="w-4 h-4 text-kaia-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {typeof source === 'string' ? source : source.title || `Kilde ${index + 1}`}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Timestamp */}
          {message.timestamp && (
            <div className="text-xs text-gray-400 mt-1 px-1">
              {formatTime(message.timestamp)}
            </div>
          )}

          {/* Charts */}
          {message.charts && message.charts.length > 0 && (
            <div className="space-y-6 mt-6">
              {message.charts.map((chartData, index) => (
                <ChartViewer key={index} chartData={chartData} />
              ))}
            </div>
          )}

          {/* Analysis Panel */}
          {message.analysis && (
            <div className="mt-6">
              <AnalysisPanel analysis={message.analysis} />
            </div>
          )}

          {/* Follow-up Questions */}
          {message.followUp && message.followUp.length > 0 && (
            <div className="mt-6">
              <FollowUpQuestions
                questions={message.followUp}
                onQuestionClick={onFollowUpClick}
              />
            </div>
          )}
        </div>
      )}
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
