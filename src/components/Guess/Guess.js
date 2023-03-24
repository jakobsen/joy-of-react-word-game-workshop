import React from "react";

function Guess({ guess }) {
  if (!guess) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  }

  const letters = [...guess];
  if (letters.length !== 5) {
    throw new Error("Only 5 letter guesses allowed");
  }

  return (
    <p className="guess">
      {letters.map((letter, idx) => (
        <span className="cell" key={idx}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
