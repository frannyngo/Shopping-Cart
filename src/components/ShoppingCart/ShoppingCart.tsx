import {
  CloseButton,
  ShoppingCartContainer,
  TitleDiv,
} from "./ShoppingCartStyles";

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <TitleDiv>
        <h1>Cart</h1>
        <CloseButton>X</CloseButton>
      </TitleDiv>
    </ShoppingCartContainer>
  );
}
