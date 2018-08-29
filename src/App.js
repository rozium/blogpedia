import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import HomePage from './screens/HomePage';
import BlogPage from './screens/BlogPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/b/:slug" component={BlogPage} />
      </Switch>
    );
  }
}

export default App;
