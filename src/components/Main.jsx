import React, { Component } from "react";
import PersonOne from "./PersonOne";
import PersonTwo from "./PersonTwo";

export class Main extends Component {
  state = {
    allData: [],
    one: {},
    two: {},
    fakeRender: "",
  };
  handlePersonOneValue = (e) => {
    let d = new Date().toTimeString().slice(0, 8);

    let personOne = {
      key: "left",
      text: e.target.value,
      date: d,
    };

    this.setState({ one: personOne });
  };
  handlePersonTwoValue = (e) => {
    let d = new Date().toTimeString().slice(0, 8);
    let personTwo = {
      key: "right",
      text: e.target.value,
      date: d,
    };
    this.setState({ two: personTwo });

  };
  handlePersonOneSubmit = (e) => {
    e.preventDefault();
    this.state.allData.push(this.state.one);
    this.setState({ fakeRender: "" });
    e.target.children[0].value=" "

  };
  handlePersonTwoSubmit = (e) => {
    e.preventDefault();
    this.state.allData.push(this.state.two);
    this.setState({ fakeRender: "" });
    e.target.children[0].value=" "

  };
  render() {
    return (
      <div className="main">
        <PersonOne
          handlePersonOneValue={this.handlePersonOneValue}
          handlePersonOneSubmit={this.handlePersonOneSubmit}
          allData={this.state.allData}
          date={this.state.date1}
          inputRef={this.state.inputRef}
        />
        <PersonTwo
          handlePersonTwoValue={this.handlePersonTwoValue}
          handlePersonTwoSubmit={this.handlePersonTwoSubmit}
          allData={this.state.allData}
          date={this.state.date2}
        />
      </div>
    );
  }
}

export default Main;
