import React, { useEffect, useState } from 'react';
import useAlertFeed from '@/hooks/useAlertFeed';

export default function AlertTower5150() {
  const [alerts, setAlerts] = useState([]);
  const { fetchAlerts } = useAlertFeed();

  useEffect(() => {
    fetchAlerts().then(setAlerts);
  }, []);

  return (
    <div className="p-4 bg-red-950 text-white rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-3">🚨 Alert Tower 5150</h1>
      <ul className="text-sm space-y-1 max-h-64 overflow-y-scroll">
        {alerts.map((a, i) => (
          <li key={i} className="border-b border-red-800 py-1">
            [{a.time}] {a.level.toUpperCase()}: {a.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
