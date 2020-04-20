import React from 'react';

import Table from "../../Widgets/Table/Table";
import Button from "../../Widgets/Button/StyledButton";

const COLUMN_NAMES = ["Ingredient", "Amount", "Price", "Total"];

const OrderSummary = props => {
  const countedIngredients = props.ingredients.reduce((result, layer) => {
      result[layer.name] = result[layer.name] ? result[layer.name] + layer.amount : layer.amount;
      return result
    }, {});
  const ingredientsList = Object.keys(countedIngredients)
    .map((ingredient) => [
        ingredient,
        countedIngredients[ingredient],
        props.prices[ingredient],
        props.prices[ingredient]*countedIngredients[ingredient]
      ]);
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger consist of:</p>
      <Table
        rows={ingredientsList}
        columnNames={COLUMN_NAMES}
        columnWidth={"110px"}/>
      <h4>Total price: <em>{props.totalPrice}$</em></h4>
      <p>Continue to Checkout?</p>
      <Button onClick={props.cancel} type="danger">Cancel</Button>
      <Button onClick={props.checkout} type="success">Continue</Button>

    </React.Fragment>
  );
};

export default OrderSummary;