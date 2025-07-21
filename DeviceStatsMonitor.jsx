import React, { useEffect, useState } from 'react';
import useDeviceStats from '@/hooks/useDeviceStats';

export default function DeviceStatsMonitor() {
  const [stats, setStats] = useState({});
  const { getBatteryLevel, getSignalStrength, getLocation, getUptime } = useDeviceStats();

  useEffect(() => {
    const fetchStats = async () => {
      setStats({
        battery: await getBatteryLevel(),
        signal: await getSignalStrength(),
        location: await getLocation(),
        uptime: await getUptime()
      });
    };
    fetchStats();
  }, []);

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-lg">
      <h1 className="text-xl font-bold mb-2 text-center">📊 Device Status Monitor</h1>
      <ul className="text-sm space-y-1">
        <li>🔋 Battery: {stats.battery}%</li>
        <li>📶 Signal: {stats.signal}</li>
        <li>📍 Location: {stats.location}</li>
        <li>⏱️ Uptime: {stats.uptime} mins</li>
      </ul>
    </div>
  );
}
