import React from "react";

function Side(props) {
  return <div>{props.sides.join(", ")}</div>;
}

export default Side;
