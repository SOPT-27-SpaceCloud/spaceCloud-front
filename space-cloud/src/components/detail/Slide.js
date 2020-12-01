import React from "react";
import styled from "styled-components";
export default function Slide({ img }) {
  return (
      <IMG src={img} />
  );
}
const IMG = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding-top: 0%;
  margin-top: 16px;
  margin-bottom: 16px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;