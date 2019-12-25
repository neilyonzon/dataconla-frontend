import React from "react";

function headliner(props) {
  return <h1 className="headliner primary">{props.text}</h1>;
}

export default React.memo(headliner);
