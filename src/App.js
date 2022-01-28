import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  submit = () => {
    const inputVal = document.getElementById("txtInput").value;
    this.setState({ value: inputVal });
  };

  clickedEnter = (e) => {
    console.log(e);
    const input = document.getElementById("txtInput");

    if (e.key === "Enter") {
      this.setState({ value: input.value });
    } else if (e.key === "Backspace") {
      this.setState({ value: input.value });
    }
  };
  render() {
    return (
      <div className="container">
        <h1>A Message You Would Like To Pass</h1>
        <input type="text" id="txtInput" onKeyUp={this.clickedEnter} />
        <button id="submit" onClick={this.submit}>
          SUBMIT
        </button>
        <p className="error">Please Enter A Value To Pass</p>
        <h2 style={{ color: "black" }}>Last Message Delivered</h2>
        <p className="output">{this.state.value}</p>
      </div>
    );
  }
}

export default App;
