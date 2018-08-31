import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Name,
  Wrapper,
  Description,
} from './styles'

class Blog extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <Wrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Wrapper>
    );
  }
}

Blog.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

export default Blog;
