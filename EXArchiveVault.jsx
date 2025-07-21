import React, { useEffect, useState } from 'react';
import useVault from '@/hooks/useVault';

export default function EXArchiveVault() {
  const { getStoredData } = useVault();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getStoredData().then(setRecords);
  }, []);

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-3">📁 EX$ Archive Vault</h1>
      <ul className="text-sm max-h-64 overflow-y-scroll space-y-1">
        {records.map((entry, i) => (
          <li key={i} className="border-b border-gray-700 pb-1">
            {entry.type} – {entry.timestamp} – {entry.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
