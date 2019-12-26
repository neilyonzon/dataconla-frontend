import React from "react";

function ctaBox(props) {
  return (
    <div className={"cta-box center " + props.data.color}>
      <h3 className="small-header">{props.data.header}</h3>
      <p>{props.text}</p>
      <a href="#" className="btn btn-secondary">
        Hi
      </a>
    </div>
  );
}

export default React.memo(ctaBox);
