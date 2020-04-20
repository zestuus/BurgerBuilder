import React from 'react';

import {StyledHeader, StyledNav} from "./Styled";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  return (
    <StyledHeader>
      <DrawerToggle onClick={props.openSideDraw}/>
      <Logo/>
      <StyledNav>
        <NavigationItems/>
      </StyledNav>
    </StyledHeader>
  );
};

export default Toolbar;