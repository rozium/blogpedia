import React, { Component } from "react";
import {
  Logo,
  HeaderWrapper,
} from './styles'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo>blogpedia</Logo>
      </HeaderWrapper>
    );
  }
}


export default Header;
