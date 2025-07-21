export default function GameOddsControl() {
  return (
    <div style={{ padding: "2rem", background: "#111", color: "#0f0" }}>
      <h3>🎰 Game Odds Control</h3>
      <p>Adjust win/loss odds for each game to fine-tune system profitability.</p>
      <label>
        Slot Machine Odds (%): <input type="number" defaultValue={60} />
      </label>
      <br />
      <label>
        Blackjack Odds (%): <input type="number" defaultValue={55} />
      </label>
      <br />
      <button>Apply Changes</button>
    </div>
  );
}
