import React, { Component, Fragment } from "react";
import { string, number, arrayOf, object } from "prop-types";

import Header from '../../components/Header'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 'a',
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

Home.propTypes = {
};

export default Home;
