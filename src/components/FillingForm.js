import React from 'react'

const FillingForm = (props) => {
  return (
    <div>
      <h1><label htmlFor="fillings">Fillings</label></h1>
      <div className="inline fields ui centered grid">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="white-rice"
              type="checkbox"
              value="White Rice"
              name="fillings"
              onChange={props.handleChange}
            />
            <img src={require('../images/fillings/white-rice.png')} height="100px" width="100px" alt="white rice" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/fillings/brown-rice.png')} height="100px" width="100px" alt="brown rice" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/fillings/black-beans.png')} height="100px" width="100px" alt="black beans" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/fillings/pinto-beans.png')} height="100px" width="100px" alt="pinto beans" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/fillings/fajita-veggies.png')} height="100px" width="100px" alt="fajita veggies" />
            <label htmlFor="veg">Fajita Veggies</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FillingForm
