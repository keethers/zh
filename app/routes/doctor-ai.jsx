export default function DoctorAI() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🧠 Medical Assistant</h2>
      <p>Enter symptoms and receive instant diagnostic feedback.</p>
      <textarea placeholder="Describe your symptoms..." rows={5} cols={50} />
      <br />
      <button>Get Diagnosis</button>
    </div>
  );
}
