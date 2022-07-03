import { CartItemContainer } from "./CartItemsStyles";

type CartItemsProps = {
  id: number;
  quantity: number;
};

export default function CartItems({ id, quantity }: CartItemsProps) {
  return <CartItemContainer></CartItemContainer>;
}
