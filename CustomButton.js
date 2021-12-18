import React from "react";

if (module.hot) {
  module.hot.accept();
}
class CustomButton extends React.Component {
  onTrigger = () => {
    this.props.parentCallback(this.props.text);
  };

  render() {
    return (
      <button onClick={this.onTrigger} className={this.props.text}>
        {this.props.text}
      </button>
    );
  }
}
export default CustomButton;
