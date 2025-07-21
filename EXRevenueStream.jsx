import React, { useEffect, useState } from 'react';
import useFinance from '@/hooks/useFinance';

export default function EXRevenueStream() {
  const { getRevenueData } = useFinance();
  const [revenue, setRevenue] = useState({ today: 0, week: 0, tx: [] });

  useEffect(() => {
    getRevenueData().then(setRevenue);
  }, []);

  return (
    <div className="p-4 bg-emerald-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">💰 EX$ Revenue Stream</h1>
      <p>📅 Today: ${revenue.today}</p>
      <p>📈 This Week: ${revenue.week}</p>
      <h2 className="mt-2 text-sm font-semibold">Latest Transactions:</h2>
      <ul className="text-xs max-h-40 overflow-y-scroll">
        {revenue.tx.map((t, i) => (
          <li key={i}>💸 {t.user} sent {t.amount} EX$ at {t.time}</li>
        ))}
      </ul>
    </div>
  );
}
