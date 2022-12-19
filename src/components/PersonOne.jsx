import React, { Component } from "react";

export class PersonOne extends Component {
  render() {
    const { handlePersonOneValue, handlePersonOneSubmit, allData ,inputRef} = this.props;

    return (
      <div className="main-top">
        <h2>Person One</h2>
        <div className="main-chatBox">
          <div className="text-side">
            {allData.map((a, b) => {
              if (a.key == "right") {
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
            <form onSubmit={handlePersonOneSubmit}>
              <input
                type="text"
                placeholder="Write your message"
                onChange={handlePersonOneValue}
                ref={inputRef}
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonOne;
