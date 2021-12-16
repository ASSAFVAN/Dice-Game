import React from "react";
import "./App.css";
import CustomButton from "./Components/CustomButton";

class App extends React.Component {
  state = { color: "" };
  displayButtons = () => {
    const colors = ["blue", "red", "yellow"];
    return colors.map((color) => {
      return <CustomButton text={color} parentCallback={this.handleCallback} />;
    });
  };

  handleCallback = (childData) => {
    this.setState({ color: childData });
  };

  render() {
    const { color } = this.state;
    return (
      <div>
        {this.displayButtons()}
        <div>The color selected is:{this.state.color}</div>
      </div>
    );
  }
}

export default App;
