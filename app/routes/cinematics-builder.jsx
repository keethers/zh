export default function CinematicsBuilder() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🎬 Cinematics Builder</h2>
      <p>Generate videos, voices, images, and commercials using AI.</p>
      <textarea placeholder="Describe your scene or message..." rows={4} cols={50} />
      <br />
      <button>Create Media</button>
    </div>
  );
}
