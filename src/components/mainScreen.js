import React from 'react';

import MsgBox from './msgBox';
import GuessInput from './guessInput';
import NewGameButton from './newGameButton'

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: this.newNumber(),
      guessCount: 0,
      guessedNumbers: [],
      currentGuess: undefined
    }
  }

  newNumber = () => Math.ceil(Math.random().toFixed(2)*100);

  //********Call this on load to define initial state?
  newGame = () => {
    const newNum = this.newNumber();
    console.log('This is newNum: ', newNum);
    this.setState(
      {gameNumber: newNum,
      guessCount: 0,
      guessedNumbers: [],
      currentGuess: undefined
      })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({currentGuess: e.target.value})
    console.log(e.target.value);
  }

  submitGuess = (e) => {
    e.preventDefault();
    this.state.guessedNumbers.push(this.state.currentGuess);
    this.setState({currentGuess: this.state.currentGuess})
    console.log(this.state.guessedNumbers);
    this.incrementCounter(e);
    // console.log('CURRENT STATE: ', this.state)
  }

  incrementCounter = (e) => {
    e.preventDefault();
    let guess = this.state.guessCount;
    guess++;
    console.log('this is guess: ', guess)
    this.setState({guessCount: guess})
  }

  render() {
    console.log('CURRENT STATE: ', this.state)
    //Change form below to a componenet that can still access state?
    return (
      <div className="mainScreen">
      {/* <button onClick={e => {e.preventDefault();this.newGame()}}>
          Generate New Number
        </button> */}

        <NewGameButton newGame={this.newGame} />
        <MsgBox state={this.state}/>
        <GuessInput submitGuess={this.submitGuess} handleChange={this.handleChange}/>
      </div>
    );
  }
}

