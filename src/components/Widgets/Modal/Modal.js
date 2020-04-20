import React from 'react';

import StyledModal from "./Styled";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => props.visible ? (
  <React.Fragment>
    <Backdrop
      visible={props.visible}
      toggleVisibility={props.toggleVisibility}/>
    <StyledModal
      onClick={(e)=>{e.stopPropagation();}}
      visible={props.visible}>
      {props.children}
    </StyledModal>
  </React.Fragment>
): null;

export default Modal;