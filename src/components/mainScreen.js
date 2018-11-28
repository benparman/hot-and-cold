import React from 'react';
import './MainScreen.css'
import GameStatus from './GameStatus';
import GuessInput from './GuessInput';
import ResultMessage from './ResultMessage';
import NewGameButton from './NewGameButton';
import {newNumber, compareNumbers} from './utils';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: newNumber(),
      guessedNumbers: [],
      currentGuess: undefined,
      resultMessage: 'Make a guess!',
      resultColor: "MainCard, red"
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
      resultMessage: 'Make a guess!',
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
      <div>
        <NewGameButton newGame={this.newGame} />
        
        <div className="MainScreen">
        <h1 className="white">HOT or COLD?</h1>

          <div className="MainCard">
              <div className={this.state.resultColor}>
                <ResultMessage resultMessage={this.state.resultMessage} resultColor={this.state.resultColor}/>
              </div>
              <div className="MainCard">
                <GuessInput submitGuess={this.submitGuess} handleChange={this.handleChange} guessNumber={this.state.guessedNumbers.length}/>
              </div>
              <div className="MainCard, teal">
                <GameStatus guessedNumbers={this.state.guessedNumbers} gameNumber={this.state.gameNumber}/>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

