import {
  ItemInfoContainer,
  ItemImage,
  InfoContainer,
  ToggleContainer,
} from "./ItemInfoStyles";

type ItemInfoProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function ItemInfo({ id, name, price, imgUrl }: ItemInfoProps) {
  return (
    <ItemInfoContainer>
      <ItemImage src={imgUrl} alt={name} />
      <InfoContainer>
        <h2>{name}</h2>
        <h2>{price}</h2>
      </InfoContainer>
      <ToggleContainer>
        <button>-</button>
        <p>2</p>
        <button>+</button>
      </ToggleContainer>
    </ItemInfoContainer>
  );
}
