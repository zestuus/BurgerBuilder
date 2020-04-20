import styled from "styled-components";

export const StyledTr = styled.tr`
  text-align: center;
  background-color: ${props => props.emphasized ? "#eee": "#fff"};
  ${props => props.headRow ? "font-size: 1.1em": ""};
  ${props => props.headRow ? "font-weight: bold": ""};
`;

export const StyledTd = styled.td`
  ${props => props.columnWidth? "width: " + props.columnWidth: ""}
  ${props => props.firstColumn? "text-transform: capitalize;": ""}
`;