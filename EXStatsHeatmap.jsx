import React, { useEffect, useState } from 'react';
import useStats from '@/hooks/useStats';

export default function EXStatsHeatmap() {
  const [heatData, setHeatData] = useState([]);
  const { fetchCasinoHeat } = useStats();

  useEffect(() => {
    fetchCasinoHeat().then(setHeatData);
  }, []);

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-lg">
      <h1 className="text-xl font-bold text-center mb-3">📊 Live EX$ Activity Heatmap</h1>
      <ul className="space-y-1 text-sm max-h-60 overflow-y-scroll">
        {heatData.map((entry, i) => (
          <li key={i} className="border-b border-gray-700 pb-1">
            {entry.zone} — {entry.activity} plays — {entry.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}
