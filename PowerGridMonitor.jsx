import React, { useEffect, useState } from 'react';
import usePowerStats from '@/hooks/usePowerStats';

export default function PowerGridMonitor() {
  const { getPowerUsage } = usePowerStats();
  const [stats, setStats] = useState({ cpu: 0, battery: 0, droneCharge: 0 });

  useEffect(() => {
    getPowerUsage().then(setStats);
  }, []);

  return (
    <div className="p-4 bg-black text-lime-300 rounded-xl">
      <h1 className="text-xl font-bold text-center mb-2">🔋 Power Grid Monitor</h1>
      <ul className="text-sm space-y-1">
        <li>⚡ CPU Load: {stats.cpu}%</li>
        <li>🔋 Server Battery Backup: {stats.battery}%</li>
        <li>🚁 Drone Network Charge: {stats.droneCharge}%</li>
      </ul>
    </div>
  );
}
