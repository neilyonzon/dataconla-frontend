import React from "react";
import CountUp from "react-countup";

function stats(props) {
  return (
    <div className="stats">
      <ul>
        <li>
          <CountUp start={0} end={2000} delay={0}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <br />
          participants
          <hr></hr>
        </li>
        <li>
          <CountUp start={0} end={42} delay={0}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <br />
          speakers
        </li>
        <li>
          <CountUp start={0} end={2000} delay={0}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          +
          <br />
          panels
        </li>
      </ul>
    </div>
  );
}

export default React.memo(stats);
