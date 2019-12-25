import React from "react";

function headliner(props) {
  return <h1 className={props.color + " header"}>{props.text}</h1>;
}

export default React.memo(headliner);
