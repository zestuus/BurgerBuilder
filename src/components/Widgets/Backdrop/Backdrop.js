import React from 'react';
import StyledBackdrop from "./Styled";

const Backdrop = props => props.visible ? (
  <StyledBackdrop
    onClick={props.toggleVisibility}
    style={{
      opacity: props.visible? "1": "0",
      zIndex: props.visible? "200": "-100"
    }}/>
): null;

export default Backdrop;