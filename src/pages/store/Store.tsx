import storeItems from "../../constants/items.json";
import { Section } from "../GlobalStyles";
import { ItemContainer } from "./StoreStyles";
import ItemInfo from "../../components/ItemInfo.tsx/ItemInfo";

export default function Store() {
  return (
    <Section style={{ flexDirection: "column" }}>
      <h1>Store</h1>

      {storeItems.map((item, index) => {
        return (
          <ItemContainer key={index}>
            <ItemInfo {...item} />
          </ItemContainer>
        );
      })}
    </Section>
  );
}
