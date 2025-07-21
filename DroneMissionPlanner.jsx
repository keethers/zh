import React, { useState } from 'react';
import useFlightPath from '@/hooks/useFlightPath';

export default function DroneMissionPlanner() {
  const [waypoints, setWaypoints] = useState([]);
  const { addWaypoint, uploadRoute, executeMission } = useFlightPath();

  const handleAdd = () => {
    const point = prompt('Enter GPS coordinate:');
    if (point) {
      addWaypoint(point);
      setWaypoints(prev => [...prev, point]);
    }
  };

  return (
    <div className="p-4 bg-blue-950 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-2">🗺️ Mission Planner</h1>
      <ul className="text-sm mb-3">
        {waypoints.map((wp, i) => <li key={i}>📍 {wp}</li>)}
      </ul>
      <div className="flex flex-col items-center gap-2">
        <button className="btn" onClick={handleAdd}>➕ Add Waypoint</button>
        <button className="btn" onClick={uploadRoute}>📤 Upload Route</button>
        <button className="btn bg-green-600" onClick={executeMission}>🚁 Launch Mission</button>
      </div>
    </div>
  );
}
