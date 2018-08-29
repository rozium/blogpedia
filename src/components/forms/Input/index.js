import React, { Component } from "react";
import PropTypes from "prop-types";

import { Group } from './styles';

const formatToSlug = (string) => string.trim().toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

class Input extends Component {
  render() {
    const { type, label, placeholder, value } = this.props;
    return (
      <Group>
        {label && <label htmlFor={`inp-${formatToSlug(label)}`}>{label}</label>}
        <input type={type} value={value} className="form-control" id={`inp-${formatToSlug(label)}`} placeholder={placeholder} />
      </Group>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input;
