import React from 'react';
import './MainScreen.css'
import GameStatus from './GameStatus';
import GuessInput from './GuessInput';
import ResultMessage from './ResultMessage';
import NewGameButton from './NewGameButton';
import WhatButton from './WhatButton';
import {newNumber, compareNumbers} from './utils';

export default class MainScreen extends React.Component {  //react methods are overwritten by what we set below (newGame, handleChange, render, etc)
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: newNumber(),
      guessedNumbers: [],
      currentGuess: undefined,
      resultMessage: 'Make a guess!',
      resultColor: "MainCard, red",
      currentDisplay: this.showGameScreen
    }
  }

  //'inputMask' is used to prevent users from entering invalid characters
  //don't worry for this project but research later

  //convert input string-number to a number before comparison
  //validate input for number only 0-99 or no more than 2 digits
  //print error on screen in present (ie must enter numbers only)
  newGame = () => {  //********Call this on load to define initial state?
    const newNum = newNumber();  
    console.log('This is newNum: ', newNum);  //check if input is valid, then setState differently if true/false
    this.setState(
      {gameNumber: newNum,
      guessCount: 0,
      guessedNumbers: [],
      currentGuess: undefined,
      resultMessage: 'Make a guess!',
      resultColor: ''
    })
  }

  showInfo = () => {
    this.setState(
      {currentDisplay: this.showInfoScreen}
    )
  }

  showGame = () => {
    this.setState(
      {currentDisplay: this.showGameScreen}
    )
  }

  showGameScreen = () => {
    return (
      <div className="darkBox">
            <WhatButton showInfo={this.showInfo} />
            <NewGameButton newGame={this.newGame} />
            <div className="appContainer">
            <h1 className="white">HOT or COLD?</h1>
              <div className="MainCard, borderBox">
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
    )
  }

  showInfoScreen = () => {
    return (
      <div className="infoScreenBox">
        <div className="infoScreenContainer">
          <div className="darkRedBox">
            <h1 className="white">What do I do?</h1>
          </div>
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
          <ol>
            <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
            <li>You need to guess until you can find the hidden secret number.</li>
            <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
          </ol>
          <p>So, Are you ready?</p>
          <button className="close" onClick={e => {
            e.preventDefault();
            this.showGame()}}href="#">Got it!
          </button>
        </div>
      </div>
    )
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
        this.state.currentDisplay()
    );
  }
}

