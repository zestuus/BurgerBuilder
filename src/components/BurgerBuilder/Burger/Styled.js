import styled from "styled-components";

export const Burger = styled.div`
  width: 100%;
  margin: 10px auto;
  height: 250px;
  overflow-y: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  
  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
  
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 300px;
  }
  
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 600px;
    height: 430px;
  }
`;
