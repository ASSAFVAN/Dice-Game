import React from "react";
import dice_1 from "/Users/assaf/Desktop/Fullstack Developer Course/weekend/dice_game/src/images/dice-1.png";
import dice_2 from "/Users/assaf/Desktop/Fullstack Developer Course/weekend/dice_game/src/images/dice-2.png";
import dice_3 from "/Users/assaf/Desktop/Fullstack Developer Course/weekend/dice_game/src/images/dice-3.png";
import dice_4 from "/Users/assaf/Desktop/Fullstack Developer Course/weekend/dice_game/src/images/dice-4.png";
import dice_5 from "/Users/assaf/Desktop/Fullstack Developer Course/weekend/dice_game/src/images/dice-5.png";
import dice_6 from "/Users/assaf/Desktop/Fullstack Developer Course/weekend/dice_game/src/images/dice-6.png";

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
