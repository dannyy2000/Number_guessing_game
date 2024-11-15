// src/App.tsx
import React from "react";
import Game from "./components/game";

const App: React.FC = () => {
  return (
    <div style={{ position: "absolute", top: "10%", left: "30%", textAlign: "center", padding: "20px",
      border: "3px solid green",
      }}>
      <h1>Number Guesser Game</h1>
      <Game />
    </div>
  );
};

export default App;
