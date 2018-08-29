import React, { Component } from "react";
import { Link } from "react-router-dom";
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
