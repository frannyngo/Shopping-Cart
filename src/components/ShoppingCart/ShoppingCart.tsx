import { useShoppingCart } from "../../functions/shoppingCart";
import CartItems from "../CartItems/CartItems";
import {
  CloseButton,
  ShoppingCartContainer,
  TitleDiv,
  ItemContainer,
} from "./ShoppingCartStyles";

export default function ShoppingCart() {
  const { closeCart, cartItems } = useShoppingCart();

  console.log(cartItems.length);
  return (
    <ShoppingCartContainer>
      <TitleDiv>
        <h1>Cart</h1>
        <CloseButton onClick={closeCart}>X</CloseButton>
      </TitleDiv>
      <ItemContainer>
        {cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
      </ItemContainer>
    </ShoppingCartContainer>
  );
}
