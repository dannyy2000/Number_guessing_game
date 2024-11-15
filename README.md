Number Guesser Game
~~~
Overview
The Number Guesser Game is a fun and interactive game where players guess a secret number between 1 and 100. The game provides feedback after each guess, indicating whether the guess is too high, too low, or correct. The player has a limited number of attempts to guess the number correctly.

The game is built with React and TypeScript and features a simple and intuitive graphical user interface (GUI).
~~~

~~~
How to Play
Start the Game:

The game begins by generating a random secret number between 1 and 100.
You have a limited number of attempts (default: 10).
Make a Guess:

Enter a number in the input field.
Click the Submit Guess button.
The game will provide feedback:
Too low: Your guess is smaller than the secret number.
Too high: Your guess is greater than the secret number.
Correct: You've guessed the secret number correctly and win the game!
Track Attempts:

The game displays the number of remaining attempts.
If you use all attempts without guessing the number, you lose the game, and the secret number is revealed.
Restart the Game:

After winning or losing, you can restart the game by clicking the Restart Game button.
Optional Features
1. Difficulty Levels
Choose a difficulty level:
Easy: 15 attempts.
Medium: 10 attempts (default).
Hard: 5 attempts.
Each level adjusts the number of allowed guesses.
~~~

~~~

2. Enhanced UI
Styled input fields and buttons for a better look and feel.
A progress bar that decreases as attempts are used.
~~~

~~~

3. Validation
Prevent invalid input:
The input must be a number between 1 and 100.
Display appropriate error messages for invalid entries.
Getting Started
Follow these instructions to set up the project on your local machine.
~~~
~~~
Prerequisites
Node.js (v14 or later)
npm or yarn
~~~


~~~
Technologies Used
React: Frontend library for building the user interface.
TypeScript: Provides type safety and improved code readability.
CSS: For styling and animations.
~~~

~~~
Future Enhancements
Add a leaderboard to store and display the best scores.
Introduce hints after a certain number of failed attempts.
Add sound effects for correct, incorrect, and game-over scenarios.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with any improvements or features.
~~~

License
This project is licensed under the MIT License. See the LICENSE file for details.

