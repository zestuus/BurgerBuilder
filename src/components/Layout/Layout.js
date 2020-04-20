import React, {useState} from "react";

import StyledMain from "./Styled";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const Layout = props => {
  const [state, setState] = useState({
    sideDrawerIsShown: false
  });
  const toggleSideDrawerVisibility = () => {
    setState({
      ...state,
      sideDrawerIsShown: !state.sideDrawerIsShown
    });
  };
  return (
    <React.Fragment>
      <Toolbar openSideDraw={toggleSideDrawerVisibility}/>
      <SideDrawer
        toggleVisibility={toggleSideDrawerVisibility}
        visible={state.sideDrawerIsShown}/>
      <StyledMain>
        {props.children}
      </StyledMain>
    </React.Fragment>
  );
};
export default Layout;