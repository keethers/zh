export default function SharkTraderStatus() {
  return (
    <div style={{ padding: "2rem", background: "#001", color: "#0ff" }}>
      <h3>🦈 Shark Trader Mode: ACTIVE</h3>
      <p>Trust Wallet connected with $400</p>
      <ul>
        <li>🎯 Profit Target: $1,000/day</li>
        <li>🛑 Auto Shutdown if Loss > $50</li>
        <li>♻️ Profits auto-compound (no cap)</li>
        <li>📦 Storage: ETH/USDT in wallet</li>
      </ul>
    </div>
  );
}
