import React from "react";

function HeavyComponent() {
  console.log("🔥 HeavyComponent rendered");

  // Simulating heavy UI
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ padding: "20px", background: "#f2f2f2" }}>
      <h3>Heavy Component</h3>
      <p>This is a heavy UI section.</p>
    </div>
  );
}

// 🔹 React.memo to prevent unnecessary re-render
export default React.memo(HeavyComponent);
