import React from 'react';

import * as Styled from "./Styled";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const filling = props.ingredients.map((layer, layerIndex) => [...Array(layer.amount)]
    .map((__, itemIndex) => (
        <BurgerIngredient
          key={layer.name + "-" + layerIndex + "-" + itemIndex}
          type={layer.name}
          onClick={()=>props.removeIngredient(layerIndex)}
          />
      )
    )
  )
  .reduce((arr, el) => arr.concat(el), [])
  .reverse();

  if(!filling.length){
    filling.push(<h2 key="empty">Add something here...</h2>)
  }

  return (
    <Styled.Burger>
      <BurgerIngredient type="bread-top"/>
      {filling}
      <BurgerIngredient type="bread-bottom"/>
    </Styled.Burger>
  );
};

export default Burger;