import React from 'react';

import {StyledList} from "./Styled";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <StyledList>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </StyledList>
  );
};

export default NavigationItems;