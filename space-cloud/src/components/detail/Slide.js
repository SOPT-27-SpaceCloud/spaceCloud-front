import React from "react";
import styled from "styled-components";
export default function Slide({ img }) {
  return (
      <IMG src={img} />
  );
}
const IMG = styled.img`
  width: 360px;
  height: 270px;
  border-radius: 8px;
  padding-top: 0%;
  margin-top: 16px;
  margin-bottom: 16px; 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;