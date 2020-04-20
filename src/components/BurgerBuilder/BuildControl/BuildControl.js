import React from 'react';

import StyledBuildControl, {StyledOrderButton} from "./Styled";
import Input from "../../Widgets/Input/StyledInput";
import Button from "../../Widgets/Button/StyledButton";
import Select from "../../Widgets/Select/StyledSelect";

const controls = [
  "Meat",
  "Cheese",
  "Salad",
  "Bacon",
].map(control => (
  <option key={control.toLowerCase() + "-option"} value={control.toLowerCase()}>
    {control}
  </option>
));

const BuildControl = props => {
  return (
    <StyledBuildControl>
      <h1 style={{color: "white", textShadow: "0 2px 2px black", margin: "7px"}}>
        Current price: {props.totalPrice}$
      </h1>
      <Select onChange={props.changeType} value={props.typeToAdd} id="ingredients">
        {controls}
      </Select>
      <Input onChange={props.changeAmount} value={props.amountToAdd}
        type="number" step="1" min="1" max="5" width="30px"/>
      <Button onClick={props.addLayer} type="success" disabled={props.modalIsVisible}>
        Add
      </Button>
      <Button onClick={props.removeAll} type="danger" disabled={props.totalPrice===0 || props.modalIsVisible}>
        Remove All
      </Button>
      <br/>
      <StyledOrderButton onClick={props.toggleModalVisibility}
        disabled={props.totalPrice===0 || props.modalIsVisible}>
        ORDER NOW
      </StyledOrderButton>
    </StyledBuildControl>
  );
};

export default BuildControl;