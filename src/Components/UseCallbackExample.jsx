import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("Child re-rendered!");
  return (
    <button onClick={handleClick} style={{ marginTop: "20px" }}>
      Click Me (Child)
    </button>
  );
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
        />
      </div>

      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default UseCallbackExample;