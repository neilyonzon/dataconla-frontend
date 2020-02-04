import React from "react";
import CountdownClock from "react-countdown-now";

class Countdown extends React.Component {
  renderer({ days, hours, minutes, seconds, completed }) {
    if (completed) {
      return <div>Hi</div>;
    } else {
      return (
        <div className="countdown">
          <p>Save the Date</p>
          <p>March 5, 2020</p>
          <div className="countdown-values">
            <p>
              <span className="countdown-num">{days}</span>
              <br />
              days
            </p>
            <div className="v-line"></div>
            <p>
              <span className="countdown-num">{hours}</span>
              <br />
              hours
            </p>
            <div className="v-line"></div>
            <p>
              <span className="countdown-num">{minutes}</span>
              <br />
              minutes
            </p>
            <div className="v-line"></div>
            <p>
              <span className="countdown-num">{seconds}</span>
              <br />
              seconds
            </p>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <CountdownClock
        date={"2020-03-02T22:31:03"}
        renderer={this.renderer}
      ></CountdownClock>
    );
  }
}

export default Countdown;
