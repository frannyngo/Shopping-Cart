import { Link } from "react-router-dom";
import {
  CartImage,
  Container,
  LinkContainer,
  ShoppingCartContainer,
  CartButton,
  Counter,
} from "./NavBarStyles";
import Cart from "../../assets/cart.svg";
import { useShoppingCart } from "../../functions/shoppingCart";

export default function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <Container color="white">
      <LinkContainer>
        {/* <Link
          to="/"
          style={{ textDecoration: "none", fontSize: 20, color: "black" }}
        >
          Home
        </Link> */}
        {/* <Link
          to="/store"
          style={{ textDecoration: "none", fontSize: 20, color: "black" }}
        >
          Store
        </Link> */}
        {/* <Link
          to="/about"
          style={{ textDecoration: "none", fontSize: 20, color: "black" }}
        >
          About
        </Link> */}
      </LinkContainer>
      <ShoppingCartContainer>
        <CartButton onClick={openCart}>
          <CartImage src={Cart} />
          <Counter>{cartQuantity}</Counter>
        </CartButton>
      </ShoppingCartContainer>
    </Container>
  );
}
