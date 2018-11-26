import React from 'react';

import gameScreen from './gameScreen';
import guessedNumbers from './guessedNumbers';
import guessInput from './guessInput';
import msgBox from './msgBox';

export default class mainScreen extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: 55
    }
  }
  render() {
    const gameNumber = this.state.gameNumber;
    console.log(<h1>"The current number is: "{gameNumber}</h1>)

    return (
      <div className="mainScreen">
        <h2>The current number is : {gameNumber}</h2>
      </div>
    )
  }
}

