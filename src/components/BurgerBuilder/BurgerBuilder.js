import React, {useState} from "react";

import Burger from "./Burger/Burger";
import BuildControl from "./BuildControl/BuildControl";
import Modal from "../Widgets/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const ACCURACY = 10**2;

const BurgerBuilder = props => {
  const [state, setState] = useState({
    ingredients: [],
    amountToAdd: "1",
    typeToAdd: "bacon",
    totalPrice: 0,
    modalIsVisible: false
  });

  const changeAmount = event => {
    setState({
      ...state,
      amountToAdd: event.target.value
    })
  };
  const changeType = event => {
    setState({
      ...state,
      typeToAdd: event.target.value
    })
  };
  const addLayer = () => {
    if(!state.amountToAdd) {
      return;
    }
    const ingredients = [...state.ingredients];
    ingredients.push({name: state.typeToAdd, amount: +state.amountToAdd});
    const newTotalPrice = state.totalPrice + INGREDIENT_PRICES[state.typeToAdd] * state.amountToAdd;
    setState({
      ...state,
      ingredients,
      totalPrice: Math.round((newTotalPrice)*ACCURACY)/ACCURACY
    })
  };
  const removeIngredient = layerIndex => {
    const ingredients = [...state.ingredients];
    const newTotalPrice = state.totalPrice - INGREDIENT_PRICES[ingredients[layerIndex].name];
    if(ingredients[layerIndex].amount > 1) {
      ingredients[layerIndex].amount-= 1;
    } else {
      ingredients.splice(layerIndex,1)
    }
    setState({
      ...state,
      ingredients,
      totalPrice: Math.round((newTotalPrice)*ACCURACY) /ACCURACY
    });
  };
  const removeAll = () => {
    setState({
      ...state,
      ingredients: [],
      totalPrice: 0
    });
  };
  const toggleModalVisibility = () => {
    setState({
      ...state,
      modalIsVisible: !state.modalIsVisible
    });
  };
  const checkout = () => {
    alert("You successfully bought your burger!")
  };

  return (
    <React.Fragment>
      <Modal
        toggleVisibility={toggleModalVisibility}
        visible={state.modalIsVisible}>
        <OrderSummary
          ingredients={state.ingredients}
          prices={INGREDIENT_PRICES}
          totalPrice={state.totalPrice}
          cancel={toggleModalVisibility}
          checkout={checkout}/>
      </Modal>
      <Burger
        ingredients={state.ingredients}
        removeIngredient={removeIngredient}/>
      <BuildControl
        amountToAdd={state.amountToAdd}
        typeToAdd={state.typeToAdd}
        changeAmount={changeAmount}
        changeType={changeType}
        addLayer={addLayer}
        removeAll={removeAll}
        totalPrice={state.totalPrice}
        toggleModalVisibility={toggleModalVisibility}
        modalIsVisible={state.modalIsVisible}/>
    </React.Fragment>
  );
}

export default BurgerBuilder;