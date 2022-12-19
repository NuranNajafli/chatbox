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
    let personOne = {
      key: "left",
      text: e.target.value,
    };

    this.setState({ one: personOne });
  };
  handlePersonTwoValue = (e) => {
    let personTwo = {
      key: "right",
      text: e.target.value,
    };
    this.setState({ two: personTwo });
  };
  handlePersonOneSubmit = (e) => {
    e.preventDefault();
    this.state.allData.push(this.state.one);
    this.setState({ fakeRender: "" });
  };
  handlePersonTwoSubmit = (e) => {
    e.preventDefault();
    this.state.allData.push(this.state.two);
    this.setState({ fakeRender: "" });
  };
  render() {
    return (
      <div className="main">
        <PersonOne
          handlePersonOneValue={this.handlePersonOneValue}
          handlePersonOneSubmit={this.handlePersonOneSubmit}
          allData={this.state.allData}
        />
        <PersonTwo
          handlePersonTwoValue={this.handlePersonTwoValue}
          handlePersonTwoSubmit={this.handlePersonTwoSubmit}
          allData={this.state.allData}
        />
      </div>
    );
  }
}

export default Main;
