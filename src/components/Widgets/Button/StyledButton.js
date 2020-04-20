import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => {
    switch (props.type) {
      case "danger": return "#ff8171";
      case "warning": return "#f2bf34";
      case "success": return "#59ac60";
      default: return "#fff";
    }  
  }};
  height: 40px;
  ${props=> props.width? "width: " + props.width : ""};
  margin: 5px;
  font-weight: bold;
  font-size: 1.1em;
  border: 2px solid #676b6e;
  box-shadow: 0 2px 3px #484a4e;
  :hover {
    box-shadow: 0 4px 5px #222325;
    cursor: pointer;
  }
  :active {
    position: relative;
    top: 2px;
    box-shadow: 0 4px 5px #000000;
  }
  :focus {
    outline: 0;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;