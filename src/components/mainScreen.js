import React from 'react';

// import gameScreen from './gameScreen';
// import guessedNumbers from './guessedNumbers';
// import guessInput from './guessInput';
// import msgBox from './msgBox';
// import NewGame from './gameScreen';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: 55,
      userGuess: 50,
      guessCount: 0,
      guessedNumbers: []
    }
  }

  generateNumber = () => {
    const number = Math.random()*100;
    this.setState({gameNumber: number})
  }

  render() {
    const gameNumber = this.state.gameNumber;
    console.log(<h1>"The current number is: "{gameNumber}</h1>)

    return (
      <div className="mainScreen">
        <h2>The current number is : {gameNumber}</h2>
        <button onClick={e => {
          e.preventDefault();
          const newNum = Math.ceil(Math.random().toFixed(2)*100);
          console.log('This is newNum: ', newNum);
          this.setState({gameNumber: newNum})
        }}>Generate New Number</button>
      </div>
    );
  }
}

