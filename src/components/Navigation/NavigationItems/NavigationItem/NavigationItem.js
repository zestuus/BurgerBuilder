import React from 'react';

import {StyledListItem, StyledLink} from "./Styled";

const NavigationItem = props => {
  return (
    <StyledListItem>
      <StyledLink active={props.active} href={props.link}>{props.children}</StyledLink>
    </StyledListItem>
  );
};

export default NavigationItem;