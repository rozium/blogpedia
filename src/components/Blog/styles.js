import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px 12px;
  background-color: #FCFCFC;
  box-shadow: 0px 1px 2px 1px rgba(166, 166, 166, .2);
  margin-bottom: 12px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const Title = styled.div`
  font-family: 'Comfortaa', cursive;
  font-size: 24px;
  color: #393D3F;
`;

export const Description = styled.div`
  font-size: 18px;
  color: #565656;
`;