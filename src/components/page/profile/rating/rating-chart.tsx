import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  year: number;
  movies: number;
}

const data: DataPoint[] = [
  { year: 2021, movies: 1 },
  { year: 2022, movies: 0 },
  { year: 2023, movies: 0 },
  { year: 2024, movies: 2 },
  { year: 2025, movies: 1 },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: DataPoint;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length > 0 && payload[0].payload) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#1a2b4b] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 animate-fade-in">
        <p className="font-medium text-sm">
          {data.year}: {data.movies} Movies
        </p>
      </div>
    );
  }
  return null;
};

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: DataPoint;
}

const CustomDot: React.FC<DotProps> = ({ cx, cy, payload }) => {
  if (!cx || !cy || !payload || payload.movies <= 0) {
    return null;
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill="white"
      stroke="#ff4d94"
      strokeWidth={2}
      className="transition-all duration-300 hover:r-6"
    />
  );
};

export default function RatingsChart() {
  return (
    <div className="w-full bg-white">
      <h2 className="text-xl font-bold ml-2 mb-6">Ratings By Year</h2>
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff4d94" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ff4d94" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} />
            <YAxis
              domain={[0, 3]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              ticks={[0, 1, 2, 3]}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Area
              type="monotone"
              dataKey="movies"
              stroke="#ff4d94"
              fillOpacity={1}
              fill="url(#colorRating)"
              dot={<CustomDot />}
              activeDot={{ r: 6, fill: 'white', stroke: '#ff4d94', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
