import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import { Provider } from 'react-redux'
import configureStore from "./redux/configureStore"
import createHistory from "history/createBrowserHistory";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
