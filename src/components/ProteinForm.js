import React from "react";
import barbacoa from "../images/protein/barbacoa.png";
import carnitas from "../images/protein/steak.png";
import chicken from "../images/protein/chicken.png";
import sofritas from "../images/protein/sofritas.png";
import steak from "../images/protein/steak.png";

function ProteinForm({ protein, onChangeClick }) {

  function handleChange(e) {
    const { name, value } = e.target
    onChangeClick(name, value)    
  }  

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
              checked={protein.includes("Barbacoa")}
              onChange={handleChange}
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
              checked={protein.includes("Steak")}
              onChange={handleChange}
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
              checked={protein.includes("Chicken")}
              onChange={handleChange}
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
              checked={protein.includes("Carnitas")}
              onChange={handleChange}
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
              checked={protein.includes("Sofritas")}
              onChange={handleChange}
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
