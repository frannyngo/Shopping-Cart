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
  background: white;
  width: 80%;
  height: 100%;
  position: absolute;
  display: flex;
  right: 0;
  animation: 1s ${slide} ease-in;
  animation-fill-mode: forwards;
  overflow: hidden;
  padding: 20px;
  flex-direction: column;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 25px;
  border-width: 0px;
  background: white;
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  background: pink;
  width: 100%;
`;
