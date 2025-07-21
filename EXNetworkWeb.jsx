import React, { useEffect, useState } from 'react';
import useNetworkMap from '@/hooks/useNetworkMap';

export default function EXNetworkWeb() {
  const { getNetworkNodes } = useNetworkMap();
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    getNetworkNodes().then(setNodes);
  }, []);

  return (
    <div className="p-4 bg-black text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-3">🕸️ Exotica Network Web</h1>
      <ul className="text-sm space-y-1 max-h-60 overflow-y-scroll">
        {nodes.map((n, i) => (
          <li key={i}>
            🔗 {n.name} — Type: {n.type} — Status: {n.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
