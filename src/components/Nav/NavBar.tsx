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

export default function NavBar() {
  return (
    <Container color="white">
      <LinkContainer>
        <Link
          to="/"
          style={{ textDecoration: "none", fontSize: 20, color: "black" }}
        >
          Home
        </Link>
        <Link
          to="/store"
          style={{ textDecoration: "none", fontSize: 20, color: "black" }}
        >
          Store
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none", fontSize: 20, color: "black" }}
        >
          About
        </Link>
      </LinkContainer>
      <ShoppingCartContainer>
        <CartButton>
          <CartImage src={Cart} />
          <Counter>2</Counter>
        </CartButton>
      </ShoppingCartContainer>
    </Container>
  );
}
