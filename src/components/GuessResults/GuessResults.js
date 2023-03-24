import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((result, idx) => (
        <p className="guess" key={idx}>
          {result}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
