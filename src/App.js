import React from "react";
import Dice from "./Components/Dice/Dice";
import Button from "./Components/Button/Button";
import Player from "./Components/Player/Player";
import "./App.css";

class App extends React.Component {
  state = {
    pointsToWin: 100,
    dices: [null, null],
    currentPlayer: 0,
    winner: false,
    player1Active: 1,
    player2Active: 0,
    player1CurrentScore: 0,
    player1TotalScore: 0,
    player2CurrentScore: 0,
    player2TotalScore: 0,
  };

  handleRollDice = () => {
    this.rollDice();
    // this.updateScore();
  };

  componentDidMount() {
    this.rollDice();
    // this.holdFunc();
  }

  rollDice = () => {
    const rollRandomNumbers = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    this.setState({ dices: rollRandomNumbers });
    console.log(this.state.dices);
  };

  updateScore = () => {
    if (this.state.player1Active === 1) {
      this.setState((prevState) => ({
        player1CurrentScore:
          prevState.player1CurrentScore +
          prevState.dice[0] +
          prevState.dices[1],
      }));
    }
  };

  // resetState = () => {
  //   this.setState({
  //     pointsToWin: 100,
  //     dices: [null, null],
  //     currentPlayer: 0,
  //     winner: false,
  //     player1Active: 0,
  //     player2Active: 0,
  //     player1CurrentScore: 0,
  //     player1TotalScore: 0,
  //     player2CurrentScore: 0,
  //     player2TotalScore: 0,
  //   });
  // };

  isWinner = () => {
    if (
      this.state.player1Active === 1 &&
      this.state.player1TotalScore >= this.state.pointsToWin
    ) {
      console.log(`player ${this.state.player1Active} win 1`);
      this.setState({ winner: true });
    }
    if (
      this.state.player2Active === 1 &&
      this.state.player2TotalScore >= this.state.pointsToWin
    ) {
      console.log(`player ${this.state.player2Active + 1} win`);
      this.setState({ winner: true });
    }

    // to do: disable buttons except new game
  };

  handleDoubleSix = () => {};

  holdFunc = () => {
    this.handleDoubleSix();
    this.isWinner();

    // this.setState({
    //   dices: [null, null],
    //   player1CurrentScore: 0,
    //   player2CurrentScore: 0,
    // });

    if (this.state.winner === false) {
      if (this.state.player1Active === 1) {
        this.setState({
          player1TotalScore:
            this.state.player1CurrentScore + this.state.player1TotalScore,
          player1Active: 0,
          player2Active: 1,
        });
      } else if (this.state.player1Active === 2) {
        this.setState({
          player2TotalScore:
            this.state.player2CurrentScore + this.state.player2TotalScore,
          player1Active: 1,
          player2Active: 0,
        });
      }
    }

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Player
          name="Player 1"
          currentScore={this.state.player1CurrentScore}
          totalScore={this.state.player1TotalScore}
        />
        <Button title="New Game" handleClick={this.resetState} />
        <Button title="Roll Dice" handleClick={this.handleRollDice} />
        <Button title="Hold" handleClick={this.holdFunc} />
        <Player
          name="Player 2"
          currentScore={this.state.player2CurrentScore}
          totalScore={this.state.player2TotalScore}
        />
      </div>
    );
  }
}

export default App;
