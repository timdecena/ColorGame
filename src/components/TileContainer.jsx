//TileContainer.jsx

import React from "react";
import Tile from "./Tile";

function TileContainer({ tilesColors, selectedColors, handleTileClick }) {
  return (
    <div className="tile-container">
      {tilesColors.map((color, index) => (
        <Tile
          key={index}
          color={selectedColors[index] || "grey"}
          onClick={() => handleTileClick(color, index)}
        />
      ))}
    </div>
  );
}

export default TileContainer;