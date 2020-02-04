import React from "react";

function ctaBox(props) {
  return (
    <div className={"cta-box " + props.data.color}>
      <div className="cta-box-content">
        <h3 className="small-header">{props.data.header}</h3>
        <p>{props.text}</p>
        <a href={props.data.link} className={"btn " + props.data.button}>
          {props.data.cta}
        </a>
      </div>
    </div>
  );
}

export default React.memo(ctaBox);
