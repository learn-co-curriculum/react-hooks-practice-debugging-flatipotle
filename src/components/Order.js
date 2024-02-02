import React, { useState } from "react";
import burritoImg from "../images/burrito-bowl.jpg";
import Side from "./Side";

function Order(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="ui centered raised card">
      <div className="image">
        <img src={burritoImg} alt="burrito bowl" />
      </div>
      <div className="content">
        <b>Protein:</b>
        <br />
        {props.protein.length > 0 ? props.protein.join(", ") : "None"}
        <br />
        <b>Fillings:</b>
        <br />
        {props.fillings.length > 0 ? props.fillings.join(", ") : "None"}
        <br />
        <b>Toppings:</b>
        <br />
        {props.toppings.length > 0 ? props.toppings.join(", ") : "None"}
        <br />
      </div>
      <div className="extra content">
        {props.sides.length > 0 ? (
          <button className="ui button small" onClick={handleClick}>
            View Sides
          </button>
        ) : (
          <p>No sides</p>
        )}

        {/* this is just a shortcut to writing state.isClicked ? <Side sides={props.sides} /> : null */}
        {isClicked && <Side sides={props.sides} />}
      </div>
    </div>
  );
}

export default Order;
