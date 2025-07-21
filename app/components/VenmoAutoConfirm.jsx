export default function VenmoAutoConfirm() {
  return (
    <div style={{ padding: "2rem", background: "#000", color: "#0f0" }}>
      <h3>📩 Venmo Auto-Confirm</h3>
      <p>Checks payment status and issues EX$ wallet after receiving $5+</p>
      <button>Run Payment Scan</button>
    </div>
  );
}
