export default function PromoConfig() {
  return (
    <div style={{ padding: "2rem", background: "#222", color: "#0f0" }}>
      <h3>🧾 Promo Message Config</h3>
      <p>Current Message:</p>
      <blockquote>
        “Welcome, friend… want to play the lottery? You could win this brand new Tesla.”
      </blockquote>
      <textarea rows={3} cols={60} defaultValue="Welcome, friend…" />
      <br />
      <button>Update Message</button>
    </div>
  );
}
