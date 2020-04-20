import React from 'react';
import PropTypes from 'prop-types'

import * as Ingredients from './Styled'

const BurgerIngredient = props => {
  let ingredient;

  switch(props.type){
    case "bread-bottom":
      ingredient = <Ingredients.BreadBottom/>; break;
    case "bread-top":
      ingredient = (
        <Ingredients.BreadTop>
          <Ingredients.Seeds1/>
          <Ingredients.Seeds2/>
        </Ingredients.BreadTop>
      ); break;
    case "meat":
      ingredient = <Ingredients.Meat onClick={props.onClick}/>; break;
    case "cheese":
      ingredient = <Ingredients.Cheese onClick={props.onClick}/>; break;
    case "salad":
      ingredient = <Ingredients.Salad onClick={props.onClick}/>; break;
    case "bacon":
      ingredient = <Ingredients.Bacon onClick={props.onClick}/>; break;
    default:
      ingredient = null;
  }

  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.oneOf([
    "bread-bottom",
    "bread-top",
    "meat",
    "cheese",
    "salad",
    "bacon",
  ])
};

export default BurgerIngredient;