import React, { useState } from 'react';
import useSimulator from '@/hooks/useSimulator';

export default function GameOfChanceSimulator() {
  const { rollDice, spinSlot } = useSimulator();
  const [result, setResult] = useState(null);

  return (
    <div className="p-4 bg-purple-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">🎲 Game of Chance Simulator</h1>
      <div className="flex flex-col gap-2">
        <button onClick={() => setResult(rollDice())} className="btn bg-indigo-700">🎲 Roll Dice</button>
        <button onClick={() => setResult(spinSlot())} className="btn bg-pink-700">🎰 Spin Slot</button>
        {result && <p className="mt-2">Result: {result}</p>}
      </div>
    </div>
  );
}
