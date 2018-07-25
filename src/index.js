import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const fetchMock = require('fetch-mock');

if (process.env.NODE_ENV !== 'production') {
  fetchMock.get('/api/quote/random', {
    data: {
      quote: 'Some random quote',
      author: 'Me Li'
    }
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
