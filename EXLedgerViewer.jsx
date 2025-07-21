import React, { useEffect, useState } from 'react';
import useLedger from '@/hooks/useLedger';

export default function EXLedgerViewer() {
  const [ledgerData, setLedgerData] = useState([]);
  const { fetchLedger } = useLedger();

  useEffect(() => {
    fetchLedger().then(setLedgerData);
  }, []);

  return (
    <div className="mt-6 bg-gray-800 p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-2">📒 EX$ Ledger</h2>
      <ul className="text-sm text-gray-300 max-h-64 overflow-y-scroll">
        {ledgerData.map((entry, i) => (
          <li key={i} className="border-b border-gray-600 py-1">
            {entry.timestamp} — {entry.user} → {entry.amount} EX$ ({entry.reason})
          </li>
        ))}
      </ul>
    </div>
  );
}
