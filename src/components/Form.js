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

function Form(props) {
  const [formState, setFormState] = useState(DEFAULT_STATE);

  function handleSubmit(event) {
    event.preventDefault();
    props.addOrder(formState);

    setFormState({
      ...DEFAULT_STATE,
    });
    event.target.reset();
  }

  function handleChange(event) {
    const itemType = event.target.name;
    const item = event.target.value;

    if (formState[itemType].includes(item)) {
      setFormState({
        ...formState,
        [itemType]: formState[itemType].filter((ingr) => ingr !== item),
      });
    } else {
      setFormState({
        ...formState,
        [itemType]: formState[itemType].concat(item),
      });
    }
  }

  return (
    <div className="ui raised container segment">
      <h1 className="ui block header">Order Form</h1>
      <form className="ui form" id="order-form" onSubmit={handleSubmit}>
        <ProteinForm protein={formState.protein} handleChange={handleChange} />

        <FillingForm
          fillings={formState.fillings}
          handleChange={handleChange}
        />

        <ToppingForm
          toppings={formState.toppings}
          handleChange={handleChange}
        />

        <SideForm sides={formState.sides} handleChange={handleChange} />

        <br />

        <button className="ui blue big button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
