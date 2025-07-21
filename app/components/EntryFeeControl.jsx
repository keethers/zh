export default function EntryFeeControl() {
  return (
    <div style={{ padding: "2rem", background: "#111", color: "#fff" }}>
      <h3>🎟️ Entry Fee Control</h3>
      <p>Set min buy-in for slots, lottery, raceway, and table games.</p>
      <label>
        Min Entry ($):
        <input type="number" defaultValue={1} style={{ marginLeft: "0.5rem" }} />
      </label>
    </div>
  );
}
