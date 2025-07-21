export default function GamePayoutControls() {
  return (
    <div style={{ padding: "2rem", background: "#111", color: "#fff" }}>
      <h3>🎯 Payout Control</h3>
      <p>Set max payouts across slots, lottery, and raceway games.</p>
      <label>
        Max Payout %:
        <input type="number" defaultValue={5} style={{ marginLeft: "0.5rem" }} />
      </label>
    </div>
  );
}
