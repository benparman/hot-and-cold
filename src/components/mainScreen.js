import React from 'react';

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
        <h2>The current number is: {this.state.gameNumber}</h2>
        <h3>Your guesses are: {this.state.guessedNumbers}</h3>
        <h3>You've guessed {this.state.guessCount} times.</h3>

        <button onClick={e => {e.preventDefault();this.newGame()}}>
          Generate New Number
        </button>
        <form onSubmit ={this.submitGuess}>
          <input placeholder="guess a number"
            onChange = {e => {
              e.preventDefault();
              this.handleChange(e);
            }}
          />
          <input type="submit" value="Guess!"/>
        </form>
      </div>
    );
  }
}

