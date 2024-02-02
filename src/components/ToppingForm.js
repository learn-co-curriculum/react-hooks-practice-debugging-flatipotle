import React from "react";
import cheese from "../images/toppings/cheese.png";
import cornSalsa from "../images/toppings/corn-salsa.png";
import guac from "../images/toppings/guac.png";
import hot from "../images/toppings/hot.png";
import lettuce from "../images/toppings/lettuce.png";
import medium from "../images/toppings/medium.png";
import mild from "../images/toppings/mild.png";
import sourCream from "../images/toppings/sour-cream.png";

function ToppingForm(props) {
  return (
    <>
      <h1>
        <label htmlFor="toppings">Toppings</label>
      </h1>
      <div className="inline fields ui centered grid">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="mild"
              type="checkbox"
              value="Mild Hot Sauce"
              name="toppings"
              checked={props.toppings.includes("Mild Hot Sauce")}
              onChange={props.handleOnChange}
            />
            <img src={mild} height="100px" width="100px" alt="mild hot sauce" />
            <label htmlFor="mild">Mild Hot Sauce</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="medium"
              type="checkbox"
              value="Medium Hot Sauce"
              name="toppings"
              checked={props.toppings.includes("Medium Hot Sauce")}
              onChange={props.handleOnChange}
            />
            <img
              src={medium}
              height="100px"
              width="100px"
              alt="medium hot sauce"
            />
            <label htmlFor="medium">Medium Hot Sauce</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="hot"
              type="checkbox"
              value="HOT Hot Sauce"
              name="toppings"
              checked={props.toppings.includes("HOT Hot Sauce")}
              onChange={props.handleOnChange}
            />
            <img src={hot} height="100px" width="100px" alt="hot sauce" />
            <label htmlFor="hot">HOT Hot Sauce</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="corn"
              type="checkbox"
              value="Corn Salsa"
              name="toppings"
              checked={props.toppings.includes("Corn Salsa")}
              onChange={props.handleOnChange}
            />
            <img
              src={cornSalsa}
              height="100px"
              width="100px"
              alt="corn salsa"
            />
            <label htmlFor="corn">Corn Salsa</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="sour cream"
              type="checkbox"
              value="Sour Cream"
              name="toppings"
              checked={props.toppings.includes("Sour Cream")}
              onChange={props.handleOnChange}
            />
            <img
              src={sourCream}
              height="100px"
              width="100px"
              alt="sour cream"
            />
            <label htmlFor="sour cream">Sour Cream</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="lettuce"
              type="checkbox"
              value="Lettuce"
              name="toppings"
              checked={props.toppings.includes("Lettuce")}
              onChange={props.handleOnChange}
            />
            <img src={lettuce} height="100px" width="100px" alt="lettuce" />
            <label htmlFor="lettuce">Lettuce</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="guac"
              type="checkbox"
              value="Guac"
              name="toppings"
              checked={props.toppings.includes("Guac")}
              onChange={props.handleOnChange}
            />
            <img src={guac} height="100px" width="100px" alt="guacamole" />
            <label htmlFor="guac">Guac</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="cheese"
              type="checkbox"
              value="Cheese"
              name="toppings"
              checked={props.toppings.includes("Cheese")}
              onChange={props.handleOnChange}
            />
            <img src={cheese} height="100px" width="100px" alt="cheese" />
            <label htmlFor="cheese">Cheese</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToppingForm;
