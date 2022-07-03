import { useShoppingCart } from "../../functions/shoppingCart";
import { CartItemContainer } from "./CartItemsStyles";
import storeItems from "../../constants/items.json";

type CartItemsProps = {
  id: number;
  quantity: number;
};

export default function CartItems({ id, quantity }: CartItemsProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === null) return null;
  return (
    <CartItemContainer>
      <img src={item?.imgUrl} style={{ height: 125, width: 75 }} />
      <p>{item?.name}</p>
      <p>{item?.price}</p>
      <p>{quantity}</p>
    </CartItemContainer>
  );
}
