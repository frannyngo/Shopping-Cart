import styled, { keyframes } from "styled-components";

const slide = keyframes`
from {
    transform: translate(110%, 0)
}
to {
    transform: translate(0, 0)
}
`;

export const ShoppingCartContainer = styled.div`
  background: pink;
  width: 80%;
  height: 100%;
  position: absolute;
  display: flex;
  right: 0;
  animation: 1s ${slide} ease-in;
  animation-fill-mode: forwards;
`;
