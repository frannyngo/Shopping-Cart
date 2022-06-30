import styled from "styled-components";

export const ItemInfoContainer = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  background: orange;
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const ToggleContainer = styled.div`
  background: yellow;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.p`
  padding: 5px;
  font-size: 20px;
`;

export const ToggleButton = styled.button`
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
`;

export const RemoveOrAddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: orange;
`;

export const RemoveButton = styled.button`
  background: red;
  color: white;
  width: 80px;
  height: 40px;
  border-radius: 5px;
`;

export const AddButton = styled.button`
  background: blue;
  color: white;
  width: 80%;
  height: 40px;
  border-radius: 5px;
`;

export const RemoveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
