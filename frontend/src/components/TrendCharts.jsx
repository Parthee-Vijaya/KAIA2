import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/**
 * TrendCharts - Dashboard charts showing trends with key insights
 * Forbedret med moderne ikoner, insights, statistikker og alerts
 */
const TrendCharts = ({ trends }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
          <p className="text-sm font-semibold text-gray-900 mb-3">{label}</p>
          <div className="space-y-2">
            {payload.map((entry, index) => {
              let formattedValue = entry.value;
              if (typeof entry.value === 'number') {
                if (entry.value >= 1000) {
                  formattedValue = `${(entry.value / 1000).toFixed(1)} mia.`;
                } else if (entry.value >= 1) {
                  formattedValue = entry.value.toLocaleString('da-DK');
                } else {
                  formattedValue = entry.value.toFixed(2);
                }
              }
              return (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-gray-700">{entry.name}:</span>
                  <span className="text-sm font-semibold text-gray-900">{formattedValue}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  };

  // Moderne SVG ikoner - ensartet stil
  const getTrendIcon = (category, key) => {
    const iconClass = "w-8 h-8 text-gray-600";
    
    if (category === 'population' || key.includes('population')) {
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    } else if (category === 'budget' || key.includes('budget')) {
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    } else if (category === 'economy' || key.includes('debt') || key.includes('revenue')) {
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    } else if (category === 'employment' || key.includes('unemployment')) {
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
    
    // Default chart icon
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    );
  };

  const getAlertBadge = (alert) => {
    if (!alert) return null;
    
    const alertConfig = {
      error: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: '⚠️', label: 'Kritisk' },
      warning: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: '⚠️', label: 'Advarsel' },
      success: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: '✓', label: 'Positiv' },
    };
    
    const config = alertConfig[alert] || alertConfig.warning;
    
    return (
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text} ${config.border} border`}>
        <span>{config.icon}</span>
        <span>{config.label}</span>
      </div>
    );
  };

  const renderChart = (trend) => {
    const { type, data, config } = trend;

    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis 
                dataKey={config.xKey} 
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                tick={{ fill: '#6B7280' }}
                tickFormatter={(value) => {
                  if (value >= 1000) return `${(value / 1000).toFixed(1)} mia.`;
                  return value.toLocaleString('da-DK');
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                iconType="line"
              />
              {config.lines.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={line.stroke}
                  name={line.name}
                  strokeWidth={2.5}
                  dot={{ fill: line.stroke, r: 3 }}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis 
                dataKey={config.xKey} 
                stroke="#6B7280"
                style={{ fontSize: '11px' }}
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                stroke="#6B7280"
                style={{ fontSize: '11px' }}
                tick={{ fill: '#6B7280' }}
                tickFormatter={(value) => {
                  if (value >= 1000) return `${(value / 1000).toFixed(1)} mia.`;
                  return value.toLocaleString('da-DK');
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
              />
              {config.bars.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.dataKey}
                  fill={bar.fill}
                  name={bar.name}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis 
                dataKey={config.xKey} 
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                stroke="#9CA3AF"
                style={{ fontSize: '11px' }}
                tick={{ fill: '#6B7280' }}
                tickFormatter={(value) => {
                  if (value >= 1000) return `${(value / 1000).toFixed(1)} mia.`;
                  return value.toLocaleString('da-DK');
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                iconType="square"
              />
              {config.areas.map((area, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={area.dataKey}
                  stackId={area.stackId || "1"}
                  stroke={area.stroke}
                  fill={area.fill}
                  name={area.name}
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {Object.entries(trends).map(([key, trend], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
        >
          {/* Header med label, alert og icon */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex items-center justify-center">
                {getTrendIcon(trend.category, key)}
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-2">
                  {trend.title}
                </span>
                {trend.alert && (
                  <div className="mt-1">
                    {getAlertBadge(trend.alert)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Key Insights */}
          {trend.insights && (
            <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Nuværende</p>
                  <p className="text-sm font-semibold text-gray-900">{trend.insights.current}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Ændring</p>
                  <p className="text-sm font-semibold text-gray-900">{trend.insights.change}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Prognose</p>
                  <p className="text-sm font-semibold text-gray-900">{trend.insights.forecast}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Key Takeaway</p>
                  <p className="text-sm font-semibold text-gray-900">{trend.insights.takeaway}</p>
                </div>
              </div>
            </div>
          )}

          {/* Description og Importance */}
          {trend.description && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">{trend.description}</p>
              {trend.importance && (
                <p className="text-xs text-gray-500 italic">💡 {trend.importance}</p>
              )}
            </div>
          )}

          {/* Statistikker */}
          {trend.stats && (
            <div className="mb-4 flex flex-wrap gap-3">
              {trend.stats.average && (
                <div className="px-3 py-1.5 bg-blue-50 rounded-lg">
                  <p className="text-xs text-gray-500">Gennemsnit</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {typeof trend.stats.average === 'number' && trend.stats.average >= 1000
                      ? `${(trend.stats.average / 1000).toFixed(1)} mia.`
                      : trend.stats.average}
                  </p>
                </div>
              )}
              {trend.stats.peak && (
                <div className="px-3 py-1.5 bg-red-50 rounded-lg">
                  <p className="text-xs text-gray-500">Peak</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {typeof trend.stats.peak === 'number' && trend.stats.peak >= 1000
                      ? `${(trend.stats.peak / 1000).toFixed(1)} mia.`
                      : trend.stats.peak}
                  </p>
                </div>
              )}
              {trend.stats.trough && (
                <div className="px-3 py-1.5 bg-green-50 rounded-lg">
                  <p className="text-xs text-gray-500">Laveste</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {typeof trend.stats.trough === 'number' && trend.stats.trough >= 1000
                      ? `${(trend.stats.trough / 1000).toFixed(1)} mia.`
                      : trend.stats.trough}
                  </p>
                </div>
              )}
              {trend.stats.changePercent && (
                <div className="px-3 py-1.5 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Ændring</p>
                  <p className={`text-sm font-semibold ${
                    trend.stats.changePercent > 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {trend.stats.changePercent > 0 ? '+' : ''}{trend.stats.changePercent}%
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Chart */}
          <div className="mt-6">
            {renderChart(trend)}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

TrendCharts.propTypes = {
  trends: PropTypes.object.isRequired,
};

export default TrendCharts;
