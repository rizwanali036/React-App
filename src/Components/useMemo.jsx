import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const doubleCount = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        backgroundColor: theme === "light" ? "#f4f4f4" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "40px",
      }}
    >
      <h2>Count: {count}</h2>
      <h3>Double: {doubleCount}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginLeft: "10px" }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default UseMemo;