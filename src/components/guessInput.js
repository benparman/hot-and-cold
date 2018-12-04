import React from 'react';

export default function GuessInput(props) {
  return (
    <div className="InputForm">
      <form onSubmit ={props.submitGuess}>
          <input className="formInput" name="guess" placeholder="Enter your Guess"
            onChange = {e => {
              e.preventDefault();
              props.handleChange(e);
            }}
          />
        <br></br>
        <input className="SubmitButton formInput" type="submit" value="Guess!"/>
      </form>
      <h3>Guess # <span className="OrangeText">{props.guessNumber}</span></h3>
    </div>
  )
}