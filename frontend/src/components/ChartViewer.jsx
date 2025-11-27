import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

/**
 * ChartViewer - Renders various chart types using Recharts
 */
const ChartViewer = ({ chartData }) => {
  if (!chartData || !chartData.data) {
    return null;
  }

  const { type, title, data, config } = chartData;

  // Dark theme colors for charts
  const COLORS = [
    '#3B82F6', // blue
    '#10B981', // green
    '#F59E0B', // amber
    '#EF4444', // red
    '#8B5CF6', // purple
    '#EC4899', // pink
    '#14B8A6', // teal
    '#F97316', // orange
  ];

  // Custom tooltip style
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-sm font-semibold text-gray-900 mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm text-gray-700" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey={config.xKey} stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {config.lines.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={line.stroke || COLORS[index]}
                  name={line.name}
                  strokeWidth={2}
                  dot={{ fill: line.stroke || COLORS[index] }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey={config.xKey} stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {config.bars.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.dataKey}
                  fill={bar.fill || COLORS[index]}
                  name={bar.name}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey={config.xKey} stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {config.areas.map((area, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={area.dataKey}
                  stackId="1"
                  stroke={area.stroke || COLORS[index]}
                  fill={area.fill || COLORS[index]}
                  name={area.name}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        return <p className="text-gray-700">Unsupported chart type: {type}</p>;
    }
  };

  return (
    <div className="chart-container my-6">
      {title && (
        <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
      )}
      <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
        {renderChart()}
      </div>
    </div>
  );
};

ChartViewer.propTypes = {
  chartData: PropTypes.shape({
    type: PropTypes.oneOf(['line', 'bar', 'pie', 'area']).isRequired,
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
    config: PropTypes.object.isRequired,
  }).isRequired,
};

export default ChartViewer;
