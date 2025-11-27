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
 * TrendCharts - Dashboard charts showing trends
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
                // Format large numbers as "mia." or "M"
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

  const renderChart = (trend) => {
    const { type, data, config, title } = trend;

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
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis 
                dataKey={config.xKey} 
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => {
                  if (value >= 1000) return `${(value / 1000).toFixed(1)} mia.`;
                  return value.toLocaleString('da-DK');
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {config.bars.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.dataKey}
                  fill={bar.fill}
                  name={bar.name}
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
                  stackId="1"
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

  // Get icon for each trend type
  const getTrendIcon = (key) => {
    const icons = {
      populationDevelopment: '📈',
      budgetTrend: '💰',
      departmentSpending: '📊',
      debtDevelopment: '💳',
    };
    return icons[key] || '📊';
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
          {/* Label */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              {trend.title}
            </span>
          </div>

          {/* Icon */}
          <div className="mb-4 text-4xl">
            {getTrendIcon(key)}
          </div>

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

