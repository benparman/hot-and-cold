import React from 'react';

export default function NewGameButton(props) {
  return (
    <h3 className="newGameButton white" type="click" onClick={e => {
      e.preventDefault();
      props.newGame()}}>+NEW GAME
        </h3>
  )
}