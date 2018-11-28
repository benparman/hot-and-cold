import React from 'react';
import GameStatus from './gameStatus';
import GuessInput from './guessInput';
import ResultMessage from './resultMessage';
import NewGameButton from './newGameButton';
import {newNumber, compareNumbers} from './utils';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: newNumber(),
      guessedNumbers: [],
      currentGuess: undefined
    }
  }
//convert input string-number to a number before comparison
//validate input for number only 0-99 or no more than 2 digits
//print error on screen in present (ie must enter numbers only)
  newGame = () => {  //********Call this on load to define initial state?
    const newNum = newNumber();
    console.log('This is newNum: ', newNum);
    this.setState(
      {gameNumber: newNum,
      guessCount: 0,
      guessedNumbers: [],
      currentGuess: undefined,
      resultMessage: '',
      resultColor: ''
    })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({currentGuess: e.target.value})
    console.log(e.target.value);
  }

  submitGuess = (e) => {
    e.preventDefault();
    const input = e.target.guess;
    const feedback = compareNumbers(this.state.gameNumber, this.state.currentGuess);
    console.log('this is the feedback: ', feedback)
    this.setState({
      currentGuess: this.state.currentGuess, 
      guessedNumbers: this.state.guessedNumbers.concat(this.state.currentGuess),
      resultMessage: feedback.message,
      resultColor: feedback.color
    },
      function() {
        console.log(this.state.guessedNumbers);
        input.value = '';
        // compareNumbers(this.state.gameNumber, this.state.currentGuess)
      })
  }

  render() {
    console.log('CURRENT STATE: ', this.state)
    return (
      <div className="mainScreen">
        <NewGameButton newGame={this.newGame} />
        <GameStatus guessedNumbers={this.state.guessedNumbers} gameNumber={this.state.gameNumber}/>
        <GuessInput submitGuess={this.submitGuess} handleChange={this.handleChange}/>
        <ResultMessage resultMessage={this.state.resultMessage} resultColor={this.state.resultColor}/>
      </div>
    );
  }
}

