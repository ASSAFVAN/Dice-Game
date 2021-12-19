import React from "react";
if (module.hot) {
  module.hot.accept();
}
class Player extends React.Component {
  render() {
    let styling;
    let isVisible;
    if (this.props.name === `PLAYER ${this.props.active}`) {
      styling = { backgroundColor: "lightgray" };
    }
    // if (
    //   this.props.name === `PLAYER ${this.props.active}` &&
    //   this.props.winner === true
    // ) {
    //   isVisible = true;
    // }

    return (
      <div className="player-wrap" style={styling}>
        <h2>{this.props.name}</h2>

        <div className="player-wrap__tscore-container">
          <div className="total-score">{this.props.totalScore}</div>
        </div>
        <div className="player-wrap__cscore-container">
          <div className="current-score-text">CURRENT</div>
          <div className="current-score">{this.props.currentScore}</div>
        </div>
        {/* <div className={`winner ${isVisible ? "" : "hide"}`}>winner</div> */}
      </div>
    );
  }
}

export default Player;
