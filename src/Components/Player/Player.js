import React from "react";
if (module.hot) {
  module.hot.accept();
}
class Player extends React.Component {
  state = {
    active: true,
  };
  isActive = () => {
    let activePlayer = this.props.active;
    if (activePlayer === 1) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    return (
      <div className="player-wrap">
        <h2>{this.props.name}</h2>
        <div className={`player-wrap-active ${this.isActive} `}>
          {/* {this.props.active}
          {this.isActive()} */}
        </div>
        <div className="player-wrap__tscore-container">
          <div className="total-score">{this.props.totalScore}</div>
        </div>
        <div className="player-wrap__cscore-container">
          <div className="current-score-text">CURRENT</div>
          <div className="current-score">{this.props.currentScore}</div>
        </div>
      </div>
    );
  }
}

export default Player;
