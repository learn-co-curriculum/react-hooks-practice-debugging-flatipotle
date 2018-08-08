import React from 'react'

const ToppingForm = (props) => {
  return (
    <div>
      <h1><label htmlFor="toppings">Toppings</label></h1>
      <div className="inline fields ui centered grid">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="mild"
              type="checkbox"
              value="Mild Hot Sauce"
              name="toppings"
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/mild.png')} height="100px" width="100px" alt="mild hot sauce" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/medium.png')} height="100px" width="100px" alt="medium hot sauce" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/hot.png')} height="100px" width="100px" alt="hot sauce" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/corn-salsa.png')} height="100px" width="100px" alt="corn salsa" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/sour-cream.png')} height="100px" width="100px" alt="sour cream" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/lettuce.png')} height="100px" width="100px" alt="lettuce" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/guac.png')} height="100px" width="100px" alt="guacamole" />
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
              onChange={props.handleChange}
            />
            <img src={require('../images/toppings/cheese.png')} height="100px" width="100px" alt="cheese" />
            <label htmlFor="cheese">Cheese</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToppingForm
