//ColorSequence.jsx

import React from "react";

function ColorSequence({ sequenceColors }) {
  return (
    <div className="color-sequence">
      {sequenceColors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "50px",
            height: "50px",
            display: "inline-block",
            margin: "5px",
          }}
        />
      ))}
    </div>
  );
}
export default ColorSequence;