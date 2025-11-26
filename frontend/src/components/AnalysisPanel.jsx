import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * AnalysisPanel - Three-column analysis display
 * Shows: Status nu, Scenarier, Handlingsmuligheder
 */
const AnalysisPanel = ({ analysis }) => {
  if (!analysis) return null;

  const sections = [
    {
      key: 'statusNow',
      title: 'Status nu',
      icon: '🔵',
      color: 'text-blue-400',
      data: analysis.statusNow,
    },
    {
      key: 'scenarios',
      title: 'Scenarier',
      icon: '🟡',
      color: 'text-yellow-400',
      data: analysis.scenarios,
    },
    {
      key: 'actions',
      title: 'Handlingsmuligheder',
      icon: '🟢',
      color: 'text-green-400',
      data: analysis.actions,
    },
  ];

  return (
    <div className="analysis-panel">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="analysis-section"
          >
            {/* Section Header */}
            <div className="analysis-title">
              <span className="text-2xl">{section.icon}</span>
              <h4 className={`${section.color} font-semibold`}>
                {section.title}
              </h4>
            </div>

            {/* Section Content */}
            {section.data && (
              <ul className="space-y-3 mt-3">
                {Array.isArray(section.data) ? (
                  section.data.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-kaia-text leading-relaxed"
                    >
                      {typeof item === 'string' ? (
                        <div className="pl-4 border-l-2 border-kaia-border">
                          {item}
                        </div>
                      ) : (
                        // Scenario object
                        <div className="glass-card p-3 space-y-1">
                          <div className="font-semibold text-kaia-text">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-400">
                            {item.description}
                          </div>
                          <div className="flex gap-4 text-xs mt-2">
                            <span className="text-blue-400">
                              Sandsynlighed: {item.probability}
                            </span>
                            <span className="text-yellow-400">
                              Impact: {item.impact}
                            </span>
                          </div>
                        </div>
                      )}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-kaia-text leading-relaxed pl-4 border-l-2 border-kaia-border">
                    {section.data}
                  </li>
                )}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

AnalysisPanel.propTypes = {
  analysis: PropTypes.shape({
    statusNow: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    scenarios: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    actions: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
};

export default AnalysisPanel;
