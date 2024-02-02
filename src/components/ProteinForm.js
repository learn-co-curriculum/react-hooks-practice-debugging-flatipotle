import React from "react";
import barbacoa from "../images/protein/barbacoa.png";
import carnitas from "../images/protein/steak.png";
import chicken from "../images/protein/chicken.png";
import sofritas from "../images/protein/sofritas.png";
import steak from "../images/protein/steak.png";

function ProteinForm(props) {
  return (
    <>
      <h1>
        <label htmlFor="protein">Protein</label>
      </h1>
      <div className="inline fields ui centered grid">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="barbacoa"
              type="checkbox"
              value="Barbacoa"
              name="protein"
              checked={props.protein.includes("Barbacoa")}
              onChange={props.handleOnChange}
            />
            <img src={barbacoa} height="100px" width="100px" alt="barbacoa" />
            <label htmlFor="barbacoa">Barbacoa</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="steak"
              type="checkbox"
              value="Steak"
              name="protein"
              checked={props.protein.includes("Steak")}
              onChange={props.handleOnChange}
            />
            <img src={steak} height="100px" width="100px" alt="steak" />
            <label htmlFor="steak">Steak</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="chicken"
              type="checkbox"
              value="Chicken"
              name="protein"
              checked={props.protein.includes("Chicken")}
              onChange={props.handleOnChange}
            />
            <img src={chicken} height="100px" width="100px" alt="chicken" />
            <label htmlFor="chicken">Chicken</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="carnitas"
              type="checkbox"
              value="Carnitas"
              name="protein"
              checked={props.protein.includes("Carnitas")}
              onChange={props.handleOnChange}
            />
            <img src={carnitas} height="100px" width="100px" alt="carnitas" />
            <label htmlFor="carnitas">Carnitas</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input
              id="sofritas"
              type="checkbox"
              value="Sofritas"
              name="protein"
              checked={props.protein.includes("Sofritas")}
              onChange={props.handleOnChange}
            />
            <img src={sofritas} height="100px" width="100px" alt="sofritas" />
            <label htmlFor="sofritas">Sofritas</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProteinForm;
