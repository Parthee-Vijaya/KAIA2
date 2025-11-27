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
      color: 'text-blue-600',
      data: analysis.statusNow,
    },
    {
      key: 'scenarios',
      title: 'Scenarier',
      icon: '🟡',
      color: 'text-yellow-600',
      data: analysis.scenarios,
    },
    {
      key: 'actions',
      title: 'Handlingsmuligheder',
      icon: '🟢',
      color: 'text-green-600',
      data: analysis.actions,
    },
  ];

  return (
    <motion.div
      className="analysis-panel glass-card rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
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
            <div className="analysis-title mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                  section.key === 'statusNow' ? 'bg-blue-50' :
                  section.key === 'scenarios' ? 'bg-yellow-50' :
                  'bg-green-50'
                }`}>
                  <span>{section.icon}</span>
                </div>
                <h4 className={`${section.color} font-semibold text-lg`}>
                  {section.title}
                </h4>
              </div>
            </div>

            {/* Section Content */}
            {section.data && (
              <ul className="space-y-3 mt-3">
                {Array.isArray(section.data) ? (
                  section.data.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 leading-relaxed"
                    >
                      {typeof item === 'string' ? (
                        <div className="pl-4 border-l-3 border-gray-300 hover:border-gray-400 smooth-transition">
                          {item}
                        </div>
                      ) : (
                        // Scenario object
                        <motion.div
                          className="bg-gray-50 border border-gray-200 p-3 space-y-1 rounded-lg hover:shadow-elevation-1 smooth-transition"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="font-semibold text-gray-900">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-600">
                            {item.description}
                          </div>
                          <div className="flex gap-4 text-xs mt-2">
                            <span className="text-blue-600 font-medium">
                              Sandsynlighed: {item.probability}
                            </span>
                            <span className="text-yellow-600 font-medium">
                              Impact: {item.impact}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-300">
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
