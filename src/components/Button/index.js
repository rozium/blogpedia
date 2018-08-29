import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { styles, children } = this.props;
    return (
      <button className={`btn btn-${styles}`}>{children}</button>
    );
  }
}

Button.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  styles: 'default',
}

export default Button;
