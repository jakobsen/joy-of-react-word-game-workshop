import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuess("");
  };

  const handleChange = (e) => {
    const newGuess = e.target.value.toUpperCase();
    if (/^[A-Z]{0,5}$/.test(newGuess)) {
      setGuess(newGuess);
    }
  };

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter uppercased word"
      />
    </form>
  );
}

export default GuessInput;
