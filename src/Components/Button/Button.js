import React from "react";

if (module.hot) {
  module.hot.accept();
}
class Button extends React.Component {
  render() {
    return (
      <button
        onClick={(e) => {
          this.props.handleClick(e);
        }}
      >
        {this.props.title}{" "}
      </button>
    );
  }
}

export default Button;
