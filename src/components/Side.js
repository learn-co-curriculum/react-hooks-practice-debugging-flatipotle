import React from "react";

function Side({ sides }) {
  return <div>{sides.join(", ")}</div>;
}

export default Side;
