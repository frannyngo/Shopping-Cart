import { useShoppingCart } from "../../functions/shoppingCart";
import {
  CloseButton,
  ShoppingCartContainer,
  TitleDiv,
} from "./ShoppingCartStyles";

export default function ShoppingCart() {
  const { closeCart } = useShoppingCart();

  return (
    <ShoppingCartContainer>
      <TitleDiv>
        <h1>Cart</h1>
        <CloseButton onClick={closeCart}>X</CloseButton>
      </TitleDiv>
    </ShoppingCartContainer>
  );
}
