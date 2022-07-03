import { useShoppingCart } from "../../functions/shoppingCart";
import {
  CartItemContainer,
  Details,
  NameContainer,
  TotalContainer,
} from "./CartItemsStyles";
import storeItems from "../../constants/items.json";
import formatCurrency from "../../functions/formatCurrency";
import { CloseButton } from "../ShoppingCart/ShoppingCartStyles";

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
      <img src={item?.imgUrl} style={{ height: 125, width: 125 }} />
      <Details>
        <NameContainer>
          <p style={{ fontSize: 20 }}>{item?.name}</p>
          <span style={{ color: "grey", marginLeft: 10 }}>x{quantity}</span>
        </NameContainer>
        <p style={{ fontSize: 20, color: "grey" }}>${item?.price}</p>
      </Details>
      <TotalContainer>
        {formatCurrency(item!.price * quantity)}
        <CloseButton
          style={{ marginLeft: 10 }}
          onClick={() => removeFromCart(item!.id)}
        >
          X
        </CloseButton>{" "}
      </TotalContainer>
    </CartItemContainer>
  );
}
