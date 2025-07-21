import React, { useState } from 'react';
import useEXRegister from '@/hooks/useEXRegister';

export default function EXOnboarder() {
  const { createWallet, assignStartingEX, tagReferralCode } = useEXRegister();
  const [username, setUsername] = useState('');
  const [referral, setReferral] = useState('');

  return (
    <div className="p-4 bg-green-900 text-white rounded-xl">
      <h1 className="text-2xl font-bold text-center">🚀 EX$ Onboarder</h1>
      <div className="space-y-2 mt-3">
        <input className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="input" placeholder="Referral Code (optional)" value={referral} onChange={(e) => setReferral(e.target.value)} />
        <button className="btn" onClick={() => createWallet(username)}>Create Wallet</button>
        <button className="btn" onClick={() => assignStartingEX(username, 50)}>Give 50 EX$</button>
        <button className="btn" onClick={() => tagReferralCode(username, referral)}>Apply Referral</button>
      </div>
    </div>
  );
}
