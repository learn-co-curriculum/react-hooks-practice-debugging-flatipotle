import React from "react";
import chipsGuac from "../images/sides/chips-guac.png";
import chipsQueso from "../images/sides/chips-queso.png";
import chipssalsa from "../images/sides/chips-salsa.png";
import chips from "../images/sides/chips.png";
import drink from "../images/sides/drink.png";
import taco from "../images/sides/taco.png";
import tortilla from "../images/sides/tortilla.png";

function SideForm({ sides, onChangeClick}) {

  function handleChange(e) {
    const { name, value } = e.target
    onChangeClick(name, value)    
  }  

  return (
    <>
      <h1>
        <label htmlFor="sides">Sides</label>
      </h1>
      <div className="inline fields ui centered grid">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="chips"
              type="checkbox"
              value="Chips"
              name="sides"
              checked={sides.includes("Chips")}
              onChange={handleChange}
            />
            <img src={chips} height="100px" width="100px" alt="chips" />
            <label htmlFor="chips">Chips</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="chips-salsa"
              type="checkbox"
              value="Chips & Salsa"
              name="sides"
              checked={sides.includes("Chips & Salsa")}
              onChange={handleChange}
            />
            <img
              src={chipssalsa}
              height="100px"
              width="100px"
              alt="chips and salsa"
            />
            <label htmlFor="chips-salsa">Chips & Salsa</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="chips-guac"
              type="checkbox"
              value="Chips & Guac"
              name="sides"
              checked={sides.includes("Chips & Guac")}
              onChange={handleChange}
            />
            <img
              src={chipsGuac}
              height="100px"
              width="100px"
              alt="chips and guac"
            />
            <label htmlFor="chips-guac">Chips & Guac</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="chips-queso"
              type="checkbox"
              value="Chips & Queso"
              name="sides"
              checked={sides.includes("Chips & Queso")}
              onChange={handleChange}
            />
            <img
              src={chipsQueso}
              height="100px"
              width="100px"
              alt="chips and queso"
            />
            <label htmlFor="chips-queso">Chips & Queso</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="tortila"
              type="checkbox"
              value="Tortilla"
              name="sides"
              checked={sides.includes("Tortilla")}
              onChange={handleChange}
            />
            <img src={tortilla} height="100px" width="100px" alt="tortilla" />
            <label htmlFor="tortila">Tortilla</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="taco"
              type="checkbox"
              value="Taco"
              name="sides"
              checked={sides.includes("Taco")}
              onChange={handleChange}
            />
            <img src={taco} height="100px" width="100px" alt="taco" />
            <label htmlFor="taco">Taco</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="drink"
              type="checkbox"
              value="Fountain Drink"
              name="sides"
              checked={sides.includes("Fountain Drink")}
              onChange={handleChange}
            />
            <img
              src={drink}
              height="100px"
              width="100px"
              alt="fountain drink"
            />
            <label htmlFor="drink">Fountain Drink</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideForm;