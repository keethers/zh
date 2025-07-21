// components/DoctorModule.js
import React, { useState } from "react";

export default function DoctorModule() {
  const [symptom, setSymptom] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleCheck = () => {
    if (!symptom.trim()) return;
    setDiagnosis(`🩺 Diagnosis: Possible minor condition related to "${symptom}". Consult recommended.`);
  };

  return (
    <div style={{ background: "#002", color: "#0ff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🩺 Doctor AI Module</h3>
      <input
        type="text"
        placeholder="Enter symptom (e.g. headache, chest pain)"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        style={{ width: "80%", padding: "0.5rem", borderRadius: "0.5rem" }}
      />
      <button onClick={handleCheck} style={{ marginLeft: "1rem", background: "#0ff", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
        Diagnose
      </button>
      <p style={{ marginTop: "1rem" }}>{diagnosis}</p>
    </div>
  )
;
}
