import React, { useState } from "react";

function Child({ count, onIncrement }) {
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={onIncrement}>Increase Count</button>
    </div>
  );
}

function LiftingStateUpExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Lifting State Up Example</h2>
      <Child count={count} onIncrement={handleIncrement} />
      <Child count={count} onIncrement={handleIncrement} />
    </div>
  );
}

export default LiftingStateUpExample;