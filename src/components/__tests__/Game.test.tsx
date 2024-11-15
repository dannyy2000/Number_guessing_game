// src/components/__tests__/Game.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, vi, expect } from "vitest";
import Game from "../game";

describe("Number Guesser Game", () => {
  test("renders game instructions and input field", () => {
    render(<Game />);
    expect(screen.getByText(/guess the number between 1 and 100!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your guess/i)).toBeInTheDocument();
  });

  test("provides feedback when a guess is too low", () => {
    render(<Game />);
    const input = screen.getByPlaceholderText(/enter your guess/i);
    const button = screen.getByText(/submit guess/i);

    fireEvent.change(input, { target: { value: "10" } });
    fireEvent.click(button);

    expect(screen.getByText(/too low/i)).toBeInTheDocument();
  });

  test("provides feedback when a guess is too high", () => {
    render(<Game />);
    const input = screen.getByPlaceholderText(/enter your guess/i);
    const button = screen.getByText(/submit guess/i);

    fireEvent.change(input, { target: { value: "90" } });
    fireEvent.click(button);

    expect(screen.getByText(/too high/i)).toBeInTheDocument();
  });

  test("congratulates the user when the guess is correct", () => {
    vi.spyOn(global.Math, "random").mockReturnValue(.5); // Mock random number as 50

    render(<Game />);
    const input = screen.getByPlaceholderText(/enter your guess/i);
    const button = screen.getByText(/submit guess/i);

    fireEvent.change(input, { target: { value: "51" } });
    fireEvent.click(button);

    expect(screen.getByText(/congratulations! you guessed the number!/i)).toBeInTheDocument();
    vi.restoreAllMocks();
  });

  test("handles invalid input gracefully", () => {
    render(<Game />);
    const input = screen.getByPlaceholderText(/enter your guess/i);
    const button = screen.getByText(/submit guess/i);

    fireEvent.change(input, { target: { value: "abc" } });
    fireEvent.click(button);

    expect(screen.getByText(/please enter a valid number between 1 and 100./i)).toBeInTheDocument();
  });

  test("shows game over message after exhausting attempts", () => {
    vi.spyOn(global.Math, "random").mockReturnValue(0.8); // Mock random number as 80

    render(<Game />);
    const input = screen.getByPlaceholderText(/enter your guess/i);
    const button = screen.getByText(/submit guess/i);

    for (let i = 0; i < 10; i++) {
      fireEvent.change(input, { target: { value: `${i + 1}` } }); // Deliberately incorrect guesses
      fireEvent.click(button);
    }

    expect(screen.getByText(/game over! the secret number was 80./i)).toBeInTheDocument();
    vi.restoreAllMocks();
  });

  test("restarts the game when restart button is clicked", () => {
    vi.spyOn(global.Math, "random").mockReturnValue(.5); // Mock random number as 50
    render(<Game />);
    const input = screen.getByPlaceholderText(/enter your guess/i);
    const button = screen.getByText(/submit guess/i);

    fireEvent.change(input, { target: { value: "51" } });
    fireEvent.click(button);

    const restartButton = screen.getByText(/restart game/i);
    fireEvent.click(restartButton);

    expect(screen.getByText(/guess the number between 1 and 100!/i)).toBeInTheDocument();
    expect(input).toHaveValue("");
  });
});
