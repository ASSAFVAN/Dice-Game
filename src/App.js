import React from "react";
import Dice from "./Components/Dice/Dice";
import Button from "./Components/Button/Button";
import Player from "./Components/Player/Player";
import "./App.css";

class App extends React.Component {
  state = {
    pointsToWin: 100,
    dices: [null, null],
    playerTurn: 0,
    winner: false,
    players: [
      { currentScore: 0, totallScore: 0 },
      { currentScore: 0, totallScore: 0 },
    ],
  };
  render() {
    return (
      <div>
        <Player
          name="Player 1"
          currentScore={this.state.players[0].currentScore}
        />
        <Button />
        <Button />
        <Button />
        <Dice />
        <Player name="Player 2" />
      </div>
    );
  }
}

export default App;
