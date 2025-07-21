export default function NotaryModule() {
  return (
    <div style={{ padding: "2rem", background: "#110033", color: "#fff" }}>
      <h3>📄 Notary Module</h3>
      <p>Digitally notarize any document uploaded to the system.</p>
      <input type="file" />
      <br />
      <button>Notarize</button>
    </div>
  );
}
