//ResetButton.jsx

import React from "react";

function ResetButton({ resetGame }) {
  return (
    <button onClick={resetGame} className="reset-button">
      Reset Game
    </button>
  );
}

export default ResetButton;