import { Link } from "react-router-dom";
import { Section } from "../../pages/GlobalStyles";

export default function NavBar() {
  return (
    <Section color="white">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/store" style={{ textDecoration: "none" }}>
        Store
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        About
      </Link>
    </Section>
  );
}
