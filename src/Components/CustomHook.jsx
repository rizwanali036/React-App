import React from "react";
import useWindowWidth from "./CustomHook";

function CustomHookExample() {
  const width = useWindowWidth();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Custom Hook Example (useWindowWidth)</h2>
      <p>Current window width: {width}px</p>
    </div>
  );
}

export default CustomHookExample;
