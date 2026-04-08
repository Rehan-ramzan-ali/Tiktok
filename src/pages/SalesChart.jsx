import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
  // Image ke mutabiq data points
  const data = [
    { date: '2026-04-01', value: 0 },
    { date: '2026-04-02', value: 0 },
    { date: '2026-04-03', value: 2 },
    { date: '2026-04-04', value: 2 },
    { date: '2026-04-05', value: 3 },
    { date: '2026-04-06', value: 1 },
    { date: '2026-04-07', value: 3 },
    { date: '2026-04-08', value: 1 },
  ];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 mt-2 p-4">
      {/* Title */}
      <h3 className="text-rose-500 font-medium text-sl mb-6">Sales Data Curve</h3>

      {/* Chart Container */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              axisLine={true} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#9ca3af' }}
              interval={1}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#9ca3af' }} 
              domain={[0, 3]}
              ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3]}
            />
            <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Line 
              type="linear" 
              dataKey="value" 
              stroke="#5c7cfa" 
              strokeWidth={2} 
              dot={{ r: 4, fill: '#fff', stroke: '#5c7cfa', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;