import formatCurrency from "../../functions/formatCurrency";
import { useShoppingCart } from "../../functions/shoppingCart";
import CartItems from "../CartItems/CartItems";
import {
  CloseButton,
  ShoppingCartContainer,
  TitleDiv,
  ItemContainer,
} from "./ShoppingCartStyles";
import storeItems from "../../constants/items.json";

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
      <h2>
        Total:{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((item) => item.id === cartItem.id);
            return total + item!.price * cartItem.quantity;
          }, 0)
        )}
      </h2>
    </ShoppingCartContainer>
  );
}
