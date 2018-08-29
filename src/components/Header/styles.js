import React from "react";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: 1px solid #cecece;
  box-shadow: 0px 1px 2px 1px rgba(166, 166, 166, .1);
`;

export const Logo = styled.div`
  font-family: 'Comfortaa', cursive;
  font-weight: bolder;
  font-size: 32px;
  color: #4FA149;
  padding: 8px 0px 5px 15px;
`;