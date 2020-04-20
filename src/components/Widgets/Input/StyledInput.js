import styled from "styled-components";

export const Input = styled.input`
  background-color: #ffffff;
  height: 26px;
  width: ${props=>props.width || "100px"};
  padding: 5px;
  margin: 5px;
  font-weight: bold;
  font-size: 1.1em;
  border: 2px solid #515251;
  box-shadow: 0 2px 3px #242526;
  :focus { 
    outline: 0;
    box-shadow: 0 3px 4px #191a1b; 
  }
`;

export default Input;