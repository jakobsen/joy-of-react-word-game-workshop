import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  const helperArray = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {helperArray.map((idx) => (
        <Guess className="guess" key={idx} guess={guesses[idx]} />
      ))}
    </div>
  );
}

export default GuessResults;
