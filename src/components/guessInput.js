import React from 'react';

export default function GuessInput(props) {
  return (
    <div className="InputForm">
      <form onSubmit ={props.submitGuess}>
          <input name="guess" placeholder="Enter your Guess"
            onChange = {e => {
              e.preventDefault();
              props.handleChange(e);
            }}
          />
        <br></br>
        <input type="submit" value="Guess!"/>
      </form>
      <h3>Guess #{props.guessNumber}</h3>
    </div>
  )
}