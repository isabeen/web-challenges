import styled, { css } from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: green;

  ${(props) =>
    props.$isBlack &&
    css`
      background-color: black;
    `}

  &:hover {
    background-color: red;
  }
`;
