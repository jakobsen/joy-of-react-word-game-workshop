import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleGuessChange = (e) => {
    const newGuess = e.target.value.toUpperCase();
    if (/^[A-Z]{0,5}$/.test(newGuess)) {
      setTentativeGuess(newGuess);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^[A-Z]{5}$/.test(tentativeGuess)) {
      handleSubmitGuess(tentativeGuess);
      setTentativeGuess("");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleGuessChange}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter uppercased word"
      />
    </form>
  );
}

export default GuessInput;
