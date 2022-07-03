import { useShoppingCart } from "../../functions/shoppingCart";
import {
  CloseButton,
  ShoppingCartContainer,
  TitleDiv,
  ItemContainer,
} from "./ShoppingCartStyles";

export default function ShoppingCart() {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <ShoppingCartContainer>
      <TitleDiv>
        <h1>Cart</h1>
        <CloseButton onClick={closeCart}>X</CloseButton>
      </TitleDiv>
      <ItemContainer>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <p>item</p>
            </div>
          );
        })}
      </ItemContainer>
    </ShoppingCartContainer>
  );
}
