









//App.js
import React, { useState, useEffect } from "react";
import ColorSequence from "./components/ColorSequence"
import TileContainer from "./components/TileContainer"
import ResetButton from "./components/ResetButton"
import "./App.css";


function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function App() {
  const colors = [
    "red", "blue", "green", "yellow", "orange", "pink", "cyan", "purple", "lime",
  ];

  const [sequenceColors, setSequenceColors] = useState([]);
  const [tilesColors, setTilesColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [correctClicks, setCorrectClicks] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const shuffledSequence = shuffleArray(colors);
    const shuffledTiles = shuffleArray(colors);

    setSequenceColors(shuffledSequence);
    setTilesColors(shuffledTiles);
    setSelectedColors(Array(shuffledTiles.length).fill("grey"));
  }, []);

  const handleTileClick = (color, index) => {
    if (sequenceColors[correctClicks] === color) {
      setSelectedColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[index] = color;
        return newColors;
      });

      setCorrectClicks(correctClicks + 1);

      if (correctClicks + 1 === sequenceColors.length) {
        setGameOver(true);
      }
    } else {
      setSelectedColors(Array(tilesColors.length).fill("grey"));
      setCorrectClicks(0);
    }
  };

  const resetGame = () => {
    const shuffledSequence = shuffleArray(colors);
    const shuffledTiles = shuffleArray(colors);

    setSequenceColors(shuffledSequence);
    setTilesColors(shuffledTiles);
    setSelectedColors(Array(shuffledTiles.length).fill("grey"));
    setCorrectClicks(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <ColorSequence sequenceColors={sequenceColors} />
      <TileContainer
        tilesColors={tilesColors}
        selectedColors={selectedColors}
        handleTileClick={handleTileClick}
      />
      {gameOver && <h2>Congratulations! You found the sequence!</h2>}
      <ResetButton resetGame={resetGame} />
    </div>
  );
}

export default App;