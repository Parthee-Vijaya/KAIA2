import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * SearchBar - Chat input component with submit functionality
 */
const SearchBar = ({ onSubmit, placeholder = 'spørg mig...' }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto mb-6">
      <div className="glass-card p-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-kaia-text placeholder-gray-500 text-lg"
            aria-label="Search input"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className={`p-2 rounded-lg smooth-transition ${
              input.trim()
                ? 'bg-kaia-blue hover:bg-blue-600 text-white'
                : 'bg-kaia-card text-gray-500 cursor-not-allowed'
            }`}
            aria-label="Submit question"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
