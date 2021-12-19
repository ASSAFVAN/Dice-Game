import React from "react";
import Dice from "./Components/Dice/Dice";
import Button from "./Components/Button/Button";
import Player from "./Components/Player/Player";
import "./App.css";

class App extends React.Component {
  state = {
    pointsToWin: 100,
    dices: [null, null],
    currentPlayer: 1,
    winner: false,
    player1CurrentScore: 0,
    player1TotalScore: 0,
    player2CurrentScore: 0,
    player2TotalScore: 0,
  };

  rollDice = () => {
    const rollRandomNumbers = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    this.setState({
      dices: rollRandomNumbers,
    });

    let diceSum = rollRandomNumbers.reduce((a, b) => a + b, 0);
    let p1Current = this.state.player1CurrentScore;
    let p2Current = this.state.player2CurrentScore;

    if (this.state.currentPlayer === 1) {
      if (diceSum !== 12) {
        this.setState({
          player1CurrentScore: p1Current + diceSum,
        });
      } else {
        this.setState({
          player1CurrentScore: 0,
          currentPlayer: 2,
        });
      }
    } else {
      if (diceSum !== 12) {
        this.setState({
          player2CurrentScore: p2Current + diceSum,
        });
      } else {
        this.setState({
          player2CurrentScore: 0,
          currentPlayer: 1,
        });
      }
    }
  };

  resetState = () => {
    this.setState({
      pointsToWin: 100,
      dices: [null, null],
      currentPlayer: 1,
      winner: false,
      player1CurrentScore: 0,
      player1TotalScore: 0,
      player2CurrentScore: 0,
      player2TotalScore: 0,
    });
  };

  isWinner = () => {
    if (
      this.state.currentPlayer === 1 &&
      this.state.player1TotalScore >= this.state.pointsToWin
    ) {
      console.log(`player ${this.state.currentPlayer} win `);

      this.setState({ winner: true });
    }
    if (
      this.state.currentPlayer === 2 &&
      this.state.player2TotalScore >= this.state.pointsToWin
    ) {
      console.log(`player ${this.state.currentPlayer} win`);
      this.setState({ winner: true });
    }
  };

  holdFunc = () => {
    this.isWinner();

    this.setState({
      dices: [null, null],
      player1CurrentScore: 0,
      player2CurrentScore: 0,
    });

    if (this.state.winner === false) {
      if (this.state.currentPlayer === 1) {
        this.setState({
          player1TotalScore:
            this.state.player1CurrentScore + this.state.player1TotalScore,
          currentPlayer: 2,
        });
      } else if (this.state.currentPlayer === 2) {
        this.setState({
          player2TotalScore:
            this.state.player2CurrentScore + this.state.player2TotalScore,
          currentPlayer: 1,
        });
      }
    }
  };

  render() {
    return (
      <div className="board-game-container">
        <Player
          name="PLAYER 1"
          active={this.state.currentPlayer}
          currentScore={this.state.player1CurrentScore}
          totalScore={this.state.player1TotalScore}
          winner={this.state.winner}
        />
        <div className="button-wrap">
          <Button title="New Game" handleClick={this.resetState} />
          <Dice roll={this.state.dices} />
          <Button title="Roll Dice" handleClick={this.rollDice} />
          <Button title="Hold" handleClick={this.holdFunc} />
        </div>
        <Player
          name="PLAYER 2"
          active={this.state.currentPlayer}
          currentScore={this.state.player2CurrentScore}
          totalScore={this.state.player2TotalScore}
          winner={this.state.winner}
        />
      </div>
    );
  }
}

export default App;
