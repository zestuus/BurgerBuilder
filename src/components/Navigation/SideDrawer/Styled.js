import styled from "styled-components";

export const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  
  ${props => {
    switch (props.type) {
      case "open": return "transform: translateX(0);";
      case "closed": return "transform: translateX(-100%);";
      default: return "";
    }
  }};
  
  @media (min-width: 500px) {
    display: none;
  }
`;