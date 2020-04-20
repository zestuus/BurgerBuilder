import styled from "styled-components";

export const StyledBuildControl = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  text-align: center;
  box-shadow: 0 2px 1px #ccc;
  padding: 10px 0;
  position: fixed;
  margin: auto;
  bottom: 0;
`;

export const StyledOrderButton = styled.button`
  background-color: #DAD735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  margin: 5px;
  
  :hover, :active {
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
  }
  
  :disabled {
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }
  
  :not(:disabled) {
    animation: enable 0.3s linear;
  }
  
  @keyframes enable {
    0% {
      transform: scale(1);
  }
    60% {
      transform: scale(1.1);
  }
    100% {
      transform: scale(1);
  }
  }
`;

export default StyledBuildControl;