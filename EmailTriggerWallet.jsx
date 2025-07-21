// File: EmailTriggerWallet.jsx
import { useState } from 'react';

export default function EmailTriggerWallet() {
  const [lastPayment, setLastPayment] = useState('');
  const [walletStatus, setWalletStatus] = useState('');

  const simulateEmailCheck = () => {
    // Simulate finding a Venmo payment email
    const simulatedPayment = {
      from: 'user@venmo.com',
      amount: 25,
      credited: 50,
    };

    setLastPayment(`Received $${simulatedPayment.amount} from ${simulatedPayment.from}`);
    setWalletStatus(`Wallet created and credited with ${simulatedPayment.credited} EX$`);
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">📬 Email Payment Scanner (Test Mode)</h2>
      <button onClick={simulateEmailCheck} className="bg-green-600 px-4 py-2 rounded">
        Simulate Payment Email
      </button>
      <div className="mt-4">
        <p>{lastPayment}</p>
        <p className="text-green-400">{walletStatus}</p>
      </div>
    </div>
  );
}
