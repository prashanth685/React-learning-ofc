import React, { useState } from "react";

const Mode = () => {
  const [mode, setMode] = useState(false);

  return (
    <div
      style={{
        background: mode ? "#000" : "#fff",
        color: mode ? "#fff" : "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{mode ? "Dark Mode" : "Light Mode"}</h1>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        onClick={() => setMode((prev) => !prev)}
      >
        {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default Mode;
