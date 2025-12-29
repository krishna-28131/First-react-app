import React, { useState, Suspense } from "react";

// 🔹 Lazy loading the heavy component
const HeavyComponent = React.lazy(() =>
  import("./components/HeavyComponent")
);

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <hr />

      {/* 🔹 Suspense required for lazy loading */}
      <Suspense fallback={<div>Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
