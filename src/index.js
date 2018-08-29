import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
