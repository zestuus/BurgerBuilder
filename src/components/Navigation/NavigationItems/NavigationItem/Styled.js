import styled from "styled-components";

export const StyledListItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  align-items: center;
  
  @media (min-width: 500px){
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`;

export const StyledLink = styled.a`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  
  ${props => props.active ? `
      color: #40a4c8;
    `: ""}
  
  :hover, :active {
    color: #40a4c8;
  }
  @media (min-width: 500px){
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    
    ${props => props.active ? `
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: white;
      `: ""}
    
    :hover, :active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`;