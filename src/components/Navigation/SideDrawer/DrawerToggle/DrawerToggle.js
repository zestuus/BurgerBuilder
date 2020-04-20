import React from 'react';

import {StyledDrawerToggle, StyledDiv} from "./Styled"

const DrawerToggle = props => (
  <StyledDrawerToggle onClick={props.onClick}>
      <StyledDiv></StyledDiv>
      <StyledDiv></StyledDiv>
      <StyledDiv></StyledDiv>
  </StyledDrawerToggle>
);

export default DrawerToggle;