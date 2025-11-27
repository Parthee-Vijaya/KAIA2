import React from 'react';
import PropTypes from 'prop-types';

/**
 * Navigation - Top navigation bar with K.A.I.A branding and role indicator
 */
const Navigation = ({ role = 'intern', onMenuClick, onSendClick }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Menu Icon - Hidden on desktop, shown on mobile */}
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg smooth-transition md:hidden"
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

        {/* Center: Kalundborg Kommune Logo & Title */}
        <div className="flex items-center gap-0">
          {/* Logo - Rød firkant med hvidt emblem */}
          <div className="flex items-center justify-center w-16 h-16 bg-[#D40000] flex-shrink-0">
            <svg
              className="w-12 h-12 text-white"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Fem tårne med kors - varierende højder, midtertårnet højeste */}
              {/* Venstre tårn */}
              <rect x="4" y="28" width="6" height="20" fill="white" />
              <rect x="5" y="20" width="4" height="8" fill="white" />
              <line x1="7" y1="20" x2="7" y2="18" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Andet tårn fra venstre */}
              <rect x="14" y="22" width="6" height="26" fill="white" />
              <rect x="15" y="15" width="4" height="7" fill="white" />
              <line x1="17" y1="15" x2="17" y2="13" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Midtertårn (højeste) */}
              <rect x="24" y="12" width="6" height="36" fill="white" />
              <rect x="25" y="6" width="4" height="6" fill="white" />
              <line x1="27" y1="6" x2="27" y2="4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Fjerde tårn fra venstre */}
              <rect x="34" y="22" width="6" height="26" fill="white" />
              <rect x="35" y="15" width="4" height="7" fill="white" />
              <line x1="37" y1="15" x2="37" y2="13" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Højre tårn */}
              <rect x="44" y="28" width="6" height="20" fill="white" />
              <rect x="45" y="20" width="4" height="8" fill="white" />
              <line x1="47" y1="20" x2="47" y2="18" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Brystværn/battlement under tårnene - små firkanter */}
              <rect x="4" y="48" width="5" height="3" fill="white" />
              <rect x="11" y="48" width="5" height="3" fill="white" />
              <rect x="18" y="48" width="5" height="3" fill="white" />
              <rect x="25" y="48" width="5" height="3" fill="white" />
              <rect x="32" y="48" width="5" height="3" fill="white" />
              <rect x="39" y="48" width="5" height="3" fill="white" />
              <rect x="46" y="48" width="5" height="3" fill="white" />
              <rect x="53" y="48" width="5" height="3" fill="white" />
              
              {/* Tre bølgede linjer (vand) */}
              <path d="M8 54 Q18 50, 28 54 T48 54 T68 54" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M8 58 Q18 54, 28 58 T48 58 T68 58" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M8 62 Q18 58, 28 62 T48 62 T68 62" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          
          {/* Text Logo - Rødbrun tekst på hvid baggrund */}
          <div className="flex flex-col px-4 bg-white">
            <div className="text-xl font-bold leading-tight" style={{ color: '#8B2E2E', fontFamily: 'sans-serif' }}>KALUNDBORG</div>
            <div className="text-sm font-bold leading-tight" style={{ color: '#8B2E2E', fontFamily: 'sans-serif' }}>KOMMUNE</div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-300 ml-4"></div>

          {/* K.A.I.A Badge */}
          <div className="flex items-center gap-2 ml-4">
            <div className="text-lg font-bold gradient-text">K.A.I.A</div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full">
              <div className="w-1.5 h-1.5 bg-[#0056A7] rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-600">{role}</span>
            </div>
          </div>
        </div>

        {/* Right: Empty for now - can add relevant links later */}
        <div className="hidden md:flex items-center gap-6">
          {/* Reserved for future navigation items relevant to management */}
        </div>
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
