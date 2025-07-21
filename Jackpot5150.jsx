import React, { useState } from 'react';
import useJackpotSystem from '@/hooks/useJackpotSystem';

export default function Jackpot5150() {
  const [winner, setWinner] = useState(null);
  const { rollJackpot, triggerPayout, animateTesla } = useJackpotSystem();

  const handleDraw = async () => {
    const result = await rollJackpot();
    setWinner(result);
    animateTesla();
    if (result.win) triggerPayout(result.address);
  };

  return (
    <div className="p-4 bg-red-950 text-white rounded-xl text-center">
      <h1 className="text-3xl font-black text-yellow-400">5150 JACKPOT</h1>
      <p className="text-sm mb-3 text-gray-300">Spin for the Tesla. Win or cry.</p>
      <button className="btn mb-4" onClick={handleDraw}>Draw Now</button>
      {winner && (
        <div className="text-green-400 mt-3">
          🎉 Winner: {winner.address} — Prize: {winner.win ? 'TESLA' : 'Try Again'}
        </div>
      )}
    </div>
  );
}
