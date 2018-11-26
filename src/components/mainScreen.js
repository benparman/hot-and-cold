import React from 'react';

// import gameScreen from './gameScreen';
// import guessedNumbers from './guessedNumbers';
// import guessInput from './guessInput';
// import msgBox from './msgBox';


export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: 55,
      userGuess: 50,
      guessCount: 0,
      guessedNumbers: [],
      currentGuess: undefined
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
  }

  generateNumber = () => {
    const newNum = Math.ceil(Math.random().toFixed(2)*100);
    console.log('This is newNum: ', newNum);
    this.setState({gameNumber: newNum})
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({currentGuess: e.target.value})
    console.log(e.target.value);
  }

  submitGuess = (e) => {
    e.preventDefault();
    this.state.guessedNumbers.push(this.state.currentGuess);
    this.setState({currentGuess: undefined})
    console.log(this.state.guessedNumbers);
  }

  render() {
    const gameNumber = this.state.gameNumber;
    console.log(<h1>"The current number is: "{gameNumber}</h1>)

    return (
      <div className="mainScreen">
        <h2>The current number is : {gameNumber}</h2>
        <h3>Your guess are: {this.state.guessedNumbers}</h3>
        <button onClick={e => {e.preventDefault();this.generateNumber()}}>
          Generate New Number
        </button>
        <form onSubmit={this.submitGuess}>
          <input type="text" placeholder="guess!"
            value={this.state.currentGuess}
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

