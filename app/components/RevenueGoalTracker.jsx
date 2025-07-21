export default function RevenueGoalTracker() {
  return (
    <div style={{ padding: "2rem", background: "#111", color: "#0f0" }}>
      <h3>📈 Daily Revenue Tracker</h3>
      <p>Minimum target: $2,400/day from ~100 players.</p>
      <p>Current Total: <strong>$0.00</strong></p>
      <button>Refresh Stats</button>
    </div>
  );
}
