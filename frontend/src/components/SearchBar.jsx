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
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-lg"
            aria-label="Search input"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className={`p-2 rounded-lg smooth-transition ${
              input.trim()
                ? 'bg-kaia-blue hover:bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
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
