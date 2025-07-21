export default function CryptoSignalSniffer() {
  const scanSignals = () => {
    console.log('📡 Crypto signals being sniffed...');
    // Hook into ETH, BSC, or EX$ chain listener
  };

  return (
    <div className="p-4 bg-slate-800 text-cyan-200 rounded-xl">
      <h2 className="text-xl font-bold mb-2">📡 Crypto Signal Sniffer</h2>
      <p>Real-time wallet and token activity monitor.</p>
      <button onClick={scanSignals} className="mt-3 bg-cyan-600 px-4 py-2 rounded">Start Scan</button>
    </div>
  );
}
