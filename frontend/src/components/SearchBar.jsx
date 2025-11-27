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
      <div className="glass-card rounded-xl p-4 shadow-elevation-2 hover:shadow-elevation-3 smooth-transition">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-lg focus:placeholder-gray-300"
            aria-label="Search input"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className={`p-2.5 rounded-lg smooth-transition ${
              input.trim()
                ? 'bg-gradient-primary hover:shadow-elevation-2 text-white hover:scale-105 active:scale-95'
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
