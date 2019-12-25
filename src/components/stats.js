import React from "react";
import CountUp from "react-countup";

function stats(props) {
  return (
    <div className={"stats " + props.color}>
      <ul>
        <li>
          <CountUp start={0} end={props.stats[0].number} delay={0}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <br />
          {props.stats[0].text}
          <hr></hr>
        </li>
        <li>
          <CountUp start={0} end={props.stats[1].number} delay={0}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <br />
          speakers
          <hr></hr>
        </li>
        <li>
          <CountUp start={0} end={2000} delay={0}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          +
          <br />
          panels
          <hr></hr>
        </li>
      </ul>
    </div>
  );
}

export default React.memo(stats);
