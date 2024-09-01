//Tile.jsx

import React from "react";

function Tile({ color, onClick }) {
  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}

export default Tile;