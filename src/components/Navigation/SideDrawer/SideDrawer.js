import React from 'react';

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Widgets/Backdrop/Backdrop";
import {StyledSideDrawer} from "./Styled"

const SideDrawer = props => props.visible ? (
  <React.Fragment>
    <Backdrop
      toggleVisibility={props.toggleVisibility}
      visible={props.visible}/>
    <StyledSideDrawer type={props.visible? "open": "closed"}>
      <Logo height="11%"/>
      <nav>
        <NavigationItems/>
      </nav>
    </StyledSideDrawer>
  </React.Fragment>
): null;

export default SideDrawer;