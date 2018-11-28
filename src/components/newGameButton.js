import React from 'react';

export default function NewGameButton(props) {
  return (
    <button onClick={e => {e.preventDefault();props.newGame()}}>
          New Game
        </button>
  )
}