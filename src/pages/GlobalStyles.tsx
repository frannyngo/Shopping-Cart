import styled from "styled-components";

export const Theme = styled.div`
  background: white;
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  background: ${(props) => (props.color ? props.color : "grey")};
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 2000px;
  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;
