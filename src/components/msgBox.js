import React from 'react';

export default function MsgBox(props) {

return (
  <div className="msgBox">
    <h2>The current number is: {props.state.gameNumber}</h2>
    <h3>Your guesses are: {props.state.guessedNumbers}</h3>
    <h3>You've guessed {props.state.guessCount} times.</h3>
  </div>
);
}