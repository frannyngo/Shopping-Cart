import React, { useState } from "react";
import {
  ItemInfoContainer,
  ItemImage,
  InfoContainer,
  ToggleContainer,
  Info,
  ToggleButton,
} from "./ItemInfoStyles";

type ItemInfoProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function ItemInfo({ id, name, price, imgUrl }: ItemInfoProps) {
  const [count, setCount] = useState(0);

  return (
    <ItemInfoContainer>
      <ItemImage src={imgUrl} alt={name} />
      <InfoContainer>
        <h2>{name}</h2>
        <h2>{price}</h2>
      </InfoContainer>
      <ToggleContainer>
        <ToggleButton>-</ToggleButton>
        <Info>{count} in cart</Info>
        <ToggleButton>+</ToggleButton>
      </ToggleContainer>
    </ItemInfoContainer>
  );
}
