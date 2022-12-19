import React, { Component } from "react";

export class PersonTwo extends Component {
  render() {
    const { handlePersonTwoValue, handlePersonTwoSubmit, allData } = this.props;
    return (
      <div className="main-chatBox">
        <div className="text-side">
          {allData.map((a, b) => {
            if (a.key == "right") {
              return (
                <p key={b} className="right">
                  {a.text}
                </p>
              );
            } else {
              return (
                <p key={b} className="left">
                  {a.text}
                </p>
              );
            }
          })}
        </div>
        <div className="event-side">
          <form onSubmit={handlePersonTwoSubmit}>
            <input
              type="text"
              placeholder="Write your message"
              onChange={handlePersonTwoValue}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonTwo;
