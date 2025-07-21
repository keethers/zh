export default function TradingStrategyConfig() {
  return (
    <div style={{ padding: "2rem", background: "#000814", color: "#00ffcc" }}>
      <h3>📊 Shark Trader Strategy</h3>
      <p>Set compounding logic, risk levels, and shutdown thresholds.</p>
      <label>
        Daily Profit Target: <input type="number" defaultValue={1000} />
      </label>
      <br />
      <label>
        Max Loss: <input type="number" defaultValue={50} />
      </label>
      <br />
      <button>Save Strategy</button>
    </div>
  );
}
