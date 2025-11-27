import React from 'react';
import PropTypes from 'prop-types';

/**
 * Navigation - Top navigation bar with K.A.I.A branding and role indicator
 */
const Navigation = ({ role = 'intern', onMenuClick, onSendClick }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 mb-4 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Menu Icon */}
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg smooth-transition"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Center: K.A.I.A Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold gradient-text">K.A.I.A</div>

          {/* Role Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full">
            <div className="w-2 h-2 bg-kaia-blue rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-700">{role}</span>
          </div>
        </div>

        {/* Right: Send Icon */}
        <button
          onClick={onSendClick}
          className="p-2 hover:bg-gray-100 rounded-lg smooth-transition"
          aria-label="Send"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  role: PropTypes.string,
  onMenuClick: PropTypes.func,
  onSendClick: PropTypes.func,
};

export default Navigation;
