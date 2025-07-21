import GamePayoutControls from "../components/GamePayoutControls";

export default function OwnerDashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📊 Owner Dashboard</h2>
      <p>Control payouts, game odds, and clone behavior from one place.</p>
      <GamePayoutControls />
    </div>
  );

}
