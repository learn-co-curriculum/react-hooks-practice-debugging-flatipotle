import React from "react";
import blackBeans from "../images/fillings/black-beans.png";
import brownRice from "../images/fillings/brown-rice.png";
import fajitaVeg from "../images/fillings/fajita-veggies.png";
import pintoBeans from "../images/fillings/pinto-beans.png";
import whiteRice from "../images/fillings/white-rice.png";

function FillingForm(props) {
  return (
    <>
      <h1>
        <label htmlFor="fillings">Fillings</label>
      </h1>
      <div className="inline fields ui centered grid">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="white-rice"
              type="checkbox"
              value="White Rice"
              name="fillings"
              checked={props.fillings.includes("White Rice")}
              onChange={props.handleOnChange}
            />
            <img
              src={whiteRice}
              height="100px"
              width="100px"
              alt="white rice"
            />
            <label htmlFor="white-rice">White Rice</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="brown-rice"
              type="checkbox"
              value="Brown Rice"
              name="fillings"
              checked={props.fillings.includes("Brown Rice")}
              onChange={props.handleOnChange}
            />
            <img
              src={brownRice}
              height="100px"
              width="100px"
              alt="brown rice"
            />
            <label htmlFor="brown-rice">Brown Rice</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="black-beans"
              type="checkbox"
              value="Black Beans"
              name="fillings"
              checked={props.fillings.includes("Black Beans")}
              onChange={props.handleOnChange}
            />
            <img
              src={blackBeans}
              height="100px"
              width="100px"
              alt="black beans"
            />
            <label htmlFor="black-beans">Black Beans</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="pinto"
              type="checkbox"
              value="Pinto Beans"
              name="fillings"
              checked={props.fillings.includes("Pinto Beans")}
              onChange={props.handleOnChange}
            />
            <img
              src={pintoBeans}
              height="100px"
              width="100px"
              alt="pinto beans"
            />
            <label htmlFor="pinto">Pinto Beans</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="veg"
              type="checkbox"
              value="Fajita Veggies"
              name="fillings"
              checked={props.fillings.includes("Fajita Veggies")}
              onChange={props.handleOnChange}
            />
            <img
              src={fajitaVeg}
              height="100px"
              width="100px"
              alt="fajita veggies"
            />
            <label htmlFor="veg">Fajita Veggies</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FillingForm;
