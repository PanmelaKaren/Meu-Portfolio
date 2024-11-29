import React, { useState } from 'react';
import "../styles/Game.css";

const Game = () => {
  const [secret, setSecret] = useState(generateSecret());
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState('');

  function generateSecret() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Número de 4 dígitos
  }

  const checkGuess = (guess) => {
    let bulls = 0, cows = 0;
    guess.split('').forEach((digit, i) => {
      if (digit === secret[i]) bulls++;
      else if (secret.includes(digit)) cows++;
    });
    return { bulls, cows };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = checkGuess(input);
    setGuesses([{ guess: input, ...result }, ...guesses]);
    setInput('');
  };

  const showSecret = () => {
    alert(`A combinação secreta é: ${secret}`);
  };

  return (
    <div className="game">
      <h1>Jogo Senha</h1>
      <button onClick={showSecret}>Mostrar combinação secreta</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength="4"
          placeholder="Digite sua tentativa"
        />
        <button type="submit">Enviar</button>
      </form>
      <ul className="guess-list">
        {guesses.map((g, index) => (
          <li key={index}>
            <span>{g.guess}</span> - Bulls: {g.bulls}, Cows: {g.cows}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
