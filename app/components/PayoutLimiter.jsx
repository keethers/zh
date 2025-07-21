export default function PayoutLimiter() {
  return (
    <div style={{ padding: "2rem", background: "#1a1a1a", color: "#ff0" }}>
      <h3>🛑 Payout Limiter</h3>
      <p>Prevents excess wins if too many users hit jackpot at once.</p>
      <label>
        Max payout % of intake:
        <input type="number" defaultValue={5} style={{ marginLeft: "0.5rem" }} />
      </label>
    </div>
  );
}
