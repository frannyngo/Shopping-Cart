import storeItems from "../../constants/items.json";
import { Section } from "../GlobalStyles";
import { ItemContainer } from "./StoreStyles";

export default function Store() {
  return (
    <Section style={{ flexDirection: "column" }}>
      <h1>Store</h1>

      {storeItems.map((item) => {
        return (
          <ItemContainer>
            <p>{JSON.stringify(item)}</p>
          </ItemContainer>
        );
      })}
    </Section>
  );
}
