import React, { useState } from "react";
import {
  ItemInfoContainer,
  ItemImage,
  InfoContainer,
  ToggleContainer,
  Info,
  ToggleButton,
  RemoveOrAddContainer,
  RemoveButton,
  AddButton,
  RemoveContainer,
} from "./ItemInfoStyles";
import formatCurrency from "../../functions/formatCurrency";

type ItemInfoProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function ItemInfo({ id, name, price, imgUrl }: ItemInfoProps) {
  const [count, setCount] = useState(0);
  let quantity = 1;

  function add() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }

  return (
    <ItemInfoContainer>
      <ItemImage src={imgUrl} alt={name} />
      <InfoContainer>
        <h2>{name}</h2>
        <h2>{formatCurrency(price)}</h2>
      </InfoContainer>
      <RemoveOrAddContainer>
        {quantity === 0 ? (
          <AddButton>Add To Cart</AddButton>
        ) : (
          <RemoveContainer>
            <ToggleContainer>
              <ToggleButton
                onClick={minus}
                disabled={count === 0 ? true : false}
              >
                -
              </ToggleButton>
              <Info>{count} in cart</Info>
              <ToggleButton onClick={add}>+</ToggleButton>
            </ToggleContainer>
            <RemoveButton>Remove</RemoveButton>
          </RemoveContainer>
        )}
      </RemoveOrAddContainer>
    </ItemInfoContainer>
  );
}
