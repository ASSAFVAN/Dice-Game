import React from "react";
if (module.hot) {
  module.hot.accept();
}
class Dice extends React.Component {
  state = { roll1: null, roll2: null, sum: null };

  render() {
    return <div>dice image goes here</div>;
  }
}

export default Dice;
