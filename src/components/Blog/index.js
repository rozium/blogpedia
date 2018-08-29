import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Title,
  Wrapper,
  Description,
} from './styles'

class Blog extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    );
  }
}

Blog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Blog;
