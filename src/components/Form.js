import React, { useState } from "react";
import ProteinForm from "./ProteinForm";
import FillingForm from "./FillingForm";
import ToppingForm from "./ToppingForm";
import SideForm from "./SideForm";

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: [],
};

function Form({ addOrder }) {
  const [formState, setFormState] = useState(DEFAULT_STATE);

  function handleSubmit(event) {
    event.preventDefault();
    addOrder(formState);

    setFormState({
      ...DEFAULT_STATE,
    });
    event.target.reset();
  }

  function handleChange(itemType, item) {
    if (formState[itemType].includes(item)) {
      setFormState({
        ...formState,
        [itemType]: formState[itemType].filter((ingr) => ingr !== item),
      });
    } else {
      setFormState({
        ...formState,
        [itemType]:[...formState[itemType], item],
      });
    }
  }

  // console.log("FormState:", formState)

  return (
    <div className="ui raised container segment">
      <h1 className="ui block header">Order Form</h1>
      <form className="ui form" id="order-form" onSubmit={handleSubmit}>
        <ProteinForm
          protein={formState.protein}
          onChangeClick={handleChange}
        />

        <FillingForm
          fillings={formState.fillings}
          onChangeClick={handleChange}
        />

        <ToppingForm
          toppings={formState.toppings}
          onChangeClick={handleChange}
        />

        <SideForm 
          sides={formState.sides} 
          onChangeClick={handleChange}
        />

        <br />

        <button className="ui blue big button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
