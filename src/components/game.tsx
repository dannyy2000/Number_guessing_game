// src/components/Game.tsx
import React, { useState } from "react";

const Game: React.FC = () => {
  const [secretNumber, setSecretNumber] = useState<number>(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [attemptsLeft, setAttemptsLeft] = useState<number>(10);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setFeedback("Please enter a valid number between 1 and 100.");
      return;
    }

    if (numGuess === secretNumber) {
      setFeedback("Congratulations! You guessed the number!");
      setGameStatus("won");
    } else if (numGuess < secretNumber) {
      setFeedback("Too low!");
    } else {
      setFeedback("Too high!");
    }

    setAttemptsLeft((prev) => prev - 1);
    if (attemptsLeft - 1 <= 0 && numGuess !== secretNumber) {
      setFeedback(`Game Over! The secret number was ${secretNumber}.`);
      setGameStatus("lost");
    }

    setGuess("");
  };

  const restartGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setFeedback("");
    setAttemptsLeft(10);
    setGameStatus("playing");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <p>Guess the number between 1 and 100!</p>
      <p>{`Attempts Left: ${attemptsLeft}`}</p>
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        disabled={gameStatus !== "playing"}
        placeholder="Enter your guess"
        style={{ padding: "5px", marginBottom: "10px" }}
      />
      <button onClick={handleGuess} disabled={gameStatus !== "playing"}>
        Submit Guess
      </button>
      <button onClick={() => setAttemptsLeft(Math.floor(attemptsLeft*.5))}>Increase difficulty</button>
      {gameStatus !== "playing" && (
        <>
        <button onClick={restartGame} style={{ marginLeft: "10px" }}>
          Restart Game
        </button>
        
        </>
      )}
      <p style={{ marginTop: "20px" }}>{feedback}</p>
    </div>
  );
};

export default Game;
