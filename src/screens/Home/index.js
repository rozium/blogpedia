import React, { Component } from "react";
import { string, number, arrayOf, object } from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 'a',
    };
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}

Home.propTypes = {
};

export default Home;
