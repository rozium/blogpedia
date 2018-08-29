import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './screens/HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
