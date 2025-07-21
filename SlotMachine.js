import React, { useState } from "react";

const symbols = ["🍒", "🍋", "🔔", "🍀", "7️⃣", "💎"];

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

export default function SlotMachine() {
  const [reels, setReels] = useState(["❔", "❔", "❔"]);
  const [message, setMessage] = useState("");

  const spin = () => {
    const newReels = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
    setReels(newReels);

    if (newReels.every((symbol) => symbol === newReels[0])) {
      setMessage("🎉 Jackpot! You win! 🎉");
    } else {
      setMessage("Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <div style={{ fontSize: "2em" }}>{reels.join(" | ")}</div>
      <button onClick={spin} style={{ marginTop: "20px", padding: "10px 20px" }}>
        🎰 Spin
      </button>
      <div style={{ marginTop: "15px", fontWeight: "bold" }}>{message}</div>
    </div>
  );
}
