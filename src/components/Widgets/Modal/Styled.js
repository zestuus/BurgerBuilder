import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  z-index: ${props => props.visible? "500": "-100"};
  opacity: ${props => props.visible? "1": "0"};
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 25%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  overflow: hidden;
  
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

export default StyledModal;