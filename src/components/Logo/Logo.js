import React from 'react';

import burgerLogo from "../../assets/images/logo.png"
import {StyledLogo, StyledImage, StyledTitle} from "./Styled"

const Logo = props => {
  return (
    <StyledLogo onClick={()=>{window.location.replace("/")}} height={props.height}>
      <StyledImage src={burgerLogo} alt="burgerLogo"/>
      <StyledTitle>BurgerBuilder</StyledTitle>
    </StyledLogo>
  );
};

export default Logo;