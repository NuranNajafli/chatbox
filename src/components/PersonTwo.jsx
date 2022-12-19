import React, { Component } from "react";

export class PersonTwo extends Component {
  render() {
    const { handlePersonTwoValue, handlePersonTwoSubmit, allData } = this.props;
    return (
      <div className="main-top">
        <h2>Person Two</h2>
        <div className="main-chatBox">
          <div className="text-side">
          {allData.map((a, b) => {
              if (a.key == "left") {
                return (
                  <div className="txt1" key={b}>
                    <p  className="left">
                      {a.text}
                    </p>
                    <p className="txt1-left"> {a.date}</p>
                  </div>
                );
              } else {
                return (
                  <div className="txt2" key={b}>
                    <p  className="right">
                      {a.text}
                    </p>
                    <p className="txt2-right">{a.date}</p>
                  </div>
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
      </div>
    );
  }
}

export default PersonTwo;
