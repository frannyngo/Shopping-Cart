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
import { useShoppingCart } from "../../functions/shoppingCart";

type ItemInfoProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function ItemInfo({ id, name, price, imgUrl }: ItemInfoProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <ItemInfoContainer>
      <ItemImage src={imgUrl} alt={name} />
      <InfoContainer>
        <h2>{name}</h2>
        <h2>{formatCurrency(price)}</h2>
      </InfoContainer>
      <RemoveOrAddContainer>
        {quantity === 0 ? (
          <AddButton onClick={() => increaseCartQuantity(id)}>
            Add To Cart
          </AddButton>
        ) : (
          <RemoveContainer>
            <ToggleContainer>
              <ToggleButton
                onClick={() => decreaseCartQuantity(id)}
                disabled={quantity === 0 ? true : false}
              >
                -
              </ToggleButton>
              <Info>{quantity} in cart</Info>
              <ToggleButton onClick={() => increaseCartQuantity(id)}>
                +
              </ToggleButton>
            </ToggleContainer>
            <RemoveButton onClick={() => removeFromCart(id)}>
              Remove
            </RemoveButton>
          </RemoveContainer>
        )}
      </RemoveOrAddContainer>
    </ItemInfoContainer>
  );
}
