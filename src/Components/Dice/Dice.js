import React from "react";

if (module.hot) {
  module.hot.accept();
}
class Dice extends React.Component {
  render() {
    return (
      <div>
        <div className={`dice dice${this.props.roll[0]}`}></div>
        <div className={`dice dice${this.props.roll[1]}`}></div>
      </div>
    );
  }
}

export default Dice;
