import React from "react";
if (module.hot) {
  module.hot.accept();
}
class Player extends React.Component {
  render() {
    return (
      <div className="player-wrap">
        <h1>{this.props.name}</h1>
        <div className="player-wrap__total-score">Total Score</div>
        <div className="score">{this.props.totalScore}</div>
        <div className="player-wrap__current-score">Current Score</div>
        <div className="score">{this.props.currentScore}</div>
      </div>
    );
  }
}

export default Player;
