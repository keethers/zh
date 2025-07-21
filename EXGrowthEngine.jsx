import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useSharkStats from '@/hooks/useSharkStats';

export default function EXGrowthEngine() {
  const [growthData, setGrowthData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await useSharkStats();
      setGrowthData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-blue-950 text-white rounded-xl">
      <h1 className="text-2xl font-bold text-center">EX$ Growth Engine</h1>
      <p className="text-center text-sm text-blue-300 mb-4">We started with 100 ETH. Here's what happened next…</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={growthData}>
          <XAxis dataKey="timestamp" stroke="#8884d8" />
          <YAxis stroke="#82ca9d" />
          <Tooltip />
          <Line type="monotone" dataKey="profit" stroke="#00ffcc" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
