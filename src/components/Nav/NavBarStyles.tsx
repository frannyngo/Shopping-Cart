import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 30%;
  flex-direction: column;
  padding-right: 40px;
`;

export const CartButton = styled.button`
  position: relative;
  border-radius: 180%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartImage = styled.img`
  background: transparent;
  width: 2rem;
  height: 2rem;
  position: relative;
`;

export const Counter = styled.div`
  position: absolute;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 180%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
  color: white;
  background: red;
`;
