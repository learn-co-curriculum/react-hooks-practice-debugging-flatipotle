import React, { Fragment } from 'react'

const ProteinForm = () => {
  return (
    <Fragment>
      <h1><label htmlFor="protein">Protein</label></h1>
      <div className="inline fields ui centered grid">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="barbacoa"
              type="checkbox"
              value="Barbacoa"
              name="protein"
              checked={ props.protein.includes('Barbacoa') }
              onChange={ props.handleChange }
            />
            <img src={ require('../images/protein/barbacoa.png') } height="100px" width="100px" alt="barbacoa" />
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
              checked={ props.protein.includes('Steak') }
              onChange={ props.handleChange }
            />
            <img src={ require('../images/protein/steak.png') } height="100px" width="100px" alt="steak" />
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
              checked={ props.protein.includes('Chicken') }
              onChange={ props.handleChange }
            />
            <img src={ require('../images/protein/chicken.png') } height="100px" width="100px" alt="chicken" />
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
              checked={ props.protein.includes('Carnitas') }
              onChange={ props.handleChange }
            />
            <img src={ require('../images/protein/carnitas.png') } height="100px" width="100px" alt="carnitas" />
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
              checked={ props.protein.includes('Sofritas') }
              onChange={ props.handleChange }
            />
            <img src={ require('../images/protein/sofritas.png') } height="100px" width="100px" alt="sofritas" />
            <label htmlFor="sofritas">Sofritas</label>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProteinForm
