import React from 'react';

export default function GuessInput(props) {
  return (
    <form onSubmit ={props.submitGuess}>
          <input placeholder="guess a number"
            onChange = {e => {
              e.preventDefault();
              props.handleChange(e);
            }}
          />
          <input type="submit" value="Guess!"/>
        </form>
  )
}