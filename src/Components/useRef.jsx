import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: "10px", width: "200px" }}
      />
      <br />
      <button
        onClick={handleFocus}
        style={{ marginTop: "20px", padding: "8px 16px" }}
      >
        Focus Input
      </button>
    </div>
  );
}

export default UseRef;