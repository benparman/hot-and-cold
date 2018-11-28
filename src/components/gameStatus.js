import React from 'react';

export default function GameStatus(props) {

  return (
    <div>
      <h3>Your guesses are: {props.guessedNumbers.join(', ')}</h3>
    </div>
  );
}