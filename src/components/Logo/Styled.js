import styled from "styled-components";

export const StyledLogo = styled.div`
  background-color: #fff;
  padding: 8px;
  height: ${props=>props.height?props.height:"80%"};
  margin-bottom: ${props=>props.height?"32px":"0"};
  box-sizing: border-box;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  height: 100%;
`;

export const StyledTitle = styled.h3`
  color: black;
  display: inline-block;
  margin: 5px;
  position: relative;
  top: -7px;
  @media (max-width: 499px) {
    display: none;
  }
`;