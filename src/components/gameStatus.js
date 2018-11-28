import React from 'react';

export default function MsgBox(props) {

return (
  <div className="msgBox">
    <h2>The current number is: {props.gameNumber}</h2>
    <h3>Your guesses are: {props.guessedNumbers.join(', ')}</h3>
    <h3>You've guessed {props.guessedNumbers.length} times.</h3>
  </div>
);
}