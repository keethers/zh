import React, { useEffect, useState } from 'react';
import useAdminStats from '@/hooks/useAdminStats';

export default function OwnerAnalyticsHQ() {
  const { fetchDashboardStats } = useAdminStats();
  const [stats, setStats] = useState({ users: 0, conversion: 0, heatmap: [] });

  useEffect(() => {
    fetchDashboardStats().then(setStats);
  }, []);

  return (
    <div className="p-4 bg-slate-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">📊 Owner Analytics HQ</h1>
      <p>👥 Active Users: {stats.users}</p>
      <p>💡 Conversion Rate: {stats.conversion}%</p>
      <h2 className="mt-3 font-semibold">🔥 Revenue Heatmap</h2>
      <ul className="text-xs mt-1">
        {stats.heatmap.map((day, i) => (
          <li key={i}>{day.day}: ${day.value}</li>
        ))}
      </ul>
    </div>
  );
}
